/** @jsx jsx */
import { jsx } from "theme-ui";
import { MDXRenderer } from "gatsby-plugin-mdx";
import PropTypes from "prop-types";
import useAcmeBlogConfig from "../../hooks/useAcmeBlogConfig";

import SEO from "../shared/seo";
import BlogPostHeader from "../shared/blogPostHeader";
import PostTableOfContents from "../shared/postTableOfContents";

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
  const blogHeader = { title, date, tags, category, timeToRead, page: true };
  const { postTableOfContents } = useAcmeBlogConfig();
  // console.log(thumbnail)
  // console.log(timeToRead)
  return (
    <div sx={{ width: `auto` }}>
      <SEO description={excerpt} title={title} image={thumbnail} />
      <BlogPostHeader {...blogHeader} />

      <MDXRenderer>{body}</MDXRenderer>

      {postTableOfContents === true &&
      tableOfContentsArray !== null &&
      tableOfContentsArray !== undefined ? (
        <PostTableOfContents tableOfContentsArray={tableOfContentsArray} />
      ) : null}
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
  slug: PropTypes.string.isRequired,
};

export default BlogPostPage;
