import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import SEO from "../shared/seo";

const OtherPages = ({ body }) => {
  return (
    <>
      <SEO />
      <MDXRenderer>{body}</MDXRenderer>
    </>
  );
};

export default OtherPages;
