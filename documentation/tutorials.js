module.exports = {
    tutorial: {
        label: "Tutorial",
        path_prefix_segment: "tutorial",
        defaultParameters: {
            routerSelection: "react-router",
            uiSelection: "ant-design",
        },
        parameterOptions: {
            routerSelection: [
                {
                    label: "React Router",
                    value: "react-router",
                },
                {
                    label: "Next.js",
                    value: "next-js",
                    status: "coming-soon",
                },
            ],
            uiSelection: [
                {
                    label: "Ant Design",
                    value: "ant-design",
                },
                {
                    label: "Material UI",
                    value: "material-ui",
                    status: "coming-soon",
                },
            ],
        },
        units: [
            {
                title: "DSA",
                id: "dsa",
                items: [
                    "dsa/index",
                ],
            },
        ],
    },
};
