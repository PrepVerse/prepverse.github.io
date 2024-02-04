import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";

import { MENU_ITEMS, NavbarItemType } from "./constants";
import {
    GithubStarIcon,
    GithubIcon,
    LinkedInIcon,
    DiscordIcon,
    TwitterIcon,
} from "../icons/popover";
import { MenuItem } from "./menu-item";
import { NavbarItem } from "./navbar-item";
import { NavbarPopoverItem } from "./navbar-popover-item";

type MenuProps = {
    isPermanentDark?: boolean;
};

export const Menu: React.FC<MenuProps> = ({ isPermanentDark }) => {
    return (
        <>
            {MENU_ITEMS.map((item) => {
                if (item.isPopover) {
                    return (
                        <NavbarPopoverItem
                            key={`navbar-${item.label}`}
                            // isPermanentDark={isPermanentDark}
                            item={item}
                        >
                            {item.label === "Code-Point" && (
                                <>
                                    <div
                                        className={clsx(
                                            "grid grid-cols-2 gap-4",
                                            "p-4",
                                            "w-[672px]",
                                            "dark:bg-gray-900 bg-white",
                                        )}
                                    >
                                        {item.items.map((subItem) => (
                                            <MenuItem
                                                key={subItem.label}
                                                // isPermanentLight
                                                item={subItem}
                                            />
                                        ))}
                                    </div>
                                    <Link
                                        to="https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation"
                                        className="no-underline"
                                    >
                                        <div
                                            className={clsx(
                                                "border-t dark:border-gray-700 border-gray-300",
                                                "dark:bg-gray-800 bg-gray-100",
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
                                            "dark:bg-gray-900 bg-white",
                                        )}
                                    >
                                        {item.items.map((subItem) => (
                                            <MenuItem
                                                key={subItem.label}
                                                // isPermanentLight
                                                item={subItem}
                                            />
                                        ))}
                                    </div>
                                    <div
                                        className={clsx(
                                            "border-t dark:border-gray-700 border-gray-300",
                                            "dark:bg-gray-800 bg-gray-100",
                                            "flex justify-between items-center",
                                            "py-4 px-7",
                                        )}
                                    >
                                        <div className="dark:text-gray-400 text-gray-600">
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
                                            <Link to="https://twitter.com/akashsingh3031">
                                                <TwitterIcon />
                                            </Link>
                                        </div>
                                    </div>
                                </>
                            )}
                        </NavbarPopoverItem>
                    );
                }

                return (
                    <NavbarItem
                        key={`navbar-${item.label}`}
                        item={item as NavbarItemType}
                        isPermanentDark={isPermanentDark}
                    />
                );
            })}
        </>
    );
};
