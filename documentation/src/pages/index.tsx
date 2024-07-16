import Head from "@docusaurus/Head";
import clsx from "clsx";
import React from "react";

import { CommonLayout } from "../prepverse-theme/common-layout";
import { CommonHeader } from "../prepverse-theme/common-header";
import { LandingExplorePrepVerse } from "../prepverse-theme/landing-explore-prepverse";
import { LandingFooter } from "../prepverse-theme/landing-footer";
import { LandingHero } from "../prepverse-theme/landing-hero";
import { GithubIcon } from "@site/src/prepverse-theme/icons/github";
import { TwitterIcon, LinkedInIcon, InstagramIcon } from "@site/src/prepverse-theme/icons/popover";
import { useColorMode } from "@docusaurus/theme-common";

function Home() {
    const title = "PrepVerse | Comprehensive Computer Science Resources";
    const metaDescription = "Explore PrepVerse for a wide range of computer science resources. Access study guides, tutorials, and practice tests to enhance your knowledge and skills.";
    return (
        <>
            <Head>
                <html data-active-page="index" />
                <title>{title}</title>
                <meta name="description" content={metaDescription} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={metaDescription} />
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
                    <LandingExplorePrepVerse />
                    <div className="h-[48px] landing-lg:h-[80px]" />
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
                <h2
                    className={clsx(
                        "max-w-[344px] sm:max-w-[620px] lg:max-w-[944px] mx-auto",
                        "text-start lg:text-center",
                        "text-[32px] leading-[40px] font-bold",
                        // "text-gray-0 dark:text-gray-300",
                        "dark:text-refine-cyan-alt dark:drop-shadow-[0_0_30px_rgba(71,235,235,0.25)]",
                        "text-refine-blue drop-shadow-[0_0_30px_rgba(0,128,255,0.3)]",
                    )}
                >
                    My Social Network Profiles
                </h2>
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
                            "dark:bg-gray-900 bg-gray-100",
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
                            <h3 className="mb-0 text-gray-500 dark:text-gray-400">
                                Visit our
                            </h3>
                            <h3 className="font-semibold text-gray-900 dark:text-gray-0 no-underline hover:no-underline">
                            {/* <h3 className="font-semibold text-gray-0 dark:text-gray-0 no-underline hover:no-underline"> */}
                                GitHub Profile
                            </h3>
                        </div>
                    </a>
                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/akashsingh3031/"
                        rel="noreferrer"
                        className={clsx(
                            "flex  h-max flex-row justify-start gap-3",
                            "dark:bg-gray-900 bg-gray-100",
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
                            <h3 className="mb-0 text-gray-500 dark:text-gray-400">
                                Follow me on
                            </h3>
                            <h3 className="font-semibold text-gray-900 dark:text-gray-0 no-underline hover:no-underline">
                            {/* <h3 className="font-semibold text-gray-0 dark:text-gray-0 no-underline hover:no-underline"> */}
                                LinkedIn
                            </h3>
                        </div>
                    </a>
                    <a
                        target="_blank"
                        href="https://www.instagram.com/akash.singh3031"
                        rel="noreferrer"
                        className={clsx(
                            "flex  h-max flex-row justify-start gap-3",
                            "dark:bg-gray-900 bg-gray-100",
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
                            <h3 className="mb-0 text-gray-500 dark:text-gray-400">
                                Follow me on
                            </h3>
                            <h3 className="font-semibold text-gray-900 dark:text-gray-0 no-underline hover:no-underline">
                            {/* <h3 className="font-semibold text-gray-0 dark:text-gray-0 no-underline hover:no-underline"> */}
                                Instagram
                            </h3>
                        </div>
                    </a>
                    <a
                        target="_blank"
                        href="https://twitter.com/akashsingh3031"
                        rel="noreferrer"
                        className={clsx(
                            "flex  h-max flex-row justify-start gap-3",
                            "dark:bg-gray-900 bg-gray-100",
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
                            <h3 className="mb-0 text-gray-500 dark:text-gray-400">
                                Follow me on
                            </h3>
                            <h3 className="font-semibold text-gray-900 dark:text-gray-0 no-underline hover:no-underline">
                            {/* <h3 className="font-semibold text-gray-0 dark:text-gray-0 no-underline hover:no-underline"> */}
                                Twitter
                            </h3>
                        </div>
                    </a>
                </div>
            </div>
    );
};

export default Home;
