"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

async function PrepVerseTemplates() {
    return {
        name: "docusaurus-plugin-prepverse-templates",
        contentLoaded: async (args) => {
            const { content, actions } = args;
            const { addRoute, createData } = actions;

            await Promise.all(
                content.map(async (data) => {
                    const json = await createData(
                        `templates-${data.slug}.json`,
                        JSON.stringify(data, null, 2),
                    );

                    addRoute({
                        path: `/CodeVerse/${data.slug}`,
                        component:
                            "@site/src/components/templates-detail-page/index",
                        exact: true,
                        modules: {
                            content: json,
                        },
                    });
                }),
            );
        },
        loadContent: async () => {
            return templates;
        },
    };
}
exports.default = PrepVerseTemplates;

const templates = [
    {
        slug: "dsa",
        title: "Data Structure and Algorithm",
        images: [
            "https://miro.medium.com/v2/resize:fit:1358/1*4ZcW5tSdizlbtDQyVpRTuA.jpeg",
        ],
        runOnYourLocalPath: "app-crm",
        liveDemo: "https://example.crm.refine.dev/",
        github: "https://github.com/refinedev/refine/tree/master/examples/app-crm",
        reactPlatform: "Vite",
        uiFramework: "Ant Design",
        dataProvider: "Nestjs-query",
        authProvider: "Custom",
        description: ``,
    },
    {
        slug: "cp",
        title: "Competitive Programming",
        images: [
            "https://refine.ams3.cdn.digitaloceanspaces.com/templates/detail-storefront.jpg",
        ],
        runOnYourLocalPath: "finefoods-client",
        liveDemo: "https://example.refine.dev/",
        github: "https://github.com/refinedev/refine/tree/master/examples/finefoods-client",
        reactPlatform: "Next.js",
        uiFramework: "Headless",
        dataProvider: "Rest API",
        authProvider: "Custom",
        description: ``,
    },
];