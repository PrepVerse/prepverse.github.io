import React, { FC } from "react";
import clsx from "clsx";
import { LandingRainbowButton } from "@site/src/prepverse-theme/landing-rainbow-button";
import { RefineLogoSeal } from "@site/src/prepverse-theme/icons/refine-logo-seal";

type Props = {
    title?: string;
    description?: string;
    button?: {
        text: string;
        href?: string;
        onClick?: () => void;
    };
};

export const BannerExamples: FC<Props> = ({
    title = "My Portfolio",
    description = "Click here to discover my latest projects, skills, and achievements on my portfolio website. My journey into creativity begins now!",
    button = {
        text: "Explore Now",
        href: "https://prepverse.github.io/portfolio?ref=banner-retool-alternative",
        onClick: undefined,
    },
}) => {
    React.useEffect(() => {
        if (
            typeof window !== "undefined" &&
            typeof window.gtag !== "undefined" &&
            title &&
            description
        ) {
            window.gtag("event", "view_banner", {
                banner_name: "banner-retool-alternative",
                banner_text: title,
                banner_description: description,
            });
        }
    }, [title, description]);
    return (
        <div
            className={clsx(
                "relative",
                "rounded-2xl",
                "p-8",
                "flex",
                "flex-col",
                "justify-center",
                "items-center",
                "not-prose",
                "bg-banner-examples-gray",
            )}
        >
            <h2
                className={clsx(
                    "text-2xl",
                    "font-semibold",
                    "bg-banner-examples-text",
                    "bg-clip-text",
                    "text-transparent",
                )}
            >
                {title}
            </h2>
            <p className={clsx("mt-2", "text-sm", "text-gray-300")}>
                {description}
            </p>
            <LandingRainbowButton
                className={clsx("mt-9")}
                href={button.href}
                onClick={button.onClick}
                target="_blank"
                rel="noopener noreferrer"
            >
                <div
                    className={clsx("text-gray-900", "text-base", "font-bold")}
                >
                    {button.text}
                </div>
            </LandingRainbowButton>
            {/* <RefineLogoSeal
                className={clsx("absolute", "bottom-2", "right-2")}
            /> */}
        </div>
    );
};
