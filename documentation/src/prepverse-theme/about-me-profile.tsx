import React, { DetailedHTMLProps, ReactNode, SVGProps, useRef } from "react";
import clsx from "clsx";
import { useInView } from "framer-motion";
import { CommonThemedImage } from "./common-themed-image";
import { GithubIcon } from "@site/src/prepverse-theme/icons/github";
import { TwitterIcon, LinkedInIcon, InstagramIcon } from "@site/src/prepverse-theme/icons/popover";
import { LandingSectionCtaButton  } from "./landing-section-cta-button";
import {GitHubFollowers} from "./common-header/github-followers";
import {GithubFollowersAvatar} from "./common-header/github-followers-avatar";

export const AboutMeProfile = ({ className }: { className?: string }) => {
    return (
        <div 
            className={clsx(
                "flex flex-col justify-center landing-md:flex-row gap-2 landing-lg:max-w-[1200px] w-full mx-auto"
            )}
        >
            <div
                className={clsx(
                    "landing-lg:w-[435px]",
                    "landing-lg:h-[500px] landing-md:h-[545px]",
                    "flex flex-wrap",
                    "p-5",
                    "mt-6 lg:mt-10",
                    "dark:bg-enterprise-data-source-dark dark:bg-gray-900 bg-gray-0",
                    "bg-blend-overlay",
                    "bg-no-repeat",
                    "rounded-2xl landing-sm:rounded-3xl",
                    "border dark:border-gray-700 border-gray-200",
                    "not-prose",
                )}
            >

                <div className={clsx(
                    "no-prose",
                    "flex flex-col gap-4",
                    // "mt-6 lg:mt-10",
                )}>
                    <div
                        className={clsx(
                            "landing-lg:min-w-[400px]",
                            "flex flex-ṛow gap-5",
                            // "p-4 landing-sm:p-10",
                            "dark:bg-enterprise-data-source-dark dark:bg-gray-900 bg-gray-0",
                            "bg-blend-overlay",
                            "bg-no-repeat",
                            "rounded-2xl landing-sm:rounded-3xl",
                            // "not-prose",

                            // "flex h-max flex-row justify-start gap-3",
                            "dark:bg-gray-900",
                            // "border border-gray-200 dark:border-gray-700",
                            "rounded-xl p-4",
                            // "no-underline hover:no-underline",
                        )}
                    >
                        <a
                            target="_blank"
                            href="https://github.com/AkashSingh3031"
                            rel="noreferrer"
                        >
                            <CommonThemedImage
                                className={clsx(
                                    "h-[100px] w-[100px]",
                                    "rounded-full",
                                )}
                                srcDark="https://github.com/AkashSingh3031.png"
                                srcLight="https://github.com/AkashSingh3031.png"
                                alt="Akash Singh"
                            />
                        </a>
                        <div className="text-xs md:text-base">
                            <h2
                                className={clsx(
                                    "text-base landing-sm:text-2xl",
                                    "dark:text-gray-300 text-gray-900",
                                    "font-semibold",
                                )}
                            >
                                Akash Singh
                            </h2>
                            <p
                                className={clsx(
                                    "text-base",
                                    "dark:text-gray-400 text-gray-600",
                                )}
                            >
                                akashsingh3031
                            </p>
                        </div>
                    </div>
                    <div
                        className={clsx(
                            "flex flex-col",
                            // "p-4 landing-sm:p-10",
                            // "mt-6 lg:mt-10",
                        )}
                    >
                        <p
                            className={clsx(
                                "text-base",
                                "dark:text-gray-400 text-gray-600",
                            )}
                        >
                            Software Developer Engineer🔸||🔸TA at Coding Ninjas🔸||🔸6133 Rating 📈 Points on Coding Ninjas Studio
                        </p>
                        <LandingSectionCtaButton to="https://github.com/AkashSingh3031"
                            className={clsx(
                                // "flex flex-col",
                                // "p-4 landing-sm:p-10",
                                // "mt-6 lg:mt-10",
                                "mt-4",
                                "mb-4",
                            )}
                        >
                            Follow Me
                        </LandingSectionCtaButton>
                        <a
                            target="_blank"
                            href="https://github.com/AkashSingh3031"
                            className={clsx(
                                "flex h-max flex-row justify-start gap-3",
                                "dark:bg-gray-900",
                                "p-2",
                                "no-underline hover:no-underline",
                            )}
                            rel="noreferrer"
                        >
                            <div>
                                <GithubIcon
                                    className="text-2xl text-gray-900 dark:text-gray-0"
                                    width="20px"
                                    height="20px"
                                />
                            </div>
                            <div className="text-xs md:text-base">
                                <div className="mb-0 text-gray-500 dark:text-gray-400">
                                    AkashSingh3031
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
                                "p-2",
                                "no-underline hover:no-underline",
                            )}
                        >
                            <div>
                                <LinkedInIcon
                                    className="text-2xl"
                                    width="20px"
                                    height="20px"
                                />
                            </div>
                            <div className="text-xs md:text-base">
                                <div className="mb-0 text-gray-500 dark:text-gray-400">
                                    akashsingh3031
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
                                "p-2",
                                "no-underline hover:no-underline",
                            )}
                        >
                            <div>
                                <InstagramIcon
                                    className="text-2xl"
                                    width="20px"
                                    height="20px"
                                />
                            </div>
                            <div className="text-xs md:text-base">
                                <div className="mb-0 text-gray-500 dark:text-gray-400">
                                    akash.singh3031
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
                                "p-2",
                                "no-underline hover:no-underline",
                            )}
                        >
                            <div>
                                <TwitterIcon
                                    className="text-2xl"
                                    width="20px"
                                    height="20px"
                                />
                            </div>
                            <div className="text-xs md:text-base">
                                <div className="mb-0 text-gray-500 dark:text-gray-400">
                                    akashsingh3031
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            
            <div 
                className={clsx(
                    "flex flex-col landing-md:flex-col gap-1 landing-lg:max-w-[800px] w-full mx-auto"
                )}
            >
                {/* <div
                    className={clsx(
                        "landing-lg:min-w-[735px]",
                        "flex flex-wrap",
                        "p-4 landing-sm:p-8",
                        "mt-6 lg:mt-10",
                        "dark:bg-enterprise-data-source-dark dark:bg-gray-900 bg-gray-0",
                        "bg-blend-overlay",
                        "bg-no-repeat",
                        "rounded-2xl landing-sm:rounded-3xl",
                        "border dark:border-gray-700 border-gray-200",
                    )}
                >
                    <div className="text-xs md:text-base">
                        <h2
                            className={clsx(
                                "text-base landing-sm:text-2xl",
                                "dark:text-gray-300 text-gray-900",
                                "rounded-full",
                                "border dark:border-gray-700 border-gray-200",
                                "font-semibold",
                                "flex items-center",
                                "p-2"
                            )}
                        >
                            LeetCode Badges
                        </h2>
                        <div
                            className={clsx(
                                "my-4",
                                "border-b border-gray-200 dark:border-gray-700",
                            )}
                        />
                    </div>
                </div> */}
                <div
                    className={clsx(
                        "landing-lg:min-w-[735px]",
                        "flex flex-wrap",
                        "p-4 landing-sm:p-8",
                        "mt-6 lg:mt-10",
                        "dark:bg-enterprise-data-source-dark dark:bg-gray-900 bg-gray-0",
                        "bg-blend-overlay",
                        "bg-no-repeat",
                        "rounded-2xl landing-sm:rounded-3xl",
                        "border dark:border-gray-700 border-gray-200",
                    )}
                >
                    <div className="text-xs md:text-base">
                        <h2
                            className={clsx(
                                "text-base landing-sm:text-2xl",
                                "dark:text-gray-300 text-gray-900",
                                "font-semibold",
                                "flex items-center",
                            )}
                        >
                            <GitHubFollowers />
                        </h2>
                        <div
                            className={clsx(
                                "my-4",
                                "border-b border-gray-200 dark:border-gray-700",
                            )}
                        />
                        <GithubFollowersAvatar />
                    </div>
                </div>
            </div>
        </div>
    );
};