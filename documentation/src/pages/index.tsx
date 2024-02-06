import Head from "@docusaurus/Head";
import clsx from "clsx";
import React from "react";

import { CommonLayout } from "../prepverse-theme/common-layout";
import { CommonHeader } from "../prepverse-theme/common-header";
import { LandingFooter } from "../prepverse-theme/landing-footer";
import { LandingHero } from "../prepverse-theme/landing-hero";
import { GithubIcon } from "@site/src/prepverse-theme/icons/github";
import { TwitterIcon, LinkedInIcon, InstagramIcon } from "@site/src/prepverse-theme/icons/popover";
import { useColorMode } from "@docusaurus/theme-common";

function Home() {
    const title = "PrepVerse";
    return (
        <>
            <Head>
                <html data-active-page="index" />
                <title>{title}</title>
                <meta property="og:title" content={title} />
                <link
                    rel="preload"
                    href="https://prepverse.github.io"
                    as="document"
                />
            </Head>
            <CommonLayout description="">
                {/* <div className={clsx("bg-refine-bg")}> */}
                <div className={clsx()}>
                    <CommonHeader />
                    <div
                        className={clsx(
                            "top-section",
                            // "bg-landing-stars",
                            "mb-12 -mt-[100px] md:-mt-[110px] lg:-mt-[90px] xl:-mt-[110px]",
                            "pt-[100px] lg:pt-[90px] xl:-pt-[110px]",
                            "landing-mask-image-hero-wide",
                        )}
                    >
                        <LandingHero />
                    </div>
                    <About />
                    <div className="h-[96px] landing-lg:h-[160px]" />
                    <LandingFooter />
                </div>
            </CommonLayout>
        </>
    );
}

const About: React.FC = () => {
    const { colorMode } = useColorMode();
    return (
            <div>
                <div
                    className={clsx(
                        "max-w-[344px] sm:max-w-[620px] lg:max-w-[944px] mx-auto",
                        "text-start lg:text-center",
                        "text-[32px] leading-[40px] font-bold",
                        // "text-gray-0 dark:text-gray-300",
                        "text-gray-700 dark:text-gray-300",
                    )}
                >
                    My Social Network Profiles
                </div>
                <div className={clsx(
                    "no-prose",
                    "flex flex-wrap gap-4 justify-center items-center",
                    "mt-6 lg:mt-10",
                )}>
                    <a
                        target="_blank"
                        href="https://github.com/AkashSingh3031"
                        className={clsx(
                            "flex h-max flex-row justify-start gap-3",
                            "dark:bg-gray-900",
                            "border border-gray-200 dark:border-gray-700",
                            "rounded-xl p-4",
                            "no-underline hover:no-underline",
                        )}
                        rel="noreferrer"
                    >
                        <div>
                            <GithubIcon
                                className="text-2xl text-gray-900 dark:text-gray-0"
                                // className="text-2xl text-gray-0 dark:text-gray-0"
                                width="24px"
                                height="24px"
                            />
                        </div>
                        <div className="text-xs md:text-base">
                            <div className="mb-0 text-gray-500 dark:text-gray-400">
                                Visit our
                            </div>
                            <div className="font-semibold text-gray-900 dark:text-gray-0 no-underline hover:no-underline">
                            {/* <div className="font-semibold text-gray-0 dark:text-gray-0 no-underline hover:no-underline"> */}
                                GitHub Profile
                            </div>
                        </div>
                    </a>
                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/akashsingh3031/"
                        rel="noreferrer"
                        className={clsx(
                            "flex  h-max flex-row justify-start gap-3",
                            "dark:bg-gray-900",
                            "border border-gray-200 dark:border-gray-700",
                            "p-4 rounded-xl",
                            "no-underline hover:no-underline",
                        )}
                    >
                        <div>
                            <LinkedInIcon
                                className="text-2xl"
                                width="24px"
                                height="24px"
                            />
                        </div>
                        <div className="text-xs md:text-base">
                            <div className="mb-0 text-gray-500 dark:text-gray-400">
                                Follow me on
                            </div>
                            <div className="font-semibold text-gray-900 dark:text-gray-0 no-underline hover:no-underline">
                            {/* <div className="font-semibold text-gray-0 dark:text-gray-0 no-underline hover:no-underline"> */}
                                LinkedIn
                            </div>
                        </div>
                    </a>
                    <a
                        target="_blank"
                        href="https://www.instagram.com/akash.singh3031"
                        rel="noreferrer"
                        className={clsx(
                            "flex  h-max flex-row justify-start gap-3",
                            "dark:bg-gray-900",
                            "border border-gray-200 dark:border-gray-700",
                            "p-4 rounded-xl",
                            "no-underline hover:no-underline",
                        )}
                    >
                        <div>
                            <InstagramIcon
                                className="text-2xl"
                                width="24px"
                                height="24px"
                            />
                        </div>
                        <div className="text-xs md:text-base">
                            <div className="mb-0 text-gray-500 dark:text-gray-400">
                                Follow me on
                            </div>
                            <div className="font-semibold text-gray-900 dark:text-gray-0 no-underline hover:no-underline">
                            {/* <div className="font-semibold text-gray-0 dark:text-gray-0 no-underline hover:no-underline"> */}
                                Instagram
                            </div>
                        </div>
                    </a>
                    <a
                        target="_blank"
                        href="https://twitter.com/akashsingh3031"
                        rel="noreferrer"
                        className={clsx(
                            "flex  h-max flex-row justify-start gap-3",
                            "dark:bg-gray-900",
                            "border border-gray-200 dark:border-gray-700",
                            "p-4 rounded-xl",
                            "no-underline hover:no-underline",
                        )}
                    >
                        <div>
                            <TwitterIcon
                                className="text-2xl"
                                width="24px"
                                height="24px"
                            />
                        </div>
                        <div className="text-xs md:text-base">
                            <div className="mb-0 text-gray-500 dark:text-gray-400">
                                Follow me on
                            </div>
                            <div className="font-semibold text-gray-900 dark:text-gray-0 no-underline hover:no-underline">
                            {/* <div className="font-semibold text-gray-0 dark:text-gray-0 no-underline hover:no-underline"> */}
                                Twitter
                            </div>
                        </div>
                    </a>
                </div>
            </div>
    );
};

export default Home;
