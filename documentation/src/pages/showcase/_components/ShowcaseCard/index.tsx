import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import Image from '@theme/IdealImage';
import FavoriteIcon from '@site/src/prepverse-theme/icons/FavoriteIcon';
import {
  Tags,
  TagList,
  type TagType,
  type User,
  type Tag,
} from '@site/src/pages/showcase/_components/users';
import {sortBy} from '@site/src/utils/jsUtils';
import Heading from '@theme/Heading';
import Tooltip from '../ShowcaseTooltip';
import styles from './styles.module.css';
import { GithubIconOutlined } from "@site/src/prepverse-theme/icons/github";
import { ExternalIcon } from "@site/src/prepverse-theme/icons/external";

const TagComp = React.forwardRef<HTMLLIElement, Tag>(
  ({label, color, description}, ref) => (
    <li ref={ref} className={styles.tag} title={description}>
      <span className={styles.textLabel}>{label.toLowerCase()}</span>
      <span className={styles.colorLabel} style={{backgroundColor: color}} />
    </li>
  ),
);

function ShowcaseCardTag({tags}: {tags: TagType[]}) {
  const tagObjects = tags.map((tag) => ({tag, ...Tags[tag]}));

  // Keep same order for all tags
  const tagObjectsSorted = sortBy(tagObjects, (tagObject) =>
    TagList.indexOf(tagObject.tag),
  );

  return (
    <>
      {tagObjectsSorted.map((tagObject, index) => {
        const id = `showcase_card_tag_${tagObject.tag}`;

        return (
          <Tooltip
            key={index}
            text={tagObject.description}
            anchorEl="#__docusaurus"
            id={id}>
            <TagComp key={index} {...tagObject} />
          </Tooltip>
        );
      })}
    </>
  );
}

function getCardImage(user: User): string {
  return (
    user.preview ??
    `https://slorber-api-screenshot.netlify.app/${encodeURIComponent(
      user.website,
    )}/showcase`
  );
}

function ShowcaseCard({user}: {user: User}) {
  const image = getCardImage(user);
  return (
    <li key={user.title} className="card shadow--md">
      <div className={clsx('card__image', styles.showcaseCardImage)}>
        {/* <Image img={image} alt={user.title} /> */}
        <img src={image} alt={user.title} />
      </div>
      <div className="card__body">
        <div className={clsx(styles.showcaseCardHeader)}>
          <h4 className={clsx('text-cyan-800 dark:text-cyan-500', 'font-bold', styles.showcaseCardTitle)}>
            {/* <Link href={user.website} className={styles.showcaseCardLink}> */}
              {user.title}
            {/* </Link> */}
          </h4>
          {user.tags.includes('favorite') && (
            <FavoriteIcon svgClass={styles.svgIconFavorite} size="small" />
          )}
          {/* {user.source && (
            <Link
              href={user.source}
              className={clsx(
                'button button--secondary button--sm',
                styles.showcaseCardSrcBtn,
              )}>
              <Translate id="showcase.card.sourceLink">source</Translate>
            </Link>
          )} */}
        </div>
        <p className={styles.showcaseCardBody}>{user.description}</p>
      </div>
      <ul className={clsx('card__footer', styles.cardFooter)}>
        <ShowcaseCardTag tags={user.tags} />
      </ul>
      
      <div
        className={clsx(
          "flex justify-between items-center",
          "px-4 2xl:px-4 pt-4 2xl:pt-6 pb-2 2xl:pb-2 mt-auto",
          "text-sm 2xl:text-base",
        )}
      >
        {user.source && (
          <Link 
            href={user.source} 
            className={clsx(
              "no-underline", 
              "select-none",
              "group/project-link-button",
              "relative",
              "w-max",
              "flex",
              "items-center",
              "gap-1 landing-md:gap-1",
              "pl-2 py-2 pr-3",
              "landing-md:pl-2 landing-md:py-2 landing-md:pr-3",
              "rounded-full",
              "dark:bg-refine-cyan-alt/10 bg-refine-blue/10",
              "dark:text-refine-cyan-alt text-refine-blue",
              "hover:no-underline",
              "overflow-hidden",
              styles.showcaseCardLink
            )}
          >
            {/* <GithubIconOutlined
                className={clsx("w-5 h-5 2xl:w-6 2xl:h-6")}
            />
            <Translate id="showcase.card.sourceLink">source</Translate> */}
            <GithubIconOutlined width={16} height={16} />
            <span
                className={clsx(
                    "font-semibold",
                    "text-xs landing-md:text-base",
                )}
            >
                Source code
            </span>
          </Link>
        )}
        {user.website && (
          <Link 
            href={user.website} 
            className={clsx(
              "no-underline", 
              "select-none",
              "group/project-link-button",
              "relative",
              "w-max",
              "flex",
              "items-center",
              "gap-1 landing-md:gap-1",
              "pl-2 py-2 pr-3",
              // "landing-md:pl-2 landing-md:py-2 landing-md:pr-3",
              "rounded-full",
              "dark:bg-refine-cyan-alt/10 bg-refine-blue/10",
              "dark:text-refine-cyan-alt text-refine-blue",
              "hover:no-underline",
              "overflow-hidden",
              styles.showcaseCardLink
            )}
          >
            {/* <ExternalIcon
              className={clsx("w-4 h-4 2xl:w-5 2xl:h-5")}
            />
            <Translate id="showcase.card.sourceLink">Demo</Translate> */}
            <ExternalIcon width={16} height={16} />
            <span
                className={clsx(
                    "font-semibold",
                    "text-xs landing-md:text-base",
                )}
            >
                Live demo
            </span>
          </Link>
        )}
      </div>
    </li>
  );
}

export default React.memo(ShowcaseCard);
