import Head from "@docusaurus/Head";
import React, { SVGProps } from "react";
import { CommonHeader } from "@site/src/prepverse-theme/common-header";
import { CommonLayout } from "@site/src/prepverse-theme/common-layout";
import { LandingFooter } from "@site/src/prepverse-theme/landing-footer";
import clsx from "clsx";
import { TemplatesHero } from "@site/src/prepverse-theme/templates-hero";
import {
    Headless,
    Cpp,
    Python,
    Java,
    HTML,
    CSS,
    JavaScript,
} from "@site/src/assets/integration-icons";
import { TemplatesList } from "@site/src/prepverse-theme/templates-list";
import { TemplatesFilters } from "@site/src/prepverse-theme/templates-filters";
import { TemplatesFilterButton } from "@site/src/prepverse-theme/templates-filter-button";
import { CommonDrawer } from "@site/src/prepverse-theme/common-drawer";

const Templates: React.FC = () => {
    const title = "PrepVerse | DSA+CP Practice";

    const [isFilterDrawerOpen, setIsFilterDrawerOpen] = React.useState(false);

    const [filters, setFilters] = React.useState<{
        topicFilters: string[];
        languageFilters: string[];
    }>({
        topicFilters: [],
        languageFilters: [],
    });

    const dataFiltered = React.useMemo(() => {
        if (!filters.topicFilters.length && !filters.languageFilters.length) {
            return dataTemplates;
        }

        return dataTemplates.filter((item) => {
            return item.integrations.some((integration) => {
                return (
                    filters.topicFilters.includes(integration.label) ||
                    filters.languageFilters.includes(integration.label)
                );
            });
        });
    }, [filters]);

    const handleFilterChange = (filter: string, field: keyof typeof filters) => {
        setFilters((prev) => {
            const hasFilter = prev[field].includes(filter);
            if (hasFilter) {
                return {
                    ...prev,
                    [field]: prev[field].filter((item) => item !== filter),
                };
            }

            return {
                ...prev,
                [field]: [...prev[field], filter],
            };
        });
    };

    return (
        <>
            <Head>
                <html data-active-page="index" />
                <title>{title}</title>
                <meta property="og:title" content={title} />
                <link
                    rel="preload"
                    href="https://refine.new/embed-form"
                    as="document"
                />
            </Head>
            <CommonLayout description="DSA+CP Practice">
                <div>
                    <CommonHeader />
                    <div
                        className={clsx(
                            "flex flex-col",
                            "pb-12 landing-sm:pb-16 landing-md:pb-20",
                            "px-2 landing-sm:px-0",
                        )}
                    >
                        <div
                            className={clsx(
                                "w-full",
                                "mx-auto",
                                "px-2 landing-sm:px-8 landing-md:px-0",
                                "pt-4",
                                "landing-sm:pt-12",
                                "landing-md:pt-0",
                                "w-full max-w-[592px] landing-sm:max-w-[656px] landing-md:max-w-full",
                            )}
                        >
                            <TemplatesHero />
                            <TemplatesFilterButton
                                className={clsx("flex landing-md:hidden", "mt-6")}
                                onClick={() => {
                                    setIsFilterDrawerOpen(true);
                                }}
                            />
                        </div>
                        <div
                            className={clsx(
                                "w-full max-w-[592px] landing-sm:max-w-[656px] landing-md:max-w-[896px] landing-lg:max-w-[1200px]",
                                "flex",
                                "items-start",
                                "gap-6",
                                "mx-auto",
                                "mt-12",
                                "relative",
                                "not-prose",
                            )}
                        >
                            <div
                                className={clsx(
                                    "hidden landing-md:flex",
                                    "flex-col",
                                    "not-prose",
                                    "sticky top-24 left-0",
                                )}
                            >
                                <h3
                                    className={clsx(
                                        "text-base",
                                        "font-semibold",
                                        "dark:text-gray-300 text-gray-900",
                                        "pl-4",
                                    )}
                                >
                                    Filter CodeVerse
                                </h3>
                                <TemplatesFilters
                                    svgId={"sider"}
                                    onLanguageFiltersChange={(languageFilters) => {
                                        handleFilterChange(languageFilters, "languageFilters");
                                    }}
                                    onTopicFiltersChange={(topicFilters) => {
                                        handleFilterChange(topicFilters, "topicFilters");
                                    }}
                                    className={clsx("min-w-[180px]", "mt-10")}
                                    selected={filters}
                                    data={dataFilters}
                                />
                            </div>
                            <TemplatesList data={dataFiltered} />
                        </div>
                    </div>
                    <LandingFooter />
                </div>
                <CommonDrawer
                    onClose={() => setIsFilterDrawerOpen(false)}
                    open={isFilterDrawerOpen}
                    title="Filter Templates"
                    variant="templates"
                >
                    <div className={clsx("flex", "flex-col", "not-prose")}>
                        <TemplatesFilters
                            svgId={"drawer"}
                            onLanguageFiltersChange={(languageFilters) => {
                                handleFilterChange(languageFilters, "languageFilters");
                            }}
                            onTopicFiltersChange={(topicFilters) => {
                                handleFilterChange(topicFilters, "topicFilters");
                            }}
                            className={clsx("min-w-[180px]")}
                            selected={filters}
                            data={dataFilters}
                        />
                    </div>
                </CommonDrawer>
            </CommonLayout>
        </>
    );
};

