import React from "react";
import Layout from "@theme/Layout";
import { TutorialPageLayout as RefineTutorialPageLayout } from "@site/src/prepverse-theme/tutorial-page-layout";

export default function TutorialPageLayout({ children }) {
    return (
        <Layout>
            <RefineTutorialPageLayout>{children}</RefineTutorialPageLayout>
        </Layout>
    );
}
