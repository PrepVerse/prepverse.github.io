import { FooterDiscordIcon } from "./icons/footer-discord";
import { FooterGithubIcon } from "./icons/footer-github";
import { FooterLinkedinIcon } from "./icons/footer-linkedin";
import { FooterRedditIcon } from "./icons/footer-reddit";
import { FooterTwitterIcon } from "./icons/footer-twitter";

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
                href: "https://prepverse.github.io/CodePoint",
            },
            {
                label: "LeetVerse",
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
                href: "https://prepverse.github.io/portfolio",
            },
        ],
    },
];

export const footerDescription = `Thank you for visiting, Connect with me over socials.`;

export const socialLinks = [
    {
        icon: FooterGithubIcon,
        href: "https://github.com/AkashSingh3031",
    },
    {
        icon: FooterTwitterIcon,
        href: "https://twitter.com/akashsingh3031",
    },
    {
        icon: FooterLinkedinIcon,
        href: "https://www.linkedin.com/in/akashsingh3031",
    },
];
