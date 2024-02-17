import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import React from "react";
import { FooterRedditIcon as RedditIcon } from "@site/src/prepverse-theme/icons/footer-reddit";
import { BlogFooter } from "@site/src/prepverse-theme/blog-footer";
import { CommonHeader } from "@site/src/prepverse-theme/common-header";
import { CommonLayout } from "@site/src/prepverse-theme/common-layout";
import { GithubIcon } from "@site/src/prepverse-theme/icons/github";
import { JoinUsIcon } from "@site/src/prepverse-theme/icons/join-us";
import { MailIcon } from "@site/src/prepverse-theme/icons/mail";
import { MarkerIcon } from "@site/src/prepverse-theme/icons/marker";
import { OpenSourceIcon } from "@site/src/prepverse-theme/icons/open-source";
import { DiscordIcon, TwitterIcon } from "@site/src/prepverse-theme/icons/popover";
import { useColorMode } from "@docusaurus/theme-common";
import { CommonThemedImage } from "@site/src/prepverse-theme/common-themed-image";
import { EnterpriseHeroSection } from "@site/src/prepverse-theme/enterprise-hero-section";
import { EnterpriseFaq } from "@site/src/prepverse-theme/enterprise-faq";
import { EnterpriseGetInTouchCta } from "@site/src/prepverse-theme/enterprise-get-in-touch-cta";
import ProjectList from "@site/src/components/project-list";

const About: React.FC = () => {
    const { colorMode } = useColorMode();
    return (
        <>
            <Head title="About | AkashSingh3031">
                <html data-page="about" data-customized="true" />
            </Head>
            <CommonLayout description="">
                <div className={clsx()}>
                    <CommonHeader />
                    <div
                        className={clsx(
                            "flex flex-col",
                            "gap-12 landing-sm:gap-20 landing-md:gap-28 landing-lg:gap-40",
                            "pb-12 landing-sm:pb-16 landing-md:pb-20 landing-lg:pb-40",
                            "mx-auto",
                        )}
                    >
                        <EnterpriseHeroSection
                            className={clsx(
                                "h-auto landing-md:h-[432px]",
                                "mt-4 landing-sm:mt-8 landing-lg:mt-8",
                                "px-4 landing-sm:px-0",
                                "landing-lg:pr-12",
                            )}
                        />
                        <ProjectList />
                        {/* <EnterpriseFaq
                            className={clsx(
                                "px-4 landing-sm:px-10 landing-lg:px-0",
                                "w-full landing-lg:max-w-[792px] mx-auto",
                            )}
                        /> */}
                    </div>
                    <BlogFooter />
                </div>
            </CommonLayout>
        </>
    );
};

export default function AboutPage() {
    return (
        <CommonLayout>
            <About />
        </CommonLayout>
    );
}