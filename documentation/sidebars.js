/** @type {import('@docusaurus/plugin-content-docs/src/sidebars/types').Sidebars} */
module.exports = {
    someSidebar: [
        {
            type: "category",
            label: "Getting Started",
            className: "category-as-header",
            items: [
                // {
                //     type: "link",
                //     href: "https://prepverse.github.io/LeetVerse",
                //     label: "LeetVerse",
                //     customProps: {
                //         external: true,
                //     },
                // },
                // {
                //     type: "link",
                //     href: "https://prepverse.github.io/CodePoint",
                //     label: "CodePoint",
                //     customProps: {
                //         external: true,
                //     },
                // },
                "getting-started/overview",
            ],
        },
        {
            type: "link",
            href: "https://prepverse.vercel.app/prepverse-community",
            label: "Prepverse Community",
            className: "enterprise-badge",
        },
        {
            type: "category",
            label: "Python",
            className: "category-as-header",
            items: [
                {
                    type: "category",
                    label: "Python Foundation",
                    link: {
                        type: "generated-index",
                        title: "Python Foundation",
                        slug: "/python-foundation",
                    },
                    items: [
                        "python-foundation/introduction-to-python",
                        {
                            type: "category",
                            label: "Python Basics",
                            link: {
                                type: "generated-index",
                                title: "Python Basics",
                                slug: "/python-foundation/python-basics",
                            },
                            items: [
                                "python-foundation/print",
                                "python-foundation/comments",
                            ],
                        },
                        // {
                        //     type: "category",
                        //     label: "Python Data Types",
                        //     link: {
                        //         type: "generated-index",
                        //         title: "Python Data Types",
                        //         slug: "/python-foundation/python-data-types",
                        //     },
                        //     items: [
                        //         "python-foundation/data-types",
                        //     ],
                        // },
                    ],
                },
                // {
                //     type: "category",
                //     label: "Python OOPs",
                //     link: {
                //         type: "generated-index",
                //         title: "Python Foundation",
                //         slug: "/python-oop",
                //     },
                //     items: [
                //         "python-foundation/data-types",
                //     ],
                // },
            ],
        },
    ],
};