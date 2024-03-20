module.exports = {
    tutorial: {
        label: "Tutorial",
        path_prefix_segment: "tutorial",
        defaultParameters: {
            language: "cpp",
        },
        parameterOptions: {
            language: [
                {
                    label: "C++",
                    value: "cpp",
                },
                {
                    label: "Python",
                    value: "py",
                },
                {
                    label: "Java",
                    value: "java",
                    status: "coming-soon",
                },
            ],
        },
        units: [
            {
                title: "DSA",
                id: "dsa",
                items: [
                    "dsa/:language/index",
                ],
            },
        ],
    },
};
