/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

require("dotenv").config();

const redirectJson = require("./redirects.json");
const tutorialData = require("./tutorial-units");

/** @type {import('@docusaurus/types/src/index').DocusaurusConfig} */
const siteConfig = {
    title: "PrepVerse",
    tagline: "Computer Science Preparation",
    url: "https://prepverse.github.io",
    baseUrl: "/",
    projectName: "PrepVerse",
    organizationName: "PrepVerse",
    trailingSlash: true,
    favicon: "img/prepverse_favicon.jpg",
    scripts: ["https://platform.twitter.com/widgets.js"],
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: Boolean(process.env.DISABLE_DOCS)
                    ? false
                    : {
                        path: "./docs",
                        sidebarPath: require.resolve("./sidebars.js"),
                        editUrl:
                            "https://github.com/PrepVerse/PrepVerse/tree/master/documentation",
                        showLastUpdateAuthor: true,
                        showLastUpdateTime: true,
                        disableVersioning:
                            process.env.DISABLE_VERSIONING === "true",
                        versions: {
                            current: {
                                label: "DSA",
                            },
                        },
                        lastVersion: "current",
                        admonitions: {
                            tag: ":::",
                            keywords: [
                                "additional",
                                "note",
                                "tip",
                                "info-tip",
                                "info",
                                "caution",
                                "danger",
                                "sourcecode",
                                "create-example",
                                "simple",
                            ],
                        },
                    },
                blog: false,
                theme: {
                    customCss: [
                        require.resolve("./src/refine-theme/css/fonts.css"),
                        require.resolve("./src/refine-theme/css/custom.css"),
                        require.resolve("./src/css/custom.css"),
                        require.resolve("./src/css/split-pane.css"),
                        require.resolve("./src/css/demo-page.css"),
                    ],
                },
                gtag: {
                    trackingID: "G-JF4ZWKWVGC",
                },
            },
        ],
    ],
    plugins: [
        [
            "@docusaurus/plugin-client-redirects",
            {
                redirects: redirectJson.redirects,
            },
        ],
        [
            "docusaurus-plugin-copy",
            {
                id: "Copy Workers",
                path: "static/workers",
                context: "workers",
                include: ["**/*.{js}"],
            },
        ],
        async function tailwindcss() {
            return {
                name: "docusaurus-tailwindcss",
                configurePostCss(postcssOptions) {
                    postcssOptions.plugins.push(require("tailwindcss"));
                    postcssOptions.plugins.push(require("autoprefixer"));
                    return postcssOptions;
                },
            };
        },
        "./plugins/docgen.js",
        "./plugins/examples.js",
        "./plugins/checklist.js",
        ...(process.env.DISABLE_BLOG
            ? []
            : [
                [
                    "./plugins/blog-plugin.js",
                    {
                        blogTitle: "Blog",
                        blogDescription: "A Docusaurus powered blog!",
                        routeBasePath: "/blog",
                        postsPerPage: 12,
                        blogSidebarTitle: "All posts",
                        blogSidebarCount: 0,
                        feedOptions: {
                            type: "all",
                            copyright: `Copyright © ${new Date().getFullYear()} Akash Singh.`,
                        },
                    },
                ],
            ]),
        "./plugins/intercom.js",
    ],
    themeConfig: {
        prism: {
            theme: require("prism-react-renderer/themes/github"),
            darkTheme: require("prism-react-renderer/themes/vsDark"),
            magicComments: [
                // Remember to extend the default highlight class name as well!
                {
                    className: "theme-code-block-highlighted-line",
                    line: "highlight-next-line",
                    block: { start: "highlight-start", end: "highlight-end" },
                },
                {
                    className: "code-block-hidden",
                    line: "hide-next-line",
                    block: { start: "hide-start", end: "hide-end" },
                },
                {
                    className: "theme-code-block-added-line",
                    line: "added-line",
                    block: { start: "added-start", end: "added-end" },
                },
                {
                    className: "theme-code-block-removed-line",
                    line: "removed-line",
                    block: { start: "removed-start", end: "removed-end" },
                },
            ],
        },
        image: "img/prepverse_favicon.jpg",
        algolia: {
            appId: "1",
            apiKey: "2",
            indexName: "prepverse",
            contextualSearch: true,
        },
        metadata: [
            {
                name: "keywords",
                content:
                    "react-admin, react-framework, internal-tool, admin-panel, ant-design, material ui, mui",
            },
        ],
        navbar: {
            logo: {
                alt: "PrepVerse",
                src: "img/prepverse_favicon.jpg",
            },
            items: [
                { to: "blog", label: "Blog", position: "left" },
                // {
                //     type: "docsVersionDropdown",
                //     position: "right",
                //     dropdownActiveClassDisabled: true,
                // },
                {
                    href: "https://github.com/AkashSingh3031/The-Complete-FAANG-Preparation",
                    position: "right",
                    className: "header-icon-link header-github-link",
                },
                {
                    href: "https://twitter.com/akashsingh3031",
                    position: "right",
                    className: "header-icon-link header-twitter-link",
                },
            ],
        },
        footer: {
            logo: {
                alt: "PrepVerse",
                src: "/img/prepverse_favicon.jpg",
            },
            links: [
                {
                    title: "Resources",
                    items: [
                        {
                            label: "Getting Started",
                            to: "docs",
                        },
                        {
                            label: "Blog",
                            to: "blog",
                        },
                    ],
                },
                {
                    title: "Product",
                    items: [
                        {
                            label: "CodePoint",
                            to: "https://prepverse.github.io/CodePoint/",
                        },
                        {
                            label: "LeetVerse",
                            to: "https://prepverse.github.io/LeetVerse/",
                        },
                    ],
                },
                {
                    title: "About Me",
                    items: [
                        {
                            label: "About",
                            to: "about",
                        },
                    ],
                },
                {
                    title: "__LEGAL",
                    items: [
                        {
                            label: "License",
                            to: "https://github.com/PrepVerse/PrepVerse/blob/next/LICENSE",
                        },
                        {
                            label: "codewithsky@gmail.com",
                            to: "mailto:codewithsky@gmail.com",
                        },
                    ],
                },
                {
                    title: "__SOCIAL",
                    items: [
                        {
                            href: "https://github.com/AkashSingh3031",
                            label: "github",
                        },
                        {
                            href: "https://twitter.com/akashsingh3031",
                            label: "twitter",
                        },
                        {
                            href: "https://www.linkedin.com/in/akashsingh3031",
                            label: "linkedin",
                        },
                    ],
                },
            ],
        },
        docs: {
            sidebar: {
                autoCollapseCategories: true,
            },
        },
        colorMode: {
            defaultMode: "dark",
        },
    },
    customFields: {
        /** Footer Fields */
        footerDescription: '',
        contactTitle: "Contact",
        contactDescription: [
            "PrepVerse",
        ],
        contactEmail: "codewithsky@gmail.com",
        /** ---- */
        /** Live Preview */
        LIVE_PREVIEW_URL:
            process.env.LIVE_PREVIEW_URL ?? "http://localhost:3030/preview",
        /** ---- */
        tutorial: tutorialData,
    },
    webpack: {
        jsLoader: (isServer) => ({
            loader: require.resolve("swc-loader"),
            options: {
                jsc: {
                    parser: {
                        syntax: "typescript",
                        tsx: true,
                    },
                    target: "es2017",
                },
                module: {
                    type: isServer ? "commonjs" : "es6",
                },
            },
        }),
    },
};

module.exports = siteConfig;
