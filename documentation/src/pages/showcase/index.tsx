import React, { useState, useMemo, useEffect } from 'react';
import Head from "@docusaurus/Head";
import clsx from 'clsx';
import { BlogFooter } from "@site/src/prepverse-theme/blog-footer";
import { CommonHeader } from "@site/src/prepverse-theme/common-header";
import { CommonLayout } from "@site/src/prepverse-theme/common-layout";
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import Translate, { translate } from '@docusaurus/Translate';
import { useHistory, useLocation } from '@docusaurus/router';
import { usePluralForm } from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';
import BackToTopButton from '@theme/BackToTopButton';
import Layout from '@theme/Layout';
import FavoriteIcon from '@site/src/prepverse-theme/icons/FavoriteIcon';
import {
  sortedUsers,
  Tags,
  TagList,
  type User,
  type TagType,
} from '@site/src/pages/showcase/_components/users';
import Heading from '@theme/Heading';
import ShowcaseTagSelect, {
  readSearchTags,
} from './_components/ShowcaseTagSelect';
import ShowcaseFilterToggle, {
  type Operator,
  readOperator,
} from './_components/ShowcaseFilterToggle';
import ShowcaseCard from './_components/ShowcaseCard';
import ShowcaseTooltip from './_components/ShowcaseTooltip';
import styles from './styles.module.css';
import CodeBlock from '@theme/CodeBlock'
import { motion } from 'framer-motion';

const TITLE = translate({ message: 'Open Source Projects Showcase' });
const DESCRIPTION = translate({
  message: 'List of Open Source projects in web-devlopments, app-devlopments, machine-learning, data-science',
});
const SUBMIT_URL = 'https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation/tree/master/4%5D.%20Projects';
const SITE_INFO = `
title: 'project name (<60 char)'
description: 'short description (<120 char)'
preview: 'project image'
website: 'https://prepverse.github.io'
source: 'https://github.com/PrepVerse/LeetVerse',
tags: ['opensource','personal'],
`

type UserState = {
  scrollTopPosition: number;
  focusedElementId: string | undefined;
};

function restoreUserState(userState: UserState | null) {
  const { scrollTopPosition, focusedElementId } = userState ?? {
    scrollTopPosition: 0,
    focusedElementId: undefined,
  };
  // @ts-expect-error: if focusedElementId is undefined it returns null
  document.getElementById(focusedElementId)?.focus();
  window.scrollTo({ top: scrollTopPosition });
}

export function prepareUserState(): UserState | undefined {
  if (ExecutionEnvironment.canUseDOM) {
    return {
      scrollTopPosition: window.scrollY,
      focusedElementId: document.activeElement?.id,
    };
  }

  return undefined;
}

const SearchNameQueryKey = 'name';

function readSearchName(search: string) {
  return new URLSearchParams(search).get(SearchNameQueryKey);
}

function filterUsers(
  users: User[],
  selectedTags: TagType[],
  operator: Operator,
  searchName: string | null,
) {
  if (searchName) {
    // eslint-disable-next-line no-param-reassign
    users = users.filter((user) =>
      user.title.toLowerCase().includes(searchName.toLowerCase()),
    );
  }
  if (selectedTags.length === 0) {
    return users;
  }
  return users.filter((user) => {
    if (user.tags.length === 0) {
      return false;
    }
    if (operator === 'AND') {
      return selectedTags.every((tag) => user.tags.includes(tag));
    }
    return selectedTags.some((tag) => user.tags.includes(tag));
  });
}

function useFilteredUsers() {
  const location = useLocation<UserState>();
  const [operator, setOperator] = useState<Operator>('OR');
  // On SSR / first mount (hydration) no tag is selected
  const [selectedTags, setSelectedTags] = useState<TagType[]>([]);
  const [searchName, setSearchName] = useState<string | null>(null);
  // Sync tags from QS to state (delayed on purpose to avoid SSR/Client
  // hydration mismatch)
  useEffect(() => {
    setSelectedTags(readSearchTags(location.search));
    setOperator(readOperator(location.search));
    setSearchName(readSearchName(location.search));
    restoreUserState(location.state);
  }, [location]);

  return useMemo(
    () => filterUsers(sortedUsers, selectedTags, operator, searchName),
    [selectedTags, operator, searchName],
  );
}

