/** @jsx jsx */
import { jsx } from "theme-ui";
import { MDXRenderer } from "gatsby-plugin-mdx";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import SEO from "../shared/seo";
import { BlogHeaderMax } from "../shared/blogPostHeader";
import { TinyHero } from "../shared/hero";

const BlogContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap:50px;
`;

const BlogPostPage = ({
  title,
  body,
  excerpt,
  date,
  category,
  tags,
  thumbnail,
  timeToRead,
}) => {
  const blogHeader = {
    title,
    date,
    tags,
    category,
    timeToRead,
    thumbnail,
    page: true,
  };

  return (
    <BlogContainer>
      <SEO description={excerpt} title={title} image={thumbnail} />
      <BlogHeaderMax {...blogHeader} />
      <div>
        <MDXRenderer>{body}</MDXRenderer>
      </div>
      <TinyHero />
    </BlogContainer>
  );
};

BlogPostPage.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
};

export default BlogPostPage;
