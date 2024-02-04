import React from "react";
import Link from "@docusaurus/Link";
import { useBlogPost } from "@docusaurus/theme-common/internal";
import { blogPostContainerID } from "@docusaurus/utils-common";
import MDXContent from "@theme/MDXContent";
import BlogPostItemContainer from "@theme/BlogPostItem/Container";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {
    LinkedinIcon,
    LinkedinShareButton,
    TwitterIcon,
    TwitterShareButton,
    TelegramIcon,
    TelegramShareButton,
    FacebookIcon,
    FacebookShareButton,
    InstapaperIcon,
    InstapaperShareButton,
    RedditIcon,
    RedditShareButton,
} from "react-share";
import clsx from "clsx";

import { Date, ReadingTime } from "@site/src/components/blog/common";
import { BannerRandom } from "@site/src/components/banner/banner-random";

import { Twitter } from "../icons";

export const BlogPostPageView = ({ children }) => {
    const { metadata, isBlogPostPage } = useBlogPost();
    const {
        permalink,
        title,
        date,
        formattedDate,
        readingTime,
        frontMatter,
        tags,
        description,
        authors,
    } = metadata;
    const author = authors[0];

    const {
        siteConfig: { url },
    } = useDocusaurusContext();

    return (
        <BlogPostItemContainer
            className={clsx(
                "py-10",
                "px-4 sm:px-0",
                "blog-sm:py-12",
                "blog-md:py-16",
                "w-full",
                "mx-auto",
                "max-w-[512px]",
                "blog-sm:max-w-screen-blog-sm",
                "blog-lg:max-w-screen-content-2xl",
            )}
        >
            <div
                className={clsx(
                    "flex",
                    "justify-between",
                    "items-center",
                    "blog-sm:px-6",
                )}
            >
                <Link
                    to="/blog"
                    className={clsx("!text-gray-500 text-sm no-underline")}
                >
                    ← Back to blog
                </Link>
                <div className="flex items-center space-x-2 px-2 py-1">
                    <span className="text-gray-500 text-sm">Share on</span>
                    <LinkedinShareButton
                        url={url + permalink}
                        title={title}
                        source={url}
                        summary={description}
                        hashtags={tags.map((tag) => tag.label)}
                        className="flex"
                    >
                        <LinkedinIcon size={26} round />
                    </LinkedinShareButton>
                    <TwitterShareButton
                        windowWidth={750}
                        windowHeight={800}
                        url={url + permalink}
                        title={title}
                        hashtags={tags.map((tag) => tag.label)}
                        className="flex"
                    >
                        <Twitter width={26} height={26} />
                    </TwitterShareButton>
                    <TelegramShareButton
                        windowWidth={750}
                        windowHeight={800}
                        url={url + permalink}
                        title={title}
                        hashtags={tags.map((tag) => tag.label)}
                        className="flex"
                    >
                        <TelegramIcon size={26} round />
                    </TelegramShareButton>
                    <FacebookShareButton
                        windowWidth={750}
                        windowHeight={800}
                        url={url + permalink}
                        title={title}
                        hashtags={tags.map((tag) => tag.label)}
                        className="flex"
                    >
                        <FacebookIcon size={26} round />
                    </FacebookShareButton>
                </div>
            </div>
            <div>
                <img
                    className="mb-2 w-full rounded-xl"
                    src={`${frontMatter.image}?w=160`}
                    alt={title}
                />
            </div>
            <div className="blog-sm:px-6">
                <div className="mb-6 text-sm">
                    <div
                        className={clsx(
                            "flex",
                            "justify-between",
                            "sm:flex-row flex-col",
                        )}
                    >
                        <div className="flex justify-center items-center gap-2">
                            <Link
                                to={`/blog/author/${author?.key}`}
                                itemProp="url"
                            >
                                <img
                                    src={author?.imageURL}
                                    alt={author?.name}
                                    loading="lazy"
                                    className="flex h-[32px] w-[32px] rounded-full object-cover"
                                />
                            </Link>
                            <Link
                                to={`/blog/author/${author?.key}`}
                                itemProp="url"
                                className={clsx(
                                    "flex-1",
                                    "text-gray-900 dark:text-gray-200",
                                    "text-sm",
                                    "no-underline",
                                    "hover:no-underline",
                                )}
                            >
                                {author?.name}
                            </Link>
                            <span className="w-[4px] h-[4px] rounded-full bg-gray-600 dark:bg-gray-500"></span>
                            <span className="text-gray-600 dark:text-gray-400">
                                {author?.title}
                            </span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                            <Date date={date} formattedDate={formattedDate} />
                            {typeof readingTime !== "undefined" && (
                                <>
                                    <span className="w-[4px] h-[4px] rounded-full bg-gray-600 dark:bg-gray-500"></span>
                                    <ReadingTime readingTime={readingTime} />
                                </>
                            )}
                        </div>
                    </div>
                    {/* <div className="m-6 mb-12">
                        <BannerRandom />
                    </div> */}
                </div>
                <h1 className="text-xl md:text-4xl" itemProp="headline">
                    {isBlogPostPage ? (
                        title
                    ) : (
                        <Link itemProp="url" to={permalink}>
                            {title}
                        </Link>
                    )}
                </h1>
                <div
                    id={blogPostContainerID}
                    className="markdown"
                    itemProp="articleBody"
                >
                    <MDXContent>{children}</MDXContent>
                </div>
            </div>
        </BlogPostItemContainer>
    );
};