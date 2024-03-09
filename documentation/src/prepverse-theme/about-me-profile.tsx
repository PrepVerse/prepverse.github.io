import React, { DetailedHTMLProps, ReactNode, SVGProps, useRef } from "react";
import clsx from "clsx";
import { useInView } from "framer-motion";
import { CommonThemedImage } from "./common-themed-image";
import { GithubIcon } from "@site/src/prepverse-theme/icons/github";
import { TwitterIcon, LinkedInIcon, InstagramIcon } from "@site/src/prepverse-theme/icons/popover";
import { LandingSectionCtaButton } from "./landing-section-cta-button";
import { GitHubFollowers } from "./common-header/github-followers";
import { GithubFollowersAvatar } from "./common-header/github-followers-avatar";

const GithubFollowers = ({ className }: { className?: string }) => {
    return (
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
    );
};

const LeetCodeBadges = ({ className }: { className?: string }) => {
    return (
        <GitHubFollowers />
    );
};

const apps = [
    {
        name: "GitHub Followers",
        showcase: GithubFollowers,
    },
];

export const AboutMeProfile = ({ className }: { className?: string }) => {
    const [activeApp, setActiveApp] = React.useState(apps[0]);

    const ShowcaseComponent = React.useMemo(() => {
        return activeApp.showcase;
    }, [activeApp.name]);

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
                )}
            >

                <div className={clsx(
                    "flex flex-col gap-4",
                )}>
                    <div
                        className={clsx(
                            "landing-lg:min-w-[400px]",
                            "flex flex-ṛow gap-5",
                            "dark:bg-enterprise-data-source-dark dark:bg-gray-900 bg-gray-0",
                            "bg-blend-overlay",
                            "bg-no-repeat",
                            "rounded-2xl landing-sm:rounded-3xl",
                            "dark:bg-gray-900",
                            "rounded-xl p-4",
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
                                    "rounded-2xl landing-sm:rounded-3xl",
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
                </div> */}


                <div
                    className={clsx(
                        "landing-lg:min-w-[735px]",
                        "flex flex-wrap",
                        "mt-6 lg:mt-10",
                        "border dark:border-gray-700 border-gray-200",
                        "bg-gray-50 dark:bg-gray-800",
                        "w-full",
                        "rounded-2xl landing-sm:rounded-[32px]",
                        "gap-2 landing-sm:gap-4",
                        "p-2 landing-sm:p-4",
                        "relative",
                        "group/showcase",
                        "landing-lg:overflow-hidden",
                    )}
                >
                    <div className={clsx("flex", "w-full", "gap-2")}>
                        <div
                            className={clsx(
                                "rounded-3xl",
                                "overflow-y-auto",
                                "flex",
                                "w-full",
                                "gap-2",
                                "scrollbar-hidden",
                                "snap snap-x snap-mandatory",
                                "snap-mandatory",
                            )}
                        >
                            <div
                                className={clsx(
                                    "rounded-3xl",
                                    "flex",
                                    "w-auto",
                                    "landing-lg:w-full",
                                    "items-center",
                                    "justify-start",
                                    "gap-2",
                                    "relative",
                                    "bg-gray-0 dark:bg-gray-900",
                                )}
                            >
                                <div
                                    className={clsx(
                                        "hidden landing-sm:block",
                                        "flex-1",
                                        "rounded-3xl",
                                        "h-full",
                                        "bg-gray-200 dark:bg-gray-700",
                                        "absolute",
                                        "left-0",
                                        "top-0",
                                        "transition-transform",
                                        "duration-150",
                                        "ease-out",
                                    )}
                                    style={{
                                        width: `calc((100% - (${apps.length-1} * 8px)) / ${apps.length})`,
                                        minWidth: "244px",
                                        transform: `translateX(calc((100% + 8px) * ${apps.findIndex(
                                            (f) => f.name === activeApp.name,
                                        )})) translateZ(0px)`,
                                    }}
                                />
                                {apps.map((app, index) => (
                                    <button
                                        key={app.name}
                                        type="button"
                                        onClick={(event) => {
                                            setActiveApp(app);
                                            // if index i >= 2
                                            // then scroll to the right
                                            event.currentTarget.parentElement?.parentElement?.scrollTo({
                                                left: index >= 2 ? index * (244 + 8) : 0,
                                                behavior: "smooth",
                                            });
                                        }}
                                        className={clsx(
                                            "z-[1]",
                                            "snap-start",
                                            "appearance-none",
                                            "focus:outline-none",
                                            "border-none",
                                            "flex-1",
                                            "break-keep",
                                            "whitespace-nowrap",
                                            "landing-sm:min-w-[244px]",
                                            "py-2",
                                            "landing-sm:py-3.5",
                                            "px-4",
                                            "rounded-3xl",
                                            "transition-colors",
                                            "ease-in-out",
                                            "duration-150",
                                            activeApp.name !== app.name && "bg-transparent",
                                            activeApp.name === app.name && "bg-gray-200 dark:bg-gray-700",
                                            activeApp.name !== app.name &&
                                            "text-gray-600 dark:text-gray-400",
                                            activeApp.name === app.name &&
                                            "text-gray-900 dark:text-gray-0",
                                            "landing-sm:bg-transparent",
                                            "dark:landing-sm:bg-transparent",
                                            "transition-colors",
                                            "duration-150",
                                            "ease-out",
                                            "text-xs",
                                            "landing-sm:text-sm",
                                        )}
                                    >
                                        {app.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div
                        className={clsx(
                            "rounded-lg",
                            "landing-md:rounded-xl",
                            "landing-lg:rounded-2xl",
                            "overflow-hidden",
                            "shadow-sm shadow-gray-200 dark:shadow-none",
                            "relative",
                            "group/showcase-inner",
                        )}
                    >
                        <ShowcaseComponent
                            className={clsx(
                                "animate-showcase-reveal",
                                "absolute",
                                "left-0",
                                "top-0",
                                "w-full",
                                "rounded-lg",
                                "landing-md:rounded-xl",
                                "landing-lg:rounded-2xl",
                                "overflow-hidden",
                            )}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};