/** @type {import('@docusaurus/plugin-content-docs/src/sidebars/types').Sidebars} */
module.exports = {
    someSidebar: [
        {
            type: "category",
            label: "Getting Started",
            className: "category-as-header",
            items: [
                {
                    type: "link",
                    href: "https://prepverse.github.io/LeetVerse",
                    label: "LeetVerse",
                    customProps: {
                        external: true,
                    },
                },
                {
                    type: "link",
                    href: "https://prepverse.github.io/CodePoint",
                    label: "CodePoint",
                    customProps: {
                        external: true,
                    },
                },
                "getting-started/overview",
            ],
        },
        {
            type: "link",
            href: "/prepverse-community",
            label: "Prepverse Community",
            className: "enterprise-badge",
        },
        {
            type: "category",
            label: "Basics of python",
            className: "category-as-header",
            items: [
                {
                    type: "category",
                    label: "Introduction to python",
                    // link: {
                    //     type: "generated-index",
                    //     title: "Array Tutorials",
                    //     slug: "/array",
                    // },
                    items: [
                        "python/intro",
                        "python/getting-started",
                        "python/comments",
                        // {
                        //     type: "category",
                        //     label: "Problems",
                        //     items: [
                        //         "array/quickstart",
                        //     ],
                        // },
                    ],
                },
                // {
                //     type: "category",
                //     label: "Variables and data types",
                //     items: [
                //         "array/quickstart",
                //     ],
                // },
            ],
        },
    ],
};