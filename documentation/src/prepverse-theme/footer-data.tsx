import React from "react";
import {
        FooterGithubIcon,
        FooterTwitterXIcon,
        InstagramIconColor,
        LinkedInIconColor,
        TelegramIconColor,
        WhatsAppIconColor
    } from "./icons/social-tech";
import { NewBadgeIcon } from "./icons/popover";
import { ExternalIcon } from "./icons/external";

export const menuItems = [
    {
        label: "Resources",
        items: [
            {
                label: "Getting Started",
                href: "/docs",
            },
            {
                label: "Blog",
                href: "/blog",
            },
            {
                label: "Project Showcase",
                icon: <NewBadgeIcon />,
                href: "/showcase",
            },
            {
                label: "Community",
                icon: <NewBadgeIcon />,
                href: "/prepverse-community",
            },
        ],
    },
    {
        label: "Product",
        items: [
            {
                label: "CodePoint",
                icon: <ExternalIcon />,
                href: "https://prepverse.github.io/CodePoint",
            },
            {
                label: "LeetVerse",
                icon: <ExternalIcon />,
                href: "https://prepverse.github.io/LeetVerse",
            },
        ],
    },
    {
        label: "About",
        items: [
            {
                label: "About Me",
                href: "/AkashSingh3031",
            },
            {
                label: "Portfolio",
                icon: <ExternalIcon />,
                href: "https://prepverse.github.io/portfolio",
            },
        ],
    },
];

export const secondaryMenuItems = [
    // {
    //     label: "PrepVerse Community",
    //     href: "/prepverse-community",
    // },
    {
        label: "License",
        href: "https://github.com/PrepVerse/prepverse.github.io/blob/master/LICENSE",
    },
];

export const footerDescription = `Thank you for visiting, Connect with me over socials.`;

export const socialLinks = [
    {
        icon: FooterGithubIcon,
        href: "https://github.com/AkashSingh3031",
    },
    {
        icon: LinkedInIconColor,
        href: "https://www.linkedin.com/in/akashsingh3031",
    },
    {
        icon: FooterTwitterXIcon,
        href: "https://twitter.com/akashsingh3031",
    },
    {
        icon: WhatsAppIconColor,
        href: "https://wa.me/+919794423031",
    },
    {
        icon: TelegramIconColor,
        href: "https://t.me/akashsingh3031",
    },
    {
        icon: InstagramIconColor,
        href: "https://www.instagram.com/akash.singh3031",
    },
];
