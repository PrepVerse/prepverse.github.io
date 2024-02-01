import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";
import { CommonHomeButton } from "./common-home-button";
import { CommonGithubStarButton } from "./common-github-star-button";
import { RefineLogo } from "./common-refine-logo";
import { CommonHamburgerIcon } from "./common-hamburger-icon";
import { useSidebarItems } from "./doc-sidebar";
import { DocVersionTabs } from "./doc-version-tabs";
import { DocRefineLogo } from "./doc-refine-logo";
import { DocVersionDropdown } from "./doc-version-dropdown";
import { CommonThemeToggleAlt } from "./common-theme-toggle";

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

export const DocSidebarModal = ({ isOpen, onClose }: Props) => {
    const { items } = useSidebarItems({
        variant: "mobile",
        onLinkClick: onClose,
        deferred: true,
    });

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-modal" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-75"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-75"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-50 dark:bg-gray-900" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-start justify-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-75"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-75"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Panel
                                className={clsx(
                                    "w-full h-screen",
                                    "flex flex-col",
                                    "py-2 sm:py-3",
                                    "px-2 sm:px-6",
                                )}
                            >
                                <div
                                    className={clsx(
                                        "w-full h-8 sm:h-10",
                                        "px-2 sm:px-0",
                                        "flex items-center justify-between",
                                    )}
                                >
                                    <DocRefineLogo />
                                    <div
                                        className={clsx(
                                            "flex items-center gap-4",
                                        )}
                                    >
                                        <CommonHamburgerIcon
                                            onClick={onClose}
                                            active={true}
                                        />
                                    </div>
                                </div>

                                <div
                                    className={clsx(
                                        "relative",
                                        "bg-gray-0 dark:bg-gray-800",
                                        "w-full max-w-[480px] h-full",
                                        "mx-auto mt-4 mb-4 sm:mt-4 sm:mb-8",
                                        "overflow-scroll",
                                        "rounded-lg",
                                        "border border-gray-200 dark:border-gray-600",
                                    )}
                                >
                                    <div
                                        className={clsx(
                                            "h-12",
                                            "rounded-tl-lg rounded-tr-lg",
                                            "bg-gray-100 dark:bg-gray-900",
                                            "border-b border-gray-300 dark:border-gray-600",
                                            "flex items-center gap-2",
                                            "px-4 py-2",
                                            "justify-end",
                                        )}
                                    >
                                        {/* <span
                                            className={clsx(
                                                "text-sm",
                                                "text-gray-500 dark:text-gray-400",
                                            )}
                                        >
                                            Version
                                        </span> */}
                                        <DocVersionDropdown />
                                    </div>

                                    <div className={clsx("px-4", "relative")}>
                                        {items}
                                    </div>
                                </div>

                                <div
                                    className={clsx(
                                        "flex",
                                        "flex-col",
                                        "gap-0",
                                    )}
                                >
                                    <div
                                        className={clsx(
                                            "flex items-center justify-start",
                                            "gap-10",
                                            "px-2",
                                            "py-4",
                                        )}
                                    >
                                        <span
                                            className={clsx(
                                                "text-sm",
                                                "text-gray-800",
                                                "dark:text-gray-100",
                                            )}
                                        >
                                            Appearance
                                        </span>
                                        <CommonThemeToggleAlt />
                                    </div>
                                    <div
                                        className={clsx(
                                            "border-t",
                                            "border-t-gray-300 dark:border-t-gray-700",
                                            "px-4",
                                            "py-2",
                                            "flex",
                                            "items-center",
                                            "justify-between",
                                        )}
                                    >
                                        <CommonHomeButton />
                                        <CommonGithubStarButton />
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};
