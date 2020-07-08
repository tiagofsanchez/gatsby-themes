/** @jsx jsx */
import { jsx } from "theme-ui";
import { MDXRenderer } from "gatsby-plugin-mdx";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import SEO from "../shared/seo";
import { BlogHeaderMax } from "../shared/blogPostHeader";
import AlternativePosts from "../shared/alternativePosts";

const BlogContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 50px;
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
  prevPostSlug,
  nextPostSlug,
  alternatives,
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

  console.log(alternatives);

  return (
    <BlogContainer>
      <SEO
        description={excerpt}
        title={title}
        image={thumbnail.childImageSharp.fluid.src}
        article={true}
      />
      <div sx={{ variant: `layout.blogHeader` }}>
        <BlogHeaderMax {...blogHeader} />
      </div>
      <div sx={{ variant: `layout.container` }}>
        <MDXRenderer>{body}</MDXRenderer>
      </div>
      {alternatives.length !== 0 ? (
        <AlternativePosts alternatives={alternatives} />
      ) : null}
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
