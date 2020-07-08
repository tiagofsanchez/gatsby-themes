/** @jsx jsx */
import { jsx } from "theme-ui";
import { MDXRenderer } from "gatsby-plugin-mdx";
import SEO from "../shared/seo";

const OtherPages = ({ body }) => {
  return (
    <div sx={{variant: `layout.container`}}>
      <SEO />
      <MDXRenderer>{body}</MDXRenderer>
    </div>
  );
};

export default OtherPages;
