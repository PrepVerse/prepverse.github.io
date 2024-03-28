import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { AccountPin } from "./icons/account-pin";

type Props = {
    children?: React.ReactNode;
    href?: string;
    onClick?: () => void;
    buttonClassname?: string;
} & (AnchorHTMLAttributes<{}> | ButtonHTMLAttributes<{}>);

export const LandingRainbowButton = ({
    children,
    href,
    className,
    onClick,
    buttonClassname,
    ...rest
}: Props) => {
    const Comp = href ? Link : "button";
    return (
        <Comp
            {...(rest as any)}
            {...(href ? { href, to: href } : {})}
            {...(onClick ? { onClick } : {})}
            className={clsx(
                "z-[1]",
                "appearance-none",
                "focus:outline-none",
                "block",
                "relative",
                "text-refine-bg",
                "hover:no-underline",
                "hover:text-refine-bg",
                "z-[1]",
                "group",
                className,
            )}
        >
            <div
                className={clsx(
                    "absolute",
                    "-left-1",
                    "-top-1",
                    // "blur",
                    "overflow-hidden",
                    "rounded-full",
                    "w-[calc(100%+0.5rem)] h-[calc(100%+0.5rem)]",
                    "z-[-1]",
                )}
            >
                <div
                    className={clsx(
                        "absolute",
                        "w-[125%] aspect-square h-auto",
                        "left-[-12.5%]",
                        "top-[-100px]",
                        "bg-landing-rainbow",
                        "animate-spin-slow",
                        "animation-slower-speed",
                        "animation-running",
                        "group-hover:animation-paused",
                        // "animation-paused",
                        // "group-hover:animation-running",
                    )}
                />
            </div>
            <div
                className={clsx(
                    "dark:bg-green-400 bg-orange-600",
                    "rounded-full",
                    "px-10 py-3",
                    buttonClassname,
                )}
            >
                <div
                    className={clsx(
                        "gap-2",
                        "flex items-center justify-center",
                        "group-hover:scale-105",
                        "duration-100 ease-in-out transition-transform",
                    )}
                >
                    {children ? (
                        children
                    ) : (
                        <>
                            <AccountPin className="dark:text-gray-800 text-white font-semibold" />
                            <span className="dark:text-gray-800 text-white font-semibold">
                                About Me
                            </span>
                        </>
                    )}
                </div>
            </div>
        </Comp>
    );
};
