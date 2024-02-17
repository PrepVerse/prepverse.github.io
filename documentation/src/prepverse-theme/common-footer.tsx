import clsx from "clsx";
import React from "react";
import { socialLinks } from "./footer-data";
import { HeartOutlinedIcon } from "./icons/heart-outlined";

export const CommonFooter = () => {
    return (
        <footer
            className={clsx(
                "py-4",
                "px-4",
                "dark:bg-gray-800 bg-gray-0",
                "border-t dark:border-t-gray-700 border-t-gray-300",
            )}
        >
            <div
                className={clsx(
                    "mx-auto",
                    "flex w-full items-center justify-between",
                    "flex-col-reverse sm:flex-row gap-8",
                )}
            >
                <div
                    className={clsx(
                        "text-sm",
                        "leading-6",
                        "dark:text-gray-400 text-gray-500",
                        // "mt-4 sm:mt-0",
                    )}
                >
                    Copyright © {new Date().getFullYear()} PrepVerse{" "}
                    <HeartOutlinedIcon className="text-refine-red ml-2 inline leading-6" /> <br></br>
                    Built with Docusaurus & Refine.
                </div>

                <div
                    className={clsx(
                        "flex flex-col sm:flex-row justify-center items-center",
                    )}
                >
                    <div
                        className={clsx(
                            "dark:text-gray-100 text-gray-800",
                            "text-sm leading-6",
                            "sm:mr-4",
                        )}
                    >
                        Connect with me on
                    </div>
                    <div
                        className={clsx(
                            "flex gap-4",
                            "dark:text-gray-400 text-gray-500",
                            "mt-4 sm:mt-0",
                        )}
                    >
                        {socialLinks.map(({ href, icon: Icon }, i) => {
                            return (
                                <a
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "flex items-center no-underline",
                                    )}
                                >
                                    <Icon
                                        className={clsx(
                                            "w-9 h-9 sm:w-8 sm:h-8",
                                        )}
                                    />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
};
