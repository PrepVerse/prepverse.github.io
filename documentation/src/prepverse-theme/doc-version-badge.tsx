import React from "react";
import clsx from "clsx";

type Props = { version: string };

export const DocVersionBadge = ({ version }: Props) => {
    return (
        <div
            className={clsx(
                "z-[1]",
                "relative",
            )}
        >
            <div
                className={clsx(
                    "absolute",
                    "-left-0.5",
                    "-top-0.5",
                    "blur",
                    "overflow-hidden",
                    "rounded-full",
                    "w-[calc(100%+0.25rem)] h-[calc(100%+0.25rem)]",
                    "z-[-1]",
                )}
            >
                <div
                    className={clsx(
                        "absolute",
                        "w-[150%] aspect-square h-auto",
                        "left-[-20%]",
                        "top-[-100px]",
                        "bg-landing-rainbow",
                        "animate-spin-slow",
                        "animation-slower-speed",
                        "animation-running",
                        "group-hover:animation-paused",
                    )}
                />
            </div>
            <div
                className={clsx(
                    "text-xm",
                    "py-[7px] px-4",
                    "rounded-[32px]",
                    "font-jetBrains-mono",
                    "border border-solid",
                    "border-orange-500 dark:border-green-800",
                    "text-gray-0 dark:text-gray-0",
                    "bg-orange-500 dark:bg-green-800",
                )}
            >
                {version}
            </div>
        </div>
    );
};