function ShowcaseHeader() {
  return (
    <section className="margin-top--lg  text--center">
      <h1 className={clsx('text-3xl', 'font-bold', 'text-transparent bg-clip-text bg-gradient-to-r text-gradient-to-r from-[#FF9933] to-[#FF4C4D]')}>{TITLE}</h1>
      <p>{DESCRIPTION}</p>
      <Link className="margin-top--lg button button--primary rounded-full" to={SUBMIT_URL}>
        <Translate id="showcase.header.button">
          Add your projects
        </Translate>
      </Link>
    </section>
  );
}

function useSiteCountPlural() {
  const { selectMessage } = usePluralForm();
  return (sitesCount: number) =>
    selectMessage(
      sitesCount,
      translate(
        {
          id: 'showcase.filters.resultCount',
          description:
            'Pluralized label for the number of sites found on the showcase. Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
          message: '1 site|{sitesCount} sites',
        },
        { sitesCount },
      ),
    );
}

function ShowcaseFilters() {
  const filteredUsers = useFilteredUsers();
  const siteCountPlural = useSiteCountPlural();
  return (
    <section className="container margin-top--l margin-bottom--lg">
      <div className={clsx('margin-bottom--sm', styles.filterCheckbox)}>
        <div>
          <h2 className={clsx('text-2xl', 'font-bold')}>
            <Translate id="showcase.filters.title">Filters</Translate>
          </h2>
          <span>{siteCountPlural(filteredUsers.length)}</span>
        </div>
        <ShowcaseFilterToggle />
      </div>
      <ul className={clsx('clean-list', styles.checkboxList)}>
        {TagList.map((tag, i) => {
          const { label, description, color } = Tags[tag];
          const id = `showcase_checkbox_id_${tag}`;

          return (
            <li key={i} className={styles.checkboxListItem}>
              <ShowcaseTooltip
                id={id}
                text={description}
                anchorEl="#__docusaurus">
                <ShowcaseTagSelect
                  tag={tag}
                  id={id}
                  label={label}
                  icon={
                    tag === 'favorite' ? (
                      <FavoriteIcon svgClass={styles.svgIconFavoriteXs} />
                    ) : (
                      <span
                        style={{
                          backgroundColor: color,
                          width: 10,
                          height: 10,
                          borderRadius: '50%',
                          marginLeft: 8,
                        }}
                      />
                    )
                  }
                />
              </ShowcaseTooltip>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

const favoriteUsers = sortedUsers.filter((user) =>
  user.tags.includes('favorite'),
);
const otherUsers = sortedUsers.filter(
  (user) => !user.tags.includes('favorite'),
);

function SearchBar() {
  const history = useHistory();
  const location = useLocation();
  const [value, setValue] = useState<string | null>(null);
  useEffect(() => {
    setValue(readSearchName(location.search));
  }, [location]);
  return (
    <div className={styles.searchContainer}>
      <input
        id="searchbar"
        placeholder={translate({
          message: 'Search for site name...',
          id: 'showcase.searchBar.placeholder',
        })}
        value={value ?? undefined}
        onInput={(e) => {
          setValue(e.currentTarget.value);
          const newSearch = new URLSearchParams(location.search);
          newSearch.delete(SearchNameQueryKey);
          if (e.currentTarget.value) {
            newSearch.set(SearchNameQueryKey, e.currentTarget.value);
          }
          history.push({
            ...location,
            search: newSearch.toString(),
            state: prepareUserState(),
          });
          setTimeout(() => {
            document.getElementById('searchbar')?.focus();
          }, 0);
        }}
      />
    </div>
  );
}

function ShowcaseCardsInfo() {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      drag
      className={styles.dragContainer}
      style={{ position: 'relative' }}
    >
      {/* Top arrow button */}
      <button
        onClick={toggleExpand}
        className={styles.toggleButton}
        style={{
          position: 'absolute',
          bottom: '0',
          right: '0',
          zIndex: 999, // Ensure the button stays on top
        }}
      >
        {isExpanded ? '↑' : '↓'}
      </button>

      {/* Collapsible content */}
      <motion.div
        drag="y" // Enable vertical drag for the content
        className={styles.dragBox}
        style={{
          overflow: 'hidden', // Ensure content outside the visible area is hidden
          height: isExpanded ? 'auto' : 0, // Set height to 0 when collapsed
          position: 'relative', // Ensure child content remains positioned properly
        }}
        animate={{ height: isExpanded ? 'auto' : 0 }} // Animate the height change
        transition={{ duration: 0.3 }}
      >
        <div className={clsx(styles.siteInfo)}>
          <CodeBlock language="yaml" title="info for add your projects">
            {SITE_INFO}
          </CodeBlock>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ShowcaseCards() {
  const filteredUsers = useFilteredUsers();

  if (filteredUsers.length === 0) {
    return (
      <section className="margin-top--lg margin-bottom--xl">
        <div className="container padding-vert--md text--center">
          <h2 className={clsx('text-xl', 'font-bold')}>
            <Translate id="showcase.usersList.noResult">No result</Translate>
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section className="margin-top--lg margin-bottom--xl">
      {filteredUsers.length === sortedUsers.length ? (
        <>
          <div className={styles.showcaseFavorite}>
            <div className="container">
              <div
                className={clsx(
                  'margin-bottom--md',
                  styles.showcaseFavoriteHeader,
                )}>
                <h2 className={clsx('text-xl', 'font-bold')}>
                  <Translate id="showcase.favoritesList.title">
                    My favorites
                  </Translate>
                </h2>
                <FavoriteIcon svgClass={styles.svgIconFavorite} />
              </div>
              <ul
                className={clsx(
                  'container',
                  'clean-list',
                  styles.showcaseList,
                )}>
                {favoriteUsers.map((user) => (
                  <ShowcaseCard key={user.title} user={user} />
                ))}
              </ul>
            </div>
          </div>
          <div className="container margin-top--lg">
            <h2 className={clsx('text-xl', 'font-bold')}>
              <Translate id="showcase.usersList.allUsers">All Projects</Translate>
            </h2>
            <ul className={clsx('clean-list', styles.showcaseList)}>
              {otherUsers.map((user) => (
                <ShowcaseCard key={user.title} user={user} />
              ))}
            </ul>
          </div>
        </>
      ) : (
        <div className="container">
          <div
            className={clsx('margin-bottom--md', styles.showcaseFavoriteHeader)}
          />
          <ul className={clsx('clean-list', styles.showcaseList)}>
            {filteredUsers.map((user) => (
              <ShowcaseCard key={user.title} user={user} />
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default function Showcase(): JSX.Element {
  const ref = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.location.href = "https://prepverse.vercel.app/showcase";
  }, []);
  return (
    <>
      <Head>
        <link rel="canonical" href="https://prepverse.vercel.app" />
      </Head>
      <CommonLayout>
        <CommonHeader /><div
          className={clsx(
            "w-full",
            "mx-auto",
            "landing-lg:max-w-[1300px]",
          )}
        >
          <ShowcaseHeader />
          <ShowcaseFilters />
          <div
            style={{ display: 'flex', marginLeft: 'auto' }}
            className="container"
          >
            <SearchBar />
          </div>
          <ShowcaseCards />
          {/* <ShowcaseCardsInfo /> */}
        </div>
        <BlogFooter />
        <BackToTopButton />
      </CommonLayout>
    </>
  );
}
