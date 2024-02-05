import React from "react";
import clsx from "clsx";
import { EnterpriseGetInTouchButton } from "./enterprise-get-in-touch-button";
import { CommonThemedImage } from "./common-themed-image";

export const EnterpriseHeroSection = ({
    className,
}: {
    className?: string;
}) => {
    return (
        <div
            className={clsx(
                "flex flex-col",
                "landing-md:grid landing-md:grid-cols-12",
                "not-prose",
                className,
            )}
        >
            <div className={clsx("flex flex-col", "col-start-2 col-end-8")}>
                <h1
                    className={clsx(
                        "max-w-xl landing-md:max-w-[408px] landing-lg:max-w-non landing-lg:whitespace-nowrap",
                        "text-[32px] leading-[40px] landing-sm:text-[56px] landing-sm:leading-[72px]",
                        "tracking-tight",
                        "text-start",
                        "pl-4 landing-sm:pl-6 landing-md:pl-10",
                        "dark:text-gray-0 text-gray-900",
                    )}
                >
                    I am{" "}
                    <span
                        className={clsx(
                            "font-semibold",
                            "dark:text-refine-cyan-alt dark:drop-shadow-[0_0_30px_rgba(71,235,235,0.25)]",
                            "text-refine-blue drop-shadow-[0_0_30px_rgba(51,51,255,0.3)]",
                        )}
                    >
                        Akash Singh
                    </span>
                </h1>
                <p
                    className={clsx(
                        "max-w-[446px]",
                        "mt-6",
                        "pl-4 landing-sm:pl-6 landing-md:pl-10",
                        "dark:text-gray-400 text-gray-600",
                    )}
                >
                    Hello, I'm Akash Singh, a 2022 graduate in Computer Science and Engineering from Sagar Institute of Research Technology and Science (SIRTS), Bhopal. Passionate about web development and Machine Learning, I'm driven by curiosity to explore new technologies.
                    <br></br>
                    I thrive on learning and growth opportunities, continually enhancing my skills. Committed to excellence, I aim to contribute meaningfully in web development and Machine Learning.
                    <br></br>
                    <br></br>
                    "Face the challenge, Fight through the obstacles, Finish what you started."
                    <br></br>
                    <br></br>
                </p>
                <EnterpriseGetInTouchButton
                    className={clsx(
                        "pl-4 landing-sm:pl-6 landing-md:pl-10",
                        "mt-6 landing-lg:mt-2",
                    )}
                />
            </div>
            <div
                className={clsx(
                    "flex",
                    "justify-start",
                    "col-start-8",
                    "col-end-13",
                    "mt-12 landing-sm:mt-16 landing-md:mt-0",
                )}
            >
                <CommonThemedImage
                    className={clsx(
                        "landing-md:h-[420px] landing-md:w-[420px]",
                        "rounded-full",
                    )}
                    srcDark="https://github.com/AkashSingh3031.png"
                    srcLight="https://github.com/AkashSingh3031.png"
                    alt="Akash Singh"
                />
            </div>
        </div>
    );
};
