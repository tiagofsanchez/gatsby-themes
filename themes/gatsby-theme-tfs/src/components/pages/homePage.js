/** @jsx jsx */
import { jsx, Button } from "theme-ui";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

import SEO from "../shared/seo";
import BlogPostListing from "../shared/blogPostListing";

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const HomePage = ({ posts }) => {
  return (
    <div sx={{ variant: `layout.container` }}>
      <SEO title="Blog" />
      <Flex>
        <h1>Articles</h1>
        <Link to="/dashboard" sx={{ variant: `links.secondary` }}>
          <Button sx={{ variant: `buttons.secondary` }}>Dashboard</Button>
        </Link>
      </Flex>
      <BlogPostListing posts={posts} />
    </div>
  );
};

HomePage.prototype = {
  posts: PropTypes.array.isRequired,
};

export default HomePage;
