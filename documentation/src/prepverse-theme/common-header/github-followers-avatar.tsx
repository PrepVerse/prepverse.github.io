import clsx from "clsx";
import React, { useState, useEffect } from "react";
import { useCommunityStatsContext } from "@site/src/context/CommunityStats";
import { CommonThemedImage } from "../common-themed-image";

type GithubFollowersAvatarProps = {
    isPermanentDark?: boolean;
};

export const GithubFollowersAvatar: React.FC<GithubFollowersAvatarProps> = ({ isPermanentDark }) => {
    const { githubAvatarUrl, githubAvatarName, githubAvatarPageUrl,  loading } = useCommunityStatsContext();
    const [borderColors, setBorderColors] = useState<string[]>([]);

    useEffect(() => {
        const colors = githubAvatarUrl.map(() => getRandomColor());
        setBorderColors(colors);
    }, [githubAvatarUrl]);

    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r},${g},${b})`;
    }

    return (
        <div
            className={clsx(
                "tabular-nums text-gray-800 dark:text-gray-100",
                "flex flex-wrap mt-10",
                "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
                "gap-4 2xl:gap-8",
            )}
        >
            {githubAvatarUrl.map((url, index) => (
            <div
                key={index}
                className={clsx(
                    "rounded-2xl landing-sm:rounded-3xl",
                    // "border dark:border-gray-700 border-gray-200",
                    "flex flex-col items-center",
                )}
            >
                <CommonThemedImage
                    className={clsx(
                        "h-[75px] w-[75px]",
                        "rounded-2xl landing-sm:rounded-3xl",
                        "border-double border-4",
                        "p-1",
                    )}
                    srcDark={url}
                    srcLight={url}
                    alt={githubAvatarName[index]}
                    style={{ borderColor: borderColors[index] }}
                />
                {index+1}
                <a
                    target="_blank"
                    href={githubAvatarPageUrl[index]}
                    className={clsx(
                        "text-sm",
                        "no-underline",
                        "rounded-lg m-2 p-1",
                        "border-2 dark:border-gray-500 border-gray-300",
                        "transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300",
                        "text-gray-500 dark:text-gray-400",
                        "dark:text-gray-300 text-gray-900",
                        "font-semibold",
                        "flex flex-row",
                        "text-center",
                    )}
                    rel="noreferrer"
                >
                    {githubAvatarName[index]}
                </a>
            </div>
            ))}
        </div>
    );
};
