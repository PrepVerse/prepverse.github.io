import clsx from "clsx";
import React, { FC, SVGProps } from "react";

type Props = {
    svgId?: string;
    className?: string;
    selected: {
        topicFilters: string[];
        languageFilters: string[];
    };
    data: {
        topicFilters: {
            label: string;
            icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
        }[];
        languageFilters: {
            label: string;
            icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
        }[];
    };
    onLanguageFiltersChange: (languageFilters: string) => void;
    onTopicFiltersChange: (topicFilters: string) => void;
};

export const TemplatesFilters: FC<Props> = ({
    svgId,
    className,
    data,
    selected,
    onLanguageFiltersChange,
    onTopicFiltersChange,
}) => {
    return (
        <div className={clsx("flex", "flex-col", "not-prose", className)}>
            <h4
                className={clsx(
                    "pl-4",
                    "text-sm",
                    "font-semibold",
                    "dark:text-gray-400 text-gray-700",
                )}
            >
                Languages
            </h4>
            <div
                className={clsx(
                    "flex",
                    "flex-col",
                    "items-start",
                    "gap-4",
                    "mt-3",
                )}
            >
                {data.languageFilters.map((item) => {
                    const isSelected = selected.languageFilters.includes(item.label);
                    const Icon = item.icon;

                    return (
                        <div
                            key={item.label}
                            onClick={() => onLanguageFiltersChange(item.label)}
                            role="button"
                            className={clsx(
                                "flex",
                                "items-center",
                                "py-2 pl-2 pr-4",
                                "gap-2",
                                "rounded-full",
                                "cursor-pointer",
                                "border dark:border-gray-700 border-gray-200",
                                isSelected && "dark:bg-gray-700 bg-gray-50",
                                "transition-colors duration-200 ease-in-out",
                            )}
                        >
                            <Icon id={svgId} />
                            <span
                                className={clsx(
                                    "text-sm",
                                    !isSelected &&
                                        "dark:text-gray-400 text-gray-600",
                                    isSelected &&
                                        "dark:text-gray-0 text-gray-900",
                                )}
                            >
                                {item.label}
                            </span>
                        </div>
                    );
                })}
            </div>
            <h4
                className={clsx(
                    "pl-4",
                    "text-sm",
                    "font-semibold",
                    "dark:text-gray-400 text-gray-700",
                    "mt-10",
                )}
            >
                Topics
            </h4>
            <div
                className={clsx(
                    "flex",
                    "flex-col",
                    "items-start",
                    "gap-3",
                    "mt-4",
                )}
            >
                {data.topicFilters.map((item) => {
                    const isSelected = selected.topicFilters.includes(
                        item.label,
                    );
                    const Icon = item.icon;

                    return (
                        <div
                            key={item.label}
                            onClick={() => onTopicFiltersChange(item.label)}
                            role="button"
                            className={clsx(
                                "flex",
                                "items-center",
                                "py-2 pl-2 pr-4",
                                "gap-2",
                                "rounded-full",
                                "cursor-pointer",
                                "border dark:border-gray-700 border-gray-200",
                                isSelected && "dark:bg-gray-700 bg-gray-50",
                                // "transition-colors duration-200 ease-in-out",
                            )}
                        >
                            <Icon id={svgId} />
                            <span
                                className={clsx(
                                    "text-sm",
                                    !isSelected &&
                                        "dark:text-gray-400 text-gray-600",
                                    isSelected &&
                                        "dark:text-gray-0 text-gray-900",
                                )}
                            >
                                {item.label}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
