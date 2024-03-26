import React from "react";
import BlogLayout from "@theme/BlogLayout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { PageMetadata } from "@docusaurus/theme-common";
import SearchMetadata from "@theme/SearchMetadata";
import BlogPostItems from "@theme/BlogPostItems";

import { AuthorCardWithProps } from "@site/src/components/blog";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { ChevronLeft } from "../../../components/blog/icons";

const BlogListPageMetadata = () => {
    const {
        siteConfig: { title, tagline },
    } = useDocusaurusContext();
    return (
        <>
            <PageMetadata title={title} description={tagline} />
            <SearchMetadata tag="author_blog_posts_list" />
        </>
    );
};

const AuthorPage = (props) => {
    const { items } = props;

    const author = items[0].content.metadata.authors[0];

    return (
        <>
            <BlogListPageMetadata />
            <BlogLayout showSidebarBanner={false}>
                <div className="h-12" />
                <Link
                    to="/blog"
                    className={clsx(
                        "text-gray-500 dark:text-gray-400",
                        "text-sm no-underline",
                        "flex",
                        "items-center",
                        "gap-2",
                        "px-4",
                    )}
                >
                    <ChevronLeft /> Back to blog
                </Link>
                <AuthorCardWithProps author={author} />
            <div className={clsx("pt-4 blog-md:pt-4", "px-4")}>
                {/* <div className="text-gray-500 dark:text-gray-400">
                    All Posts
                </div> */}
                <h1 className="!mb-0"> Posts </h1>
            </div>
                <div className={clsx("px-4", "blog-md:px-7", "blog-2xl:px-0")}>
                    <BlogPostItems
                        items={items}
                        showTitle={false}
                        isAuthorPage={true}
                    />
                </div>
            </BlogLayout>
        </>
    );
};

export default AuthorPage;
