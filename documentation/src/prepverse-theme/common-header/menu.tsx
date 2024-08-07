import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";

import { MENU_ITEMS, NavbarItemType } from "./constants";
import {
    GithubStarIcon,
    GithubIcon,
    LinkedInIcon,
    InstagramIcon,
    TwitterIcon,
} from "../icons/popover";
import { MenuItem } from "./menu-item";
import { NavbarItem } from "./navbar-item";
import { NavbarPopoverItem } from "./navbar-popover-item";


type Props = {
    variant?: "landing" | "blog";
};

export const Menu: React.FC<Props> = ({ variant = "landing" }) => {
    return (
        <>
            {MENU_ITEMS.map((item) => {
                if (item.isPopover) {
                    return (
                        <NavbarPopoverItem
                            key={`navbar-${item.label}`}
                            item={item}
                            variant={variant}
                        >
                            {item.label === "CodePoint" && (
                                <>
                                    <div
                                        className={clsx(
                                            "grid grid-cols-2 gap-4",
                                            "p-4",
                                            "w-[672px]",
                                            "bg-white",
                                            variant === "landing" && " dark:bg-gray-900",
                                            variant === "blog" && "dark:bg-refine-react-dark-code",
                                        )}
                                    >
                                        {item.items.map((subItem) => (
                                            <MenuItem
                                                key={subItem.label}
                                                item={subItem}
                                                variant={variant}
                                            />
                                        ))}
                                    </div>
                                    <Link
                                        to="https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation"
                                        className="no-underline"
                                    >
                                        <div
                                            className={clsx(
                                                "border-t",
                                                variant === "blog" && "border-refine-react-3 dark:border-refine-react-6",
                                                variant === "landing" && "border-gray-300 dark:border-gray-700",
                                                variant === "landing" && "bg-gray-100 dark:bg-gray-800",
                                                variant === "blog" && "bg-refine-react-1 dark:bg-refine-react-7",
                                                "flex items-center",
                                                "py-4 px-7",
                                            )}
                                        >
                                            <GithubStarIcon />
                                            <div
                                                className={clsx(
                                                    "ml-4",
                                                    "dark:text-gray-400 text-gray-600",
                                                )}
                                            >
                                                If you like PrepVerse, don’t forget
                                                to star ⭐ us on GitHub!
                                            </div>
                                        </div>
                                    </Link>
                                </>
                            )}

                            {item.label === "About" && (
                                <>
                                    <div
                                        className={clsx(
                                            "grid gap-4",
                                            "p-4",
                                            "w-[336px]",
                                            "bg-white",
                                            variant === "landing" && " dark:bg-gray-900",
                                            variant === "blog" && "dark:bg-refine-react-dark-code",
                                        )}
                                    >
                                        {item.items.map((subItem) => (
                                            <MenuItem
                                                key={subItem.label}
                                                item={subItem}
                                                variant={variant}
                                            />
                                        ))}
                                    </div>
                                    <div
                                        className={clsx(
                                            "border-t",
                                            variant === "blog" && "border-refine-react-3 dark:border-refine-react-6",
                                            variant === "landing" && "border-gray-300 dark:border-gray-700",
                                            variant === "landing" && "bg-gray-100 dark:bg-gray-800",
                                            variant === "blog" && "bg-refine-react-1 dark:bg-refine-react-7",
                                            "flex justify-between items-center",
                                            "py-4 px-7",
                                        )}
                                    >
                                        <div
                                            className={clsx(
                                                variant === "landing" && "text-gray-600 dark:text-gray-400 ",
                                                variant === "blog" && "text-refine-react-5 dark:text-refine-react-4",
                                            )}
                                        >
                                            Join the party!
                                        </div>
                                        <div className="flex gap-4">
                                            <Link
                                                to="https://github.com/AkashSingh3031"
                                                className={clsx(
                                                    "no-underline",
                                                    "hover:text-inherit",
                                                )}
                                            >
                                                <GithubIcon className="dark:text-gray-400 text-gray-500" />
                                            </Link>
                                            <Link to="https://linkedin.com/in/akashsingh3031">
                                                <LinkedInIcon />
                                            </Link>
                                            <Link to="https://instagram.com/akash.singh3031">
                                                <InstagramIcon/>
                                            </Link>
                                            <Link to="https://x.com/akashsingh3031">
                                                <TwitterIcon />
                                            </Link>
                                        </div>
                                    </div>
                                </>
                            )}

                            {item.label === "Docs" && (
                                <div
                                    className={clsx(
                                        "grid gap-4",
                                        "p-4",
                                        "w-[336px]",
                                        "bg-white",
                                        variant === "landing" && " dark:bg-gray-900",
                                        variant === "blog" && "dark:bg-refine-react-dark-code",
                                    )}
                                >
                                    {item.items.map((subItem) => (
                                        <MenuItem
                                            key={subItem.label}
                                            item={subItem}
                                            variant={variant}
                                        />
                                    ))}
                                </div>
                            )}
                        </NavbarPopoverItem>
                    );
                }

                return (
                    <NavbarItem
                        key={`navbar-${item.label}`}
                        item={item as NavbarItemType}
                        variant={variant}
                    />
                );
            })}
        </>
    );
};
