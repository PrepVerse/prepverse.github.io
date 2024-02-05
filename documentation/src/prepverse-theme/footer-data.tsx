import React from "react";
import { FooterDiscordIcon } from "./icons/footer-discord";
import { FooterGithubIcon } from "./icons/footer-github";
import { FooterLinkedinIcon } from "./icons/footer-linkedin";
import { FooterRedditIcon } from "./icons/footer-reddit";
import { FooterTwitterIcon } from "./icons/footer-twitter";
import { NewBadgeIcon } from "./icons/popover";

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
        ],
    },
    {
        label: "Product",
        items: [
            {
                label: "CodePoint",
                icon: <NewBadgeIcon />,
                href: "https://prepverse.github.io/CodePoint",
            },
            {
                label: "LeetVerse",
                icon: <NewBadgeIcon />,
                href: "https://prepverse.github.io/LeetVerse",
            },
        ],
    },
    {
        label: "About",
        items: [
            {
                label: "About Me",
                href: "/about",
            },
            {
                label: "Portfolio",
                icon: <NewBadgeIcon />,
                href: "https://prepverse.github.io/portfolio",
            },
        ],
    },
];

export const secondaryMenuItems = [
    // {
    //     label: "Terms & Conditions",
    //     href: "#",
    // },
    // {
    //     label: "Privacy Policy",
    //     href: "/privacy-policy",
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
        icon: FooterLinkedinIcon,
        href: "https://www.linkedin.com/in/akashsingh3031",
    },
    {
        icon: FooterTwitterIcon,
        href: "https://twitter.com/akashsingh3031",
    },
];
