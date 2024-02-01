import React from "react";
import Footer from "@theme-original/Footer";
import Docsly from "@docsly/react";
import "@docsly/react/styles.css";
import { useLocation } from "@docusaurus/router";

export default function FooterWrapper(props) {
  const { pathname } = useLocation();
  return (
    <>
      <Footer {...props} />
      <Docsly
        publicId="public_dwphDZw2KQpC1OzeWVb7WLBO9UnUhvHVvWWh4dcHKR2xxhws7UcVdLVQfQljzQma"
        pathname={pathname}
      />
    </>
  );
}