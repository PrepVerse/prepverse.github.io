import clsx from "clsx";
import React, { useState, useEffect } from "react";
import { useCommunityStatsContext } from "@site/src/context/CommunityStats";
import { CommonThemedImage } from "../common-themed-image";
import { Spinner } from "../spinner";
import { FireIcon } from "../icons/fire";

const LeecodeBadges = ({ className }: { className?: string }) => {
    const { leetcodeBadgeImg, leetcodeBadgeCount, loading } = useCommunityStatsContext();
    const [borderColors, setBorderColors] = useState<string[]>([]);
    const [backgroundColors, setBackgroundColors] = useState<string[]>([]);

    useEffect(() => {
        const colors = leetcodeBadgeImg.map(() => getRandomColor());
        setBorderColors(colors);
        const backgroundColorsWithOpacity = colors.map(color => `${color.slice(0, -1)},0.1)`);
        setBackgroundColors(backgroundColorsWithOpacity);
    }, [leetcodeBadgeImg]);

    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r},${g},${b})`;
    }

    const renderBadgesByCategory = (category: string, badges: any[]) => {
        return (
            <div key={category}>
                <div
                    className={clsx(
                        "text-xl",
                        "no-underline",
                        "rounded-lg m-2 p-1",
                        "border-b-4",
                        "dark:text-orange-400 text-green-600",
                        "dark:border-orange-400 border-green-600",
                        "font-semibold",
                        "flex flex-col",
                        "text-center",
                    )}
                >
                    {category}
                </div>
                <div
                    className={clsx(
                        "tabular-nums text-gray-800 dark:text-gray-100",
                        "flex flex-wrap mt-10",
                        "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
                        "gap-4 2xl:gap-8",
                    )}
                >
                    {badges.map((badge, index) => (
                        <div
                            key={index}
                            className={clsx(
                                "rounded-2xl landing-sm:rounded-3xl",
                                "flex flex-col items-center",
                            )}
                        >
                            <CommonThemedImage
                                className={clsx(
                                    "h-[75px] w-[75px]",
                                    "rounded-2xl landing-sm:rounded-3xl",
                                    // "border-double border-4",
                                    "p-1",
                                )}
                                srcDark={badge.icon}
                                srcLight={badge.icon}
                                alt={badge.displayName}
                                style={{ borderColor: borderColors[index], backgroundColor: backgroundColors[index] }}
                            />
                            {index + 1}
                            <div
                                className={clsx(
                                    "text-sm",
                                    "no-underline",
                                    "rounded-lg mt-2 p-1",
                                    // "border-2",
                                    "transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300",
                                    "dark:text-gray-100 text-gray-800",
                                    "font-semibold",
                                    "flex flex-row",
                                    "text-center",
                                )}
                                style={{ borderColor: borderColors[index], backgroundColor: backgroundColors[index] }}
                            >
                                {badge.displayName}
                            </div>
                            <div
                                className={clsx(
                                    "text-sm",
                                    "no-underline",
                                    "rounded-lg p-1",
                                    // "border-2",
                                    // "transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300",
                                    "dark:text-gray-400 text-gray-600",
                                    "font-semibold",
                                    "flex flex-row",
                                    "text-center",
                                )}
                                // style={{ borderColor: borderColors[index], backgroundColor: backgroundColors[index] }}
                            >
                                {badge.creationDate}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div>
            <a
                href="https://leetcode.com/akashsingh3031"
                target="_blank"
                rel="noreferrer"
                className={clsx(
                    "text-sm",
                    "text-gray-500 dark:text-gray-400",
                    "rounded-[32px]",
                    "border-2 border-solid border-gray-300 dark:border-gray-700",
                    "flex gap-2 items-center justify-center",
                    "py-2 pl-2.5 pr-4",
                    "w-40",
                    "font-semibold",
                    "no-underline",
                )}
            >
                <div className={clsx("flex flex-row items-center")}>
                    Total Badges:&nbsp;
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
                            {leetcodeBadgeCount}
                        </span>
                    )}
                </div>
            </a>
            {loading ? (
                <Spinner
                    className={clsx("w-20 h-20")}
                    wrapperProps={{
                        className: clsx("flex justify-center items-center mt-4"),
                    }}
                />
            ) : (
                <div>
                    {renderBadgesByCategory("Competition Medals", leetcodeBadgeImg.filter(badge => badge.displayName.includes("Annual Badge") || badge.displayName.includes("Days Badge")))}
                    {renderBadgesByCategory("Daily Medals", leetcodeBadgeImg.filter(badge => badge.displayName.includes("LeetCoding Challenge")))}
                    {renderBadgesByCategory("Study Plan Medals", leetcodeBadgeImg.filter(badge => !badge.displayName.includes("Annual Badge") && !badge.displayName.includes("LeetCoding Challenge") && !badge.displayName.includes("Days Badge")))}
                </div>
            )}
        </div>
    );
};

const LeecodeSolved = ({ className }: { className?: string }) => {
    const { lcStreakCount, totalLCProblem, totalLCEasy, totalLCMedium, totalLCHard, solvedProblem, easySolved, mediumSolved, hardSolved, loading } = useCommunityStatsContext();
    return (
        <div>
            <div
                className={clsx(
                    "flex flex-row",
                    "gap-2",
                )}
            >
                <a
                    href="https://leetcode.com/akashsingh3031"
                    target="_blank"
                    rel="noreferrer"
                    className={clsx(
                        "text-sm",
                        "text-gray-500 dark:text-gray-400",
                        "rounded-[32px]",
                        "border-2 border-solid border-gray-300 dark:border-gray-700",
                        "flex gap-2 items-center justify-center",
                        "py-2 pl-2.5 pr-4",
                        "w-60",
                        "font-semibold",
                        "no-underline",
                    )}
                >
                    <div className={clsx("flex flex-row items-center")}>
                        Total Solved Problem:&nbsp;
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
                                {solvedProblem}
                            </span>
                        )}
                    </div>
                </a>
                <div
                    className={clsx(
                        "text-sm",
                        "text-gray-500 dark:text-gray-400",
                        "rounded-[32px]",
                        "border-2 border-solid border-gray-300 dark:border-gray-700",
                        "flex gap-2 items-center justify-center",
                        "py-2 pl-2.5 pr-4",
                        "w-56",
                        "font-semibold",
                        "no-underline",
                    )}
                >
                    <FireIcon />
                    <div className={clsx("flex flex-row items-center")}>
                        Longest Streak:&nbsp;
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
                                    "tabular-nums text-orange-700 dark:text-orange-500",
                                )}
                            >
                                {lcStreakCount}
                            </span>
                        )}
                    </div>
                </div>
            </div>
            {loading ? (
                <Spinner
                    className={clsx("w-20 h-20")}
                    wrapperProps={{
                        className: clsx("flex justify-center items-center mt-4"),
                    }}
                />
            ) : (
                <div className="flex lg:flex-row sm:flex-col flex-col w-[calc(100%-8px)] mx-auto justify-between">
                    <div className="lg:w-[calc(100%)] sm:w-full sm:h-[240px] h-[450px]mt-[8px] rounded-lg relative">
                        <div className="flex sm:flex-row flex-col justify-between">
                            <div>
                                <div className="text-[22px] font-bold mt-[40px] dark:text-green-600 text-red-600 ml-[50px]">
                                    Solved Problems
                                </div>
                                <div className="text-[60px] font-bold mt-[32px] dark:text-yellow-400 text-orange-600 ml-[50px]">
                                    {solvedProblem}{" "}
                                    <span className="text-gray-500 text-[14px]">
                                        {"/ "}
                                        {totalLCProblem}
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col relative mr-[50px] mt-[40px] w-[200px] sm:w-[280px] ml-[50px] sm:ml-0">
                                <div className="text-[14px] relative">
                                    <div className="flex flex-row justify-between">
                                        <div className="mb-[8px] text-green-500">
                                            Easy
                                        </div>
                                        <div className="mb-[8px] text-green-500">
                                            {easySolved}
                                            {" / "}
                                            {totalLCEasy}
                                        </div>
                                    </div>
                                    <div
                                        className={`sm:w-[280px] w-[200px] h-[8px] bg-borders mb-[16px] relative after:absolute easy-line after:h-[8px] after:rounded rounded  after:bg-green-500`} style={{ backgroundColor: 'rgba(52, 211, 153, 0.2)' }}
                                    ></div>
                                </div>
                                <div className="text-[14px] relative">
                                    <div className="flex flex-row justify-between">
                                        <div className="mb-[8px] text-orange-500">
                                            Medium
                                        </div>
                                        <div className="mb-[8px] text-orange-500">
                                            {mediumSolved}
                                            {" / "}
                                            {totalLCMedium}
                                        </div>
                                    </div>
                                    <div
                                        className={`sm:w-[280px] w-[200px] h-[8px] bg-borders mb-[16px] relative after:absolute medium-line after:h-[8px] after:rounded rounded after:bg-orange-500`} style={{ backgroundColor: 'rgba(255, 159, 64, 0.2)' }}
                                    ></div>
                                </div>
                                <div className="text-[14px] relative">
                                    <div className="flex flex-row justify-between">
                                        <div className="mb-[8px] text-red-500">
                                            Hard
                                        </div>
                                        <div className="mb-[8px] text-red-500">
                                            {hardSolved}
                                            {" / "}
                                            {totalLCHard}
                                        </div>
                                    </div>
                                    <div
                                        className={`sm:w-[280px] w-[200px] h-[8px] bg-borders mb-[16px] relative after:absolute hard-line after:h-[8px] after:rounded rounded after:bg-red-500`} style={{ backgroundColor: 'rgba(239, 68, 68, 0.2)' }}
                                    ></div>
                                    <style>
                                        {`.easy-line::after { width: ${((easySolved) / (totalLCEasy)) * 100}%; }`}
                                        {`.medium-line::after { width: ${((mediumSolved) / (totalLCMedium)) * 100}%; }`}
                                        {`.hard-line::after { width: ${((hardSolved) / (totalLCHard)) * 100}%; }`}
                                    </style>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const journey = [
    {
        name: "Leecode Solved",
        showcase: LeecodeSolved,
    },
    {
        name: "Leecode Badges",
        showcase: LeecodeBadges,
    },
];

export const LeetCodeSection: React.FC = () => {
    const [activeApp, setActiveApp] = React.useState(journey[0]);
    const ShowcaseComponent = React.useMemo(() => {
        return activeApp.showcase;
    }, [activeApp.name]);
    return (
        <div
            className={clsx(
                "flex flex-wrap",
                "border dark:border-gray-700 border-gray-200",
                "bg-gray-50 dark:bg-gray-900",
                "w-full",
                "rounded-2xl landing-sm:rounded-[32px]",
                "gap-2 landing-sm:gap-4",
                "p-2 landing-sm:p-4",
                "relative",
                "group/showcase",
                "landing-lg:overflow-hidden",
            )}
        >
            <div className={clsx("flex", "w-auto", "gap-2")}>
                <div
                    className={clsx(
                        "rounded-xl",
                        "overflow-y-auto",
                        "flex",
                        "w-full",
                        "gap-2",
                        "scrollbar-hidden",
                        "snap snap-x snap-mandatory",
                        "snap-mandatory",
                    )}
                >
                    <div
                        className={clsx(
                            "rounded-xl",
                            "border-b-2 border-gray-500",
                            "flex",
                            "w-auto",
                            "landing-lg:w-auto",
                            "items-center",
                            "justify-start",
                            "gap-2",
                            "relative",
                            // "bg-gray-0 dark:bg-gray-900",
                        )}
                    >
                        <div
                            className={clsx(
                                "hidden landing-sm:block",
                                "flex-1",
                                "rounded-xl",
                                "h-full",
                                "bg-gray-200 dark:bg-gray-700",
                                "absolute",
                                "left-0",
                                "top-0",
                                "transition-transform",
                                "duration-150",
                                "ease-out",
                            )}
                            style={{
                                width: `calc((100% - (${journey.length - 1} * 8px)) / ${journey.length})`,
                                minWidth: "200px",
                                transform: `translateX(calc((100% + 8px) * ${journey.findIndex(
                                    (f) => f.name === activeApp.name,
                                )})) translateZ(0px)`,
                            }}
                        />
                        {journey.map((LeetCode, index) => (
                            <button
                                key={LeetCode.name}
                                type="button"
                                onClick={(event) => {
                                    setActiveApp(LeetCode);
                                    // if index i >= 2
                                    // then scroll to the right
                                    event.currentTarget.parentElement?.parentElement?.scrollTo({
                                        left: index >= 2 ? index * (244 + 8) : 0,
                                        behavior: "smooth",
                                    });
                                }}
                                className={clsx(
                                    "z-[1]",
                                    "snap-start",
                                    "appearance-none",
                                    "focus:outline-none",
                                    // "border-none",
                                    "flex-1",
                                    "break-keep",
                                    "whitespace-nowrap",
                                    "landing-sm:min-w-[200px]",
                                    "py-2",
                                    "landing-sm:py-3.5",
                                    "px-4",
                                    "rounded-xl",
                                    "transition-colors",
                                    "ease-in-out",
                                    "duration-150",
                                    activeApp.name !== LeetCode.name && "bg-transparent",
                                    activeApp.name === LeetCode.name && "bg-gray-200 dark:bg-gray-700",
                                    activeApp.name === LeetCode.name && "border-b-4 border-green-500 dark:border-orange-700",
                                    activeApp.name !== LeetCode.name && "hover:text-gray-900 dark:hover:text-gray-200",
                                    activeApp.name === LeetCode.name && "text-green-700 dark:text-orange-400",
                                    activeApp.name !== LeetCode.name && "text-gray-600 dark:text-gray-400",
                                    activeApp.name === LeetCode.name && "text-gray-900 dark:text-gray-0",
                                    activeApp.name !== LeetCode.name && "border-b-2 border-transparent hover:bg-gray-200 dark:hover:bg-gray-700",
                                    "landing-sm:bg-transparent",
                                    "dark:landing-sm:bg-transparent",
                                    "transition-colors",
                                    "duration-150",
                                    "ease-out",
                                    "text-xs",
                                    "landing-sm:text-sm",
                                )}
                            >
                                {LeetCode.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div
                className={clsx(
                    "rounded-lg",
                    "landing-md:rounded-xl",
                    "landing-lg:rounded-2xl",
                    "overflow-hidden",
                    "shadow-sm shadow-gray-200 dark:shadow-none",
                    "relative",
                    "group/showcase-inner",
                    "w-full",
                )}
            >
                <ShowcaseComponent
                    className={clsx(
                        "animate-showcase-reveal",
                        "absolute",
                        "left-0",
                        "top-0",
                        "w-full",
                        "rounded-lg",
                        "landing-md:rounded-xl",
                        "landing-lg:rounded-2xl",
                        "overflow-hidden",
                    )}
                />
            </div>
        </div>
    );
};
