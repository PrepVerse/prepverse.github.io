import React from "react";
import clsx from "clsx";

type Props = { version: string };

export const DocVersionBadge = ({ version }: Props) => {
    return (
        <div
            className={clsx(
                "text-xm",
                "py-[7px] px-4",
                "rounded-[32px]",
                "font-jetBrains-mono",
                "border border-solid",
                "border-green-600 dark:border-orange-700",
                "text-orange-500 dark:text-green-700",
                "bg-orange-800/20 dark:bg-green-800/20",
            )}
        >
            {version}
        </div>
    );
};