import clsx from "clsx";
import React, { FC } from "react";
import {
    AccessControlIcon,
    BlackBoxIcon,
    IdentityIcon,
    MonitorIcon,
    SelfHostedIcon,
    SupportIcon,
} from "../components/landing/icons";
import { LandingSectionCtaButtonAlt } from "./landing-section-cta-button";

const list = [
    {
        icon: <SelfHostedIcon />,
        title: "Data Structure and Algorithms",
        description:
            "Master Data Structures and Algorithms with our comprehensive guides, tutorials, and practice problems.",
        view: <LandingSectionCtaButtonAlt />,
        source: "https://prepverse.vercel.app/docs/1.DS.Algo",
    },
    {
        icon: <IdentityIcon />,
        title: "Web Development",
        description:
            "Master web development with our tutorials and resources. Learn HTML, CSS, JavaScript, and more to build stunning websites.",
        view: <LandingSectionCtaButtonAlt />,
        source: "https://prepverse.vercel.app/showcase",
    },
    {
        icon: <SupportIcon />,
        title: "AI ML & Data Science",
        description:
            "Discover cutting-edge resources in AI, ML, and Data Science. Enhance your skills with tutorials, guides, and practice tests.",
        view: <LandingSectionCtaButtonAlt />,
        source: "https://prepverse.vercel.app",
    },
    {
        icon: <AccessControlIcon />,
        title: "Languages",
        description:
            "Discover a diverse array of programming languages tailored for every project and proficiency level.",
        view: <LandingSectionCtaButtonAlt />,
        source: "https://prepverse.vercel.app/docs",
    },
    {
        icon: <BlackBoxIcon />,
        title: "CS Subjects",
        description:
            "Explore essential Computer Science subjects: OS, DBMS, CN, OOPs - learn key concepts and applications in just one click",
        view: <LandingSectionCtaButtonAlt />,
        source: "https://prepverse.vercel.app",
    },
    {
        icon: <MonitorIcon />,
        title: "Databases",
        description:
            "Discover the backbone of data management with Databases—efficiently store, retrieve, and manage structured information for applications.",
        view: <LandingSectionCtaButtonAlt />,
        source: "https://prepverse.vercel.app",
    },
];

type Props = {
    className?: string;
};

export const LandingExplorePrepVerse: FC<Props> = ({ className }) => {
    return (
        <div className={clsx(className, "max-w-[344px] sm:max-w-[620px] md:max-w-[944px] lg:max-w-[1020px] mx-auto")}>
            <div
                className={clsx("not-prose", "w-full", "px-4 landing-md:px-10")}
            >
                <h2
                    className={clsx(
                        "text-2xl landing-sm:text-[32px] landing-sm:leading-[40px]",
                        "tracking-tight",
                        "text-center",
                        "p-0",
                        "dark:text-gray-0 text-gray-900",
                    )}
                >
                    {/* Enterprise developers{" "}
                    <span className="font-sans text-[#FE251B] drop-shadow-[0_0_30px_rgba(254,37,27,0.3)]">
                        ❤️
                    </span>{" "} */}
                    <span
                        className={clsx(
                            "font-semibold",
                            "dark:text-refine-cyan-alt dark:drop-shadow-[0_0_30px_rgba(71,235,235,0.25)]",
                            "text-refine-blue drop-shadow-[0_0_30px_rgba(0,128,255,0.3)]",
                        )}
                    >
                        Explore
                    </span>
                </h2>
                <p
                    className={clsx(
                        "mt-4 landing-sm:mt-6",
                        // "max-w-md",
                        "text-center",
                        "dark:text-gray-400 text-gray-600",
                    )}
                >
                    Discover computer science with our resources: study guides, tutorials, and practice tests to enhance your skills.
                    {/* Refine is designed to target the specific pain points of
                    larger organizations by giving top priority to{" "}
                    <span className="font-semibold text-gray-900 dark:text-gray-0">
                        security
                    </span>
                    . */}
                </p>
            </div>

            <div
                className={clsx(
                    "mt-8 landing-sm:mt-12 landing-lg:mt-20",
                    "grid",
                    "grid-cols-1 landing-md:grid-cols-2 landing-lg:grid-cols-3",
                    "gap-4 landing-sm:gap-12 landing-md:gap-6",
                    "mb-4 landing-sm:mb-12 landing-md:mb-6",
                )}
            >
                {list.map((item, index) => {
                    return (
                        <div
                            className={clsx(
                                "p-2",
                                "dark:bg-landing-noise",
                                "dark:bg-gray-900 bg-gray-100",
                                "rounded-2xl landing-sm:rounded-3xl",
                                "flex",
                                "flex-col",
                                "justify-between"
                            )}
                        >
                            <div
                                key={index}
                                className={clsx(
                                    "not-prose",
                                    "p-4 landing-sm:p-10",
                                    "flex",
                                    "flex-col landing-sm:flex-row landing-md:flex-col",
                                    "items-start",
                                    "gap-6"
                                )}
                            >
                                <div>{item.icon}</div>
                                <div className={clsx("flex", "flex-col", "gap-4")}>
                                    <h3
                                        className={clsx(
                                            "text-xl",
                                            "font-semibold",
                                            "text-gray-900 dark:text-gray-0"
                                        )}
                                    >
                                        {item.title}
                                    </h3>
                                    <h4
                                        className={clsx(
                                            "text-base",
                                            "dark:text-gray-400 text-gray-600"
                                        )}
                                    >
                                        {item.description}
                                    </h4>
                                </div>
                            </div>
                            <div
                                className={clsx(
                                    "pb-2",
                                    "pt-2",
                                    "mt-auto"
                                )}
                            >
                                <a
                                    target="_blank"
                                    href={item.source}
                                    rel="noreferrer"
                                >
                                    {item.view}
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
            <LandingSectionCtaButtonAlt to="https://prepverse.vercel.app/blog">
                Explore More
            </LandingSectionCtaButtonAlt>
        </div>
    );
};
