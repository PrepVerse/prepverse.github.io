import clsx from "clsx";
import React from "react";
import { CautionIcon } from "./icons/caution";
import { CommandLineIcon } from "./icons/command-line";
import { InfoIcon } from "./icons/info";
import { TipIcon } from "./icons/tip";
import { NoteIcon } from "./icons/note";
import { GithubIcon } from "./icons/github";
import { SourceCodeIcon } from "./icons/source-code";

type Props = {
    type:
        | "additional"
        | "caution"
        | "command-line"
        | "danger"
        | "info"
        | "info-tip"
        | "note"
        | "simple"
        | "sourcecode"
        | "tip";
    title?: React.ReactNode;
    children: React.ReactNode;
};

const icons = {
    additional: NoteIcon,
    caution: CautionIcon,
    "command-line": CommandLineIcon,
    danger: CautionIcon,
    info: InfoIcon,
    "info-tip": TipIcon,
    note: NoteIcon,
    sourcecode: SourceCodeIcon,
    tip: TipIcon,
};

const colorTextClasses = {
    additional: "text-refine-cyan",
    caution: "text-refine-react-light-orange dark:text-refine-react-dark-orange",
    "command-line": "text-refine-purple",
    danger: "text-refine-red",
    info: "text-refine-react-light-purple dark:text-refine-react-dark-purple",
    "info-tip": "text-refine-blue dark:text-[#6EB3F7]",
    note: "text-refine-react-light-green dark:text-refine-react-dark-green",
    simple: "text-gray-700 dark:text-gray-100",
    sourcecode: "text-refine-pink",
    tip: "text-refine-react-light-green-alt dark:text-refine-react-dark-green-alt",
};

const colorWrapperClasses = {
    additional: "bg-refine-cyan bg-opacity-10 border-l-refine-cyan",
    caution: "bg-refine-react-light-orange bg-opacity-[0.15] dark:bg-refine-react-dark-orange/15 dark:bg-opacity-[0.15] border-l-refine-react-light-orange dark:border-l-refine-dark-orange",
    "command-line": "bg-refine-purple bg-opacity-10 border-l-refine-purple",
    danger: "bg-refine-red bg-opacity-10 border-l-refine-red",
    info: "bg-refine-react-light-purple bg-opacity-[0.15] dark:bg-refine-react-dark-purple/15 dark:bg-opacity-[0.15] border-l-refine-react-light-purple dark:border-l-refine-react-dark-purple",
    "info-tip": "bg-refine-blue/10 dark:bg-[#6EB3F7]/10 bg-opacity-10  dark:bg-opacity-10 border-l-refine-blue",
    note: "bg-refine-react-light-green-bg dark:bg-refine-react-light-green/20 dark:bg-opacity-[0.2] border-l-refine-react-light-green dark:border-l-refine-react-dark-green",
    simple: "border dark:border-gray-700 border-gray-300",
    sourcecode: "bg-refine-pink bg-opacity-10 border-l-refine-pink",
    tip: "bg-refine-react-light-green-alt bg-opacity-[0.05] dark:bg-refine-react-dark-green-alt/5 dark:bg-opacity-[0.05] border-l-refine-react-light-green-alt dark:border-l-refine-react-dark-green-alt",
};

const titles = {
    additional: "ADDITIONAL INFO",
    caution: "CAUTION",
    "command-line": "COMMAND LINE",
    danger: "DANGER",
    info: "INFORMATION",
    "info-tip": "INFORMATION",
    note: "NOTE",
    simple: "Good to know",
    sourcecode: "SOURCE CODE",
    tip: "TIP",
};

export const Admonition = ({ type, title, children }: Props) => {
    const Icon = icons[type] ?? (() => null);
    const clsText = colorTextClasses[type] ?? "tex-inherit";
    const clsWrapper = colorWrapperClasses[type] ?? "bg-inherit";

    if (type === "simple") {
        return (
            <Simple type={type} title={title}>
                {children}
            </Simple>
        );
    }

    return (
        <div
            className={clsx(
                "rounded-lg",
                "admonition",
                `admonition-${type}`,
                "mb-6",
                "refine-wider-container",
                clsWrapper,
            )}
        >
            <div
                className={clsx(
                    "border-l-4",
                    "border-l-solid",
                    "border-l-inherit",
                    "rounded-tl-lg",
                    "rounded-bl-lg",
                    "py-4",
                    "pr-4",
                    "pl-3",
                    "flex flex-col",
                    "gap-2 sm:gap-4",
                )}
            >
                {(title || titles[type]) && (
                    <div
                        className={clsx(
                            "flex",
                            "items-center",
                            "gap-2",
                            "text-xs sm:text-base 2xl:text-base 2xl:leading-7",
                            "font-semibold",
                            clsText,
                        )}
                    >
                        <Icon />
                        <span className="uppercase">
                            {title ?? titles[type] ?? ""}
                        </span>
                    </div>
                )}
                <div className={clsx("text-gray-0", "text-base", "last:mb-0")}>
                    {children}
                </div>
            </div>
        </div>
    );
};

const Simple = ({ type, title, children }: Props) => {
    const clsText = colorTextClasses[type] ?? "tex-inherit";
    const clsWrapper = colorWrapperClasses[type] ?? "bg-inherit";

    return (
        <div
            className={clsx(
                "rounded-lg",
                "admonition",
                `admonition-${type}`,
                "mb-6",
                clsWrapper,
            )}
        >
            <div className={clsx("flex flex-col", "gap-2", !title && "pt-4")}>
                {title && (
                    <div
                        className={clsx(
                            "px-4",
                            "pt-4",
                            "text-sm",
                            "leading-5",
                            "-mt-0.5",
                            clsText,
                        )}
                    >
                        <span className="font-semibold">{title ?? ""}</span>
                        <span>:</span>
                    </div>
                )}
                <div
                    className={clsx(
                        "text-gray-0",
                        "text-base",
                        "last:mb-0",
                        "px-4 pb-4",
                        "admonition-content",
                    )}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};
