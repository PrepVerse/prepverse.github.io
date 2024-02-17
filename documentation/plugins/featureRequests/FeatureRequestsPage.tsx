import React, {useEffect} from 'react';
import clsx from 'clsx';
import { CommonLayout } from "./../../src/prepverse-theme/common-layout.tsx";
import { CommonHeader } from "./../../src/prepverse-theme/common-header";
import { BlogFooter } from "./../../src/prepverse-theme/blog-footer";
import BackToTopButton from '@theme/BackToTopButton'
import {useColorMode} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';

import cannyScript from './cannyScript';
import styles from './styles.module.css';

const BOARD_TOKEN = 'da0dc408-d50a-655a-59e0-e88add7bebd9';

function useCannyTheme() {
  const {colorMode} = useColorMode();
  return colorMode === 'dark' ? 'dark' : 'light';
}

function CannyWidget({basePath}: {basePath: string}) {
  useEffect(() => {
    cannyScript();
  }, []);

  const theme = useCannyTheme();
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const {Canny} = window as any;
    Canny('render', {
      boardToken: BOARD_TOKEN,
      basePath,
      theme,
    });
  }, [basePath, theme]);
  return (
    <main
      key={theme}
      data-canny
    />
  );
}

export default function FeatureRequests({
  basePath,
}: {
  basePath: string;
}): JSX.Element {
  return (
    <CommonLayout title="Community" description="PrepVerse Community">
        <CommonHeader hasSticky={true}/>
        <div
            className={clsx(
                "bg-gray-50 dark:bg-gray-800",
                "w-full",
                "rounded-xl landing-sm:rounded-[32px]",
                "p-2 landing-sm:p-4",
                "mx-auto",
                // "max-w-[896px]",
                "landing-lg:max-w-[1200px]",
            )}
        >
          <CannyWidget basePath={basePath} />
        </div>
        <BlogFooter />
        <BackToTopButton />
    </CommonLayout>
  );
}
