import Link from "@docusaurus/Link";
import clsx from "clsx";
import React from "react";

import { useCommunityStatsContext } from "@site/src/context/CommunityStats";
import { HeaderGithubIcon } from "../icons/header-github";
import { Spinner } from "../spinner";
import { CommonThemedImage } from "../common-themed-image";

type GithubFollowersAvatarProps = {
    isPermanentDark?: boolean;
};

export const GithubFollowersAvatar: React.FC<GithubFollowersAvatarProps> = ({ isPermanentDark }) => {
    const { githubAvatarUrl, githubAvatarName, githubAvatarPageUrl,  loading } = useCommunityStatsContext();

    return (
        <div
            className={clsx(
                "tabular-nums text-gray-800 dark:text-gray-100",
                "flex flex-wrap mt-10 gap-4",
            )}
        >
            {githubAvatarUrl.map((url, index) => (
            <div
                className={clsx(
                    "rounded-2xl landing-sm:rounded-3xl",
                    "border dark:border-gray-700 border-gray-200",
                    "flex flex-col justify-center items-center",
                )}
            >
                <CommonThemedImage
                    className={clsx(
                        "h-[75px] w-[75px]",
                        "rounded-full",
                        "rounded-2xl landing-sm:rounded-2xl",
                        "border dark:border-gray-700 border-gray-200",
                    )}
                    srcDark={url}
                    srcLight={url}
                    alt={githubAvatarName[index]}
                />
                <a
                    target="_blank"
                    href={githubAvatarPageUrl[index]}
                    className={clsx(
                        "text-sm",
                        "text-gray-500 dark:text-gray-400",
                        "dark:text-gray-300 text-gray-900",
                        "font-semibold",
                        "flex flex-row",
                        "text-center"
                    )}
                    rel="noreferrer"
                >
                    {index+1}<br></br>
                    {githubAvatarName[index]}
                </a>
            </div>
            ))}
        </div>
    );
};
