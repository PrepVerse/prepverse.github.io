import Link from "@docusaurus/Link";
import SearchBar from "@site/src/theme/SearchBar";
import clsx from "clsx";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useState } from "react";

import { HamburgerIcon } from "./icons/hamburger";
import { HeaderDiscordIcon } from "./icons/header-discord";
import { HeaderLinkedInIcon } from "./icons/header-linkedin";
import { RefineLogoIcon } from "./icons/refine-logo";
import { PrepVerseLogoIcon } from "./icons/prepverse-logo";

import { openFigma } from "../utils/open-figma";
import { CommonDocSearchButton } from "./common-doc-search-button";
import { GitHubStar } from "./common-header/github-star";
import { LandingGithubStarButton } from "./landing-github-star-button";
import { Menu } from "./common-header/menu";
import { MobileMenuModal } from "./common-header/mobile-menu-modal";
import { CommonThemeToggle } from "./common-theme-toggle";
import { TopAnnouncement } from "./top-announcement";

type Props = {
    hasSticky?: boolean;
    trackProgress?: boolean;
};

export const CommonHeader = ({ hasSticky, trackProgress }: Props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { scrollYProgress } = useScroll();

    const progressPercentage = useTransform(
        scrollYProgress,
        [0.03, 0.95],
        ["0%", "100%"],
    );

    return (
        <>
            <TopAnnouncement />
            <header className={clsx("sticky", "top-0", "z-10")}>
                <div
                    className={clsx(
                        "absolute",
                        "top-0 left-0 right-0",
                        "backdrop-blur-[6px]",
                        "landing-md:backdrop-blur-[12px]",
                        "z-[-1]",
                        "bg-gray-0 dark:bg-gray-900",
                        "bg-opacity-80 dark:bg-opacity-80",
                        "pointer-events-none",
                    )}
                    style={{
                        top: "-20px",
                        bottom: "-80px",
                        WebkitMaskImage:
                            "linear-gradient(to bottom, transparent 0, transparent calc(0% + 20px), black calc(0% + 20px), black calc(100% - 80px), transparent calc(100% - 80px))",
                        maskImage:
                            "linear-gradient(to bottom, transparent 0, transparent calc(0% + 20px), black calc(0% + 20px), black calc(100% - 80px), transparent calc(100% - 80px))",
                    }}
                />
                <div
                    className={clsx(
                        "relative",
                        "z-[1]",
                        "p-4",
                        "landing-sm:px-8",
                        "landing-md:py-5",
                    )}
                >
                    <div
                        className={clsx(
                            "mx-auto",
                            "flex",
                            "items-center",
                            "justify-between",
                            "max-w-[896px]",
                            "landing-lg:max-w-[1200px]",
                        )}
                    >
                        <div
                            className={clsx(
                                "w-[130px]",
                                "landing-lg:w-[200px]",
                            )}
                        >
                            <Link to="/" onContextMenu={openFigma}>
                                <PrepVerseLogoIcon className="text-gray-900 dark:text-gray-0" />
                                {/* <RefineLogoIcon className="text-gray-900 dark:text-gray-0" /> */}
                            </Link>
                        </div>
                        <button
                            type="button"
                            className={clsx(
                                "text-gray-900 dark:text-gray-0",
                                "block landing-md:hidden",
                            )}
                            onClick={() => setIsModalOpen(true)}
                        >
                            <HamburgerIcon />
                        </button>
                        <div
                            className={clsx(
                                "hidden landing-md:flex",
                                "flex-1",
                                "items-center",
                                "gap-8",
                            )}
                        >
                            <Menu />
                        </div>
                        <div
                            className={clsx(
                                "hidden landing-md:flex",
                                "items-center",
                                "justify-end",
                                "gap-4",
                                "w-[130px]",
                                "landing-lg:w-[200px]",
                            )}
                        >
                            <LandingGithubStarButton />
                            <CommonThemeToggle />
                        </div>
                        <MobileMenuModal
                            isModalOpen={isModalOpen}
                            setIsModalOpen={setIsModalOpen}
                        />
                    </div>
                </div>
                {trackProgress && (
                    <div className={clsx("w-full", "h-0.5", "translate")}>
                        <motion.div
                            className={clsx("h-full", "bg-refine-blue")}
                            style={{ width: progressPercentage }}
                        />
                    </div>
                )}
            </header>
            {/* <div
                className={clsx(
                    "header-sm:h-4 blog-lg:h-6 h-2",
                    "w-full",
                    "bg-common-header-bg-light",
                    "dark:bg-common-header-bg-dark",
                    "backdrop-blur-header-blur",
                )}
            />
            <div
                className={clsx(
                    "bg-common-header-bg-light",
                    "dark:bg-common-header-bg-dark",
                    "backdrop-blur-header-blur",
                    "blog-lg:px-8 px-4",
                    "py-3",
                    hasSticky && "sticky top-0 z-10",
                )}
            >
                <div className={clsx("max-w-[1264px]", "mx-auto")}>
                    <div className="flex items-center">
                        <div className={clsx("flex items-center", "w-[220px]")}>
                            <Link to="/">
                                <RefineLogoIcon
                                    className="dark:text-gray-0 text-gray-900"
                                    onContextMenu={openFigma}
                                />
                            </Link>
                        </div>
                        <div className="blog-lg:justify-between flex grow items-center justify-end">
                            <div className="blog-lg:flex hidden gap-8">
                                <Menu />
                            </div>
                            <div className="blog-lg:flex hidden items-center justify-end gap-8">
                                <SearchBar
                                    CustomButton={CommonDocSearchButton}
                                />
                                <div className="flex items-center gap-3">
                                    <LandingGithubStarButton />
                                    <CommonThemeToggle />
                                </div>
                            </div>
                            <button
                                type="button"
                                className="blog-lg:hidden block"
                                onClick={() => setIsModalOpen(true)}
                            >
                                <HamburgerIcon className="text-gray-500 dark:text-gray-400" />
                            </button>
                        </div>
                    </div>
                </div>
                <MobileMenuModal
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                />
            </div>
            <div
                className={clsx(
                    "header-sm:h-4 blog-lg:h-6 h-2",
                    "w-full",
                    "bg-common-header-bg-light",
                    "dark:bg-common-header-bg-dark",
                    "backdrop-blur-header-blur",
                )}
            />
            <div
                className={clsx(
                    "w-full",
                    hasSticky && [
                        "z-[2]",
                        "sticky",
                        "blog-lg:top-[64px] top-[56px]",
                    ],
                )}
            >
                <div
                    className={clsx(
                        "w-full",
                        "h-px",
                        "bg-gray-100 dark:bg-gray-700",
                    )}
                />
                {trackProgress && (
                    <div className={clsx("w-full", "h-0.5")}>
                        <motion.div
                            className={clsx("h-full", "bg-refine-blue")}
                            style={{ width: progressPercentage }}
                        />
                    </div>
                )}
            </div> */}
        </>
    );
};
