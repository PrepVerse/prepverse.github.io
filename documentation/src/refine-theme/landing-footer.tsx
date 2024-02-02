import clsx from "clsx";
import React from "react";
import { openFigma } from "../utils/open-figma";
import { footerDescription, menuItems, socialLinks } from "./footer-data";
import { HeartOutlinedIcon } from "./icons/heart-outlined";
import { PrepVerseLogoIcon } from "./icons/prepverse-logo";

export const LandingFooter = () => {
    const info = (
        <div
            className={clsx(
                "py-6 landing-lg:py-0",
                "flex",
                "flex-col",
                "gap-4",
                "landing-lg:max-w-[224px]",
            )}
        >
            <div
                className={clsx(
                    "font-semibold",
                    "text-sm",
                    "leading-6",
                    "text-gray-900 dark:text-gray-0",
                )}
            >
                PrepVerse Development Inc.
            </div>
            <div
                className={clsx(
                    "font-normal",
                    "text-sm",
                    "leading-5",
                    "text-gray-600 dark:text-gray-400",
                )}
            >
                
            </div>
            <a
                href="mailto:info@refine.dev"
                className={clsx(
                    "font-normal",
                    "text-sm",
                    "leading-5",
                    "text-gray-600 dark:text-gray-400",
                    "hover:text-gray-800 dark:hover:text-gray-300",
                    "hover:no-underline",
                )}
            >
                codewithsky@gmail.com
            </a>
        </div>
    );

    const social = (
        <div
            className={clsx(
                "py-6 landing-lg:py-0",
                "flex",
                "flex-col",
                "landing-sm:items-end",
            )}
        >
            <div className={clsx("flex", "flex-col", "gap-4")}>
                <div
                    className={clsx(
                        "text-sm",
                        "leading-6",
                        "font-semibold",
                        "text-gray-900 dark:text-gray-0",
                        "landing-lg:text-right",
                    )}
                >
                    Join us on
                </div>
                <div
                    className={clsx(
                        "flex",
                        "items-center",
                        "gap-8",
                        "landing-lg:gap-4",
                        "justify-start",
                    )}
                >
                    {socialLinks.map(({ href, icon: Icon }) => (
                        <a
                            href={href}
                            key={href}
                            target="_blank"
                            rel="noreferrer"
                            className={clsx(
                                "text-gray-600 dark:text-gray-400",
                                "hover:text-gray-800 dark:hover:text-gray-300",
                                "hover:no-underline",
                            )}
                        >
                            <Icon
                                className={clsx(
                                    "w-8 h-8",
                                    "landing-lg:w-6 landing-lg:h-6",
                                )}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <>
            <div
                className={clsx(
                    "border-t",
                    "border-t-refine-landing-footer-border",
                    "bg-refine-landing-footer-bg",
                    "w-full",
                    "py-6",
                    "landing-sm:py-8",
                    "landing-md:py-11",
                    "px-4",
                    "landing-sm:px-8",
                    "landing-md:px-8",
                    "landing-lg:px-12",
                    "landing-xl:px-20",
                )}
            >
                <div
                    className={clsx(
                        "max-w-screen-landing-footer",
                        "w-full",
                        "flex flex-col",
                        "gap-6",
                        "mx-auto",
                    )}
                >
                    <div className={clsx("flex items-center justify-between")}>
                        <PrepVerseLogoIcon
                            className="text-gray-0"
                            onContextMenu={openFigma}
                        />
                    </div>
                    <div
                        className={clsx(
                            "flex",
                            "flex-col",
                            "landing-xl:flex-row",
                            "items-start",
                            "justify-between",
                            "landing-lg:gap-8",
                        )}
                    >
                        <div
                            className={clsx(
                                "text-xs",
                                "opacity-75",
                                "landing-lg:opacity-100",
                                "landing-lg:text-base",
                                "text-gray-0",
                                "landing-md:max-w-[304px] w-full",
                                "w-full",
                                "flex-shrink-0",
                                "mb-6",
                                "landing-xl:mb-0",
                            )}
                        >
                            {footerDescription}
                        </div>
                        <div
                            className={clsx(
                                "w-full",
                                "landing-lg:w-auto",
                                "landing-md:grid-cols-3 landing-lg:grid-cols-5 grid grid-cols-2",
                                "landing-md:gap-4 gap-10",
                            )}
                        >
                            {menuItems.map((menu) => (
                                <div
                                    className={clsx(
                                        "flex min-w-[144px] max-w-[304px] flex-col gap-4",
                                    )}
                                    key={menu.label}
                                >
                                    <div className="text-gray-0 text-base font-semibold">
                                        {menu.label}
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        {menu.items.map((item) => (
                                            <a
                                                href={item.href}
                                                key={item.label}
                                                className={clsx(
                                                    "text-base",
                                                    "text-gray-0",
                                                    "opacity-75",
                                                    "hover:opacity-100",
                                                    "hover:no-underline",
                                                    "hover:text-gray-0",
                                                )}
                                            >
                                                {item.label}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            <div
                                className={clsx(
                                    "landing-md:col-span-3 landing-lg:col-span-2 w-full landing-content:max-w-[304px]",
                                )}
                            >
                                <div className={clsx("flex flex-col gap-4")}>
                                    <div className="text-gray-0 text-base font-semibold">
                                        Contact
                                    </div>
                                    <div
                                        className={clsx(
                                            "text-base",
                                            "text-gray-0",
                                        )}
                                    >
                                        <a
                                            href="https://mail.google.com/mail/u/1/?fs=1&to=codewithsky@gmail.com&tf=cm"
                                            target="_blank"
                                            className={clsx(
                                                "text-gray-0",
                                                "opacity-75",
                                                "hover:opacity-100",
                                                "hover:no-underline",
                                                "hover:text-gray-0",
                                            )}
                                        >
                                            codewithsky@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={clsx(
                    "border-t",
                    "border-t-refine-landing-footer-border",
                    "bg-refine-landing-footer-bg",
                    "w-full",
                    "px-4",
                    "landing-sm:px-8",
                    "landing-md:px-8",
                    "landing-lg:px-12",
                    "landing-xl:px-20",
                    "py-6",
                )}
            >
                <div
                    className={clsx(
                        "mx-auto",
                        "max-w-screen-landing-footer",
                        "w-full",
                        "landing-lg:gap-2 gap-6",
                        "flex items-center justify-between",
                        "landing-lg:flex-row flex-col-reverse",
                    )}
                >
                    <div className={clsx("text-base", "text-gray-0")}>
                        Copyright © 2023 PrepVerse{" "}
                        <HeartOutlinedIcon className="text-refine-red ml-2 inline leading-6" /> <br></br>
                        Built with Docusaurus & refine.
                    </div>
                    <div
                        className={clsx(
                            "flex items-center",
                            "gap-4",
                            "landing-lg:flex-row flex-col",
                            "landing-lg:max-w-none max-w-[382px]",
                        )}
                    >
                        <span
                            className={clsx(
                                "text-gray-0",
                                "landing-lg:text-left text-center opacity-75",
                            )}
                        >
                            Join us on
                        </span>
                        <div
                            className={clsx(
                                "flex",
                                "flex-row",
                                "items-center",
                                "gap-4",
                                "justify-between",
                            )}
                        >
                            {socialLinks.map(({ href, icon: Icon }) => (
                                <a
                                    href={href}
                                    key={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "text-gray-0",
                                        "opacity-75",
                                        "no-underline",
                                        "hover:text-gray-0 hover:no-underline",
                                    )}
                                >
                                    <Icon className="landing-lg:w-6 landing-lg:h-6 h-9 w-9" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
