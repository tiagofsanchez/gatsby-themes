/** @jsx jsx */
import { jsx } from "theme-ui";
import { MDXRenderer } from "gatsby-plugin-mdx";
import PropTypes from "prop-types";
import useAcmeBlogConfig from "../../hooks/useAcmeBlogConfig";

import SEO from "../shared/seo";
import BlogPostHeader from "../shared/blogPostHeader";
import PostTableOfContents from "../shared/postTableOfContents";
import { TinyHero } from '../shared/hero'

const BlogPostPage = ({
  title,
  body,
  excerpt,
  date,
  category,
  tags,
  tableOfContentsArray,
  thumbnail,
  timeToRead,
}) => {
  const blogHeader = { title, date, tags, category, timeToRead, thumbnail , page: true };
  const { postTableOfContents } = useAcmeBlogConfig();
  console.log(thumbnail)
  return (
    <div sx={{ width: `auto`, marginBottom: `100px` }}>
      <SEO description={excerpt} title={title} image={thumbnail} />
      <BlogPostHeader {...blogHeader} />
      <MDXRenderer>{body}</MDXRenderer>
      {postTableOfContents === true &&
      tableOfContentsArray !== null &&
      tableOfContentsArray !== undefined ? (
        <PostTableOfContents tableOfContentsArray={tableOfContentsArray} />
      ) : null}
      <br/>
      <TinyHero />
    </div>
  );
};

BlogPostPage.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  tableOfContentsArray: PropTypes.array.isRequired,
};

export default BlogPostPage;
