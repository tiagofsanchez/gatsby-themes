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
  slug,
  alternatives,
}) => {
  const blogHeader = {
    title,
    date,
    tags,
    category,
    slug,
    timeToRead,
    thumbnail,
    page: true,
  };

  return (
    <BlogContainer>
      <SEO
        description={excerpt}
        title={title}
        image={thumbnail.childImageSharp.fluid.src}
        article={true}
      />
      <div
        sx={{
          variant: `layout.blogHeader`,
          bg: `hover`,
          padding: `40px`,
          borderRadius: `4px`,
        }}
      >
        <BlogHeaderMax {...blogHeader} />
      </div>
      <div sx={{ variant: `layout.container` }}>
        <MDXRenderer>{body}</MDXRenderer>
      </div>
      <div sx={{ variant: `layout.blogHeader` }}>
        {alternatives.length !== 0 ? (
          <div>
            <hr sx={{width: `50%`}}/>
            <AlternativePosts alternatives={alternatives} category={category} />
          </div>
        ) : null}
      </div>
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
