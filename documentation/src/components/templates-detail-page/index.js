import React from "react";
import Head from "@docusaurus/Head";
import { TemplatesDetail } from "../../prepverse-theme/template-detail";

const TemplatesDetailPage = (props) => {
    const { content } = props;

    return (
        <>
            <Head title={`${content.title} CodeVerse | PrepVerse`}>
                <html data-page="templates_prepverse" />
                <title>{content.title}</title>
                <meta property="og:title" content={content.title} />
                <meta
                    name="description"
                    content={`${content.title} CodeVerse | PrepVerse`}
                />
                <meta
                    property="og:description"
                    content={`${content.description} CodeVerse | PrepVerse`}
                />
                <meta
                    data-rh="true"
                    property="og:image"
                    content={content.images[0]}
                />
                <meta
                    data-rh="true"
                    name="twitter:image"
                    content={content.images[0]}
                />
            </Head>
            <TemplatesDetail data={content} />
        </>
    );
};

export default TemplatesDetailPage;
