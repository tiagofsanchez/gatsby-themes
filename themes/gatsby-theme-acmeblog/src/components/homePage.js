/** @jsx jsx */
import React from "react";
import { jsx, Styled, Flex } from "theme-ui";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import useAcmeBlogConfig from '../hooks/useAcmeBlogConfig';
import useSiteMetadata from '../hooks/useSiteMetadata'
import BlogPostListing from "./blogPostListing";

const HomePage = ({ posts }) => {
  const { tagsPath , blogPath } = useAcmeBlogConfig();

  return (
    <>
      <Flex sx={{ alignItems: `baseline`, justifyContent: `space-between` }}>
        <Styled.h1>Our blog</Styled.h1>
        <Styled.h4 sx={{ color: `primary` }} as={Link} to={`${blogPath}${tagsPath}`}>
          All tags
        </Styled.h4>
      </Flex>
      <BlogPostListing posts={posts} />
    </>
  );
};

HomePage.prototype = {
  posts: PropTypes.array.isRequired,
};

export default HomePage;
