/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { MDXRenderer } from "gatsby-plugin-mdx";
import PropTypes from "prop-types";
import styled from '@emotion/styled';

import BlogPostHeader from "./blogPostHeader";
import PostTableOfContents from "./postTableOfContents";

const _ = require("lodash");

const PostContainer = styled.div`
display: flex; 
`

const BlogPostPage = ({
  title,
  body,
  date,
  category,
  tags,
  tableOfContentsArray,
  slug,
  thumbnail,
}) => {
  const blogHeader = { title, date, tags, category, page: true };
  return (
    <>
      <section>
        <BlogPostHeader {...blogHeader} />
      </section>
      <PostContainer>
        <div style={{flex: `1 1 80%`}}>
        <MDXRenderer>{body}</MDXRenderer>
        </div>
        <PostTableOfContents
          tableOfContentsArray={tableOfContentsArray}
          slug={slug}
        />
      </PostContainer>
    </>
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
