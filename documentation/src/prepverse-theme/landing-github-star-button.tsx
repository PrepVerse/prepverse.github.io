import clsx from "clsx";
import React from "react";
import { useCommunityStatsContext } from "../context/CommunityStats";
import { GithubIcon } from "./icons/github";
import { Spinner } from "./spinner";

export const LandingGithubStarButton = () => {
    const { loading, githubStarCountText } = useCommunityStatsContext();

    return (
        <a
            href="https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation"
            target="_blank"
            rel="noreferrer"
            className={clsx(
                "flex gap-2 items-center",
                "font-normal",
                "text-sm leading-6",
                "text-gray-500 dark:text-gray-400",
                "hover:text-gray-400 dark:hover:text-gray-300",
                "hover:no-underline",
                "transition-colors",
                "duration-200",
                "ease-in-out",
            )}
        >
            <GithubIcon className={clsx("w-5 h-5")} />
            <div className={clsx("flex items-center", "w-10 h-6")}>
                {loading ? (
                    <Spinner
                        className={clsx("w-5 h-5")}
                        wrapperProps={{
                            className: clsx("mx-auto"),
                        }}
                    />
                ) : (
                    <span>{githubStarCountText}</span>
                )}
            </div>
        </a>
    );
};
