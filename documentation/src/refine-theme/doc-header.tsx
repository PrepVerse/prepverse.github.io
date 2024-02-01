import React, { useState } from "react";
import clsx from "clsx";
import SearchBar from "@theme/SearchBar";
import { CommonGithubStarButton } from "./common-github-star-button";
import { CommonHamburgerIcon } from "./common-hamburger-icon";
import { CommonHomeButton } from "./common-home-button";
import { CommonThemeToggle } from "./common-theme-toggle";
import { DocSearchButton } from "./doc-search-button";
import { DocSidebarModal } from "./doc-sidebar-modal";
import { DocVersionDropdown } from "./doc-version-dropdown";
import { DocRefineLogo } from "./doc-refine-logo";
import { RefineLogo } from "./common-refine-logo";
import { TopAnnouncement } from "./top-announcement";


export const HEADER_HEIGHT = 65;

const Divider = () => {
    return (
        <div
            className={clsx(
                "flex-shrink-0",
                "h-6",
                "w-px",
                "mx-4",
                "bg-gray-200 dark:bg-gray-600",
            )}
        />
    );
};

const Desktop = () => {
    return (
        <div
            className={clsx("w-full", "hidden lg:flex items-center", "mx-auto")}
        >
            <DocRefineLogo className={clsx("lg:min-w-[256px]")} />
            <div
                className={clsx(
                    "flex-1",
                    "flex",
                    "justify-end",
                    "items-center",
                    "gap-4",
                )}
            >
                <div
                    className={clsx(
                        "hidden lg:flex items-center justify-start",
                    )}
                >
                    <SearchBar />
                </div>

                <div className={clsx("lg:hidden flex")}>
                    <SearchBar
                        CustomButton={React.forwardRef<
                            HTMLButtonElement,
                            React.PropsWithChildren<{}>
                        >(function CustomButton(props, ref) {
                            return (
                                <DocSearchButton
                                    ref={ref}
                                    {...props}
                                    iconOnly
                                />
                            );
                        })}
                    />
                </div>
                <DocVersionDropdown />
                <CommonGithubStarButton />
                <CommonThemeToggle
                    className={clsx("scale-75", "sm:scale-100")}
                />
            </div>
        </div>
    );
};

export const Mobile = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div
            className={clsx(
                "w-full",
                "flex lg:hidden items-center justify-between",
            )}
        >
            <DocRefineLogo />
            <div className={clsx("flex items-center gap-4")}>
                <SearchBar
                    CustomButton={React.forwardRef<
                        HTMLButtonElement,
                        React.PropsWithChildren<{}>
                    >(function CustomButton(props, ref) {
                        return (
                            <DocSearchButton ref={ref} {...props} iconOnly />
                        );
                    })}
                />
                <CommonHamburgerIcon
                    onClick={() => setIsSidebarOpen(true)}
                    active={isSidebarOpen}
                />
            </div>
            <DocSidebarModal
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />
        </div>
    );
};

export const DocHeader = () => {
    return (
        <>
            <TopAnnouncement />
            <div
                className={clsx(
                    "flex items-center",
                    "h-16",
                    "z-10",
                    "sticky",
                    "top-0",
                    "py-4 sm:py-3 px-4 sm:px-6",
                    "bg-gray-0 dark:bg-gray-900",
                    "border-b border-gray-300 dark:border-gray-800",
                )}
            >
                <Desktop />
                <Mobile />
            </div>
        </>
    );
};
