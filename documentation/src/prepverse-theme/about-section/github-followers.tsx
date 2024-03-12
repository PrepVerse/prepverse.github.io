import clsx from "clsx";
import React from "react";

import { useCommunityStatsContext } from "@site/src/context/CommunityStats";
import { HeaderGithubIcon } from "../icons/header-github";
import { Spinner } from "../spinner";

export const GitHubFollowers: React.FC = () => {
    const { githubFollowersCount, loading } = useCommunityStatsContext();

    return (
        <a
            href="https://github.com/AkashSingh3031"
            target="_blank"
            rel="noreferrer"
            className={clsx(
                "text-sm",
                "text-gray-500 dark:text-gray-400",
                "rounded-[32px]",
                "border border-solid border-gray-300 dark:border-gray-700",
                "flex gap-2 items-center",
                "py-2 pl-2.5 pr-4",
                "no-underline",
            )}
        >
            <HeaderGithubIcon className={clsx("w-5 h-5")} />
            <div className={clsx("flex items-center", "min-w-[75px] h-6")}>
                Followers:&nbsp;
                {loading ? (
                    <Spinner
                        className={clsx("w-5 h-5")}
                        wrapperProps={{
                            className: clsx("mx-auto"),
                        }}
                    />
                ) : (
                    <span
                        className={clsx(
                            "tabular-nums text-gray-800 dark:text-gray-100",
                        )}
                    >
                        {githubFollowersCount}
                    </span>
                )}
            </div>
        </a>
    );
};