type Integration = {
    topicFilters: {
        label: 
        | "Data Structures" 
        | "Algorithms"
        | "Competitive Programming";
        icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
    };
    languageFilters: {
        label:
        | "C++"
        | "Python"
        | "Java"
        | "HTML"
        | "CSS"
        | "JavaScript";
        icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
    };
};

const dataFilters = {
    topicFilters: [
        {
            label: "Data Structures",
            icon: (props: SVGProps<SVGSVGElement>) => (
                <Headless width={16} height={16} {...props} />
            ),
        },
        {
            label: "Algorithms",
            icon: (props: SVGProps<SVGSVGElement>) => (
                <Headless width={16} height={16} {...props} />
            ),
        },
        {
            label: "Competitive Programming",
            icon: (props: SVGProps<SVGSVGElement>) => (
                <Headless width={16} height={16} {...props} />
            ),
        },
    ],
    languageFilters: [
        {
            label: "C++",
            icon: (props: SVGProps<SVGSVGElement>) => (
                <Cpp width={16} height={16} {...props} />
            ),
        },
        {
            label: "Python",
            icon: (props: SVGProps<SVGSVGElement>) => (
                <Python width={16} height={16} {...props} />
            ),
        },
        {
            label: "Java",
            icon: (props: SVGProps<SVGSVGElement>) => (
                <Java width={16} height={16} {...props} />
            ),
        },
        {
            label: "HTML",
            icon: (props: SVGProps<SVGSVGElement>) => (
                <HTML width={16} height={16} {...props} />
            ),
        },
        {
            label: "CSS",
            icon: (props: SVGProps<SVGSVGElement>) => (
                <CSS width={16} height={16} {...props} />
            ),
        },
        {
            label: "JavaScript",
            icon: (props: SVGProps<SVGSVGElement>) => (
                <JavaScript width={16} height={16} {...props} />
            ),
        },
    ],
};

const dataTemplates: {
    title: string;
    description: string;
    image: string;
    to: string;
    integrations: (Integration["topicFilters"] | Integration["languageFilters"])[];
}[] = [
        {
            to: "/CodeVerse/dsa",
            title: "Data Structure and Algorithm",
            description:
                "Solving complex computational tasks efficiently through organized data representation and strategic problem-solving methodologies.",
            image:
                "https://miro.medium.com/v2/resize:fit:1358/1*4ZcW5tSdizlbtDQyVpRTuA.jpeg",
            integrations: [
                {
                    label: "C++",
                    icon: (props: SVGProps<SVGSVGElement>) => (
                        <Cpp width={16} height={16} {...props} />
                    ),
                },
                {
                    label: "Python",
                    icon: (props: SVGProps<SVGSVGElement>) => (
                        <Python width={16} height={16} {...props} />
                    ),
                },
                {
                    label: "Data Structures",
                    icon: (props: SVGProps<SVGSVGElement>) => (
                        <Headless width={16} height={16} {...props} />
                    ),
                },
                {
                    label: "Algorithms",
                    icon: (props: SVGProps<SVGSVGElement>) => (
                        <Headless width={16} height={16} {...props} />
                    ),
                },
            ],
        },
        {
            to: "/CodeVerse/cp",
            title: "Competitive Programming",
            description:
                "Solve algorithmic puzzles under time constraints to optimize problem-solving skills and code efficiency.",
            image:
                "https://www.andreafiori.net/img/social/og/competitive-programming.gif",
            integrations: [
                {
                    label: "C++",
                    icon: (props: SVGProps<SVGSVGElement>) => (
                        <Cpp width={16} height={16} {...props} />
                    ),
                },
                {
                    label: "Competitive Programming",
                    icon: (props: SVGProps<SVGSVGElement>) => (
                        <Headless width={16} height={16} {...props} />
                    ),
                },
            ],
        },
    ];

export default Templates;