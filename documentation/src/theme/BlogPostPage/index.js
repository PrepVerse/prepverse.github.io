import React from "react";
import clsx from "clsx";
import { HtmlClassNameProvider, ThemeClassNames } from "@docusaurus/theme-common";
import { BlogPostProvider, useBlogPost } from "@docusaurus/theme-common/internal";
import BlogLayout from "@theme/BlogLayout";
import BlogPostPageMetadata from "@theme/BlogPostPage/Metadata";
import { BlogTOC } from "../../prepverse-theme/blog-toc";
import { BlogPostPageView, PostPaginator } from "../../components/blog";
import Comment from '@site/src/components/blog-comment'

function BlogPostPageContent({ children }) {
    const { metadata, toc } = useBlogPost();
    const { relatedPosts } = metadata;

    return (
        <BlogLayout toc={<BlogTOC toc={toc} />}>
            <BlogPostPageView>{children}</BlogPostPageView>
            <PostPaginator title="Related Articles" posts={relatedPosts} />
            <Comment />
        </BlogLayout>
    );
}

export default function BlogPostPage(props) {
    const BlogPostContent = props.content;
    return (
        <BlogPostProvider content={props.content} isBlogPostPage>
            <HtmlClassNameProvider
                className={clsx(
                    ThemeClassNames.wrapper.blogPages,
                    ThemeClassNames.page.blogPostPage,
                )}
            >
                <BlogPostPageMetadata />
                <BlogPostPageContent>
                    <BlogPostContent />
                </BlogPostPageContent>
            </HtmlClassNameProvider>
        </BlogPostProvider>
    );
}
