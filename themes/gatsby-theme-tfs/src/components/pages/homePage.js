/** @jsx jsx */
import { jsx, Button, Input } from "theme-ui";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

import SEO from "../shared/seo";
import BlogPostListing from "../shared/blogPostListing";

const SearchContainer = styled.div``;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HomePage = ({ posts }) => {
  console.log(posts);
  return (
    <div sx={{ variant: `layout.container` }}>
      <SEO title="Blog" />
      <Flex>
        <h1 sx={{ mb: `0px` }}>Articles</h1>
        <Link
          to="/dashboard"
          sx={{ variant: `links.secondary` }}
          aria-label="dashboard"
        >
          <Button sx={{ variant: `buttons.secondary` }}>
            dashboard &rarr;
          </Button>
        </Link>
      </Flex>
      <p>Articles, thoughts and pretty much everything else</p>
      <SearchContainer>
        <Input placeholder="search for anything here ..." sx={{ mb: 5 }} />
      </SearchContainer>
      <BlogPostListing posts={posts} />
    </div>
  );
};

HomePage.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default HomePage;
