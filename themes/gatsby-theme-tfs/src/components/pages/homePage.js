/** @jsx jsx */
import { jsx, Button, Input } from "theme-ui";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { useState } from "react";

import SEO from "../shared/seo";
import BlogPostListing from "../shared/blogPostListing";

const SearchContainer = styled.div``;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HomePage = ({ posts }) => {
  const [query, setQuery] = useState("");

  const queryHandler = (e) => {
    const query = e.target.value;
    setQuery(query);
  };

  let showPosts = posts;
  if (query.length > 3) {
    showPosts = posts.filter((post) =>
      post.rawBody.toLowerCase().includes(query.toLowerCase())
    );
  }

  let isPosts = true;
  if (showPosts.length === 0) {
    isPosts = false;
  }

  return (
    <div sx={{ variant: `layout.container` }}>
      <SEO title="Blog" />
      <Flex>
        <h1>Articles</h1>
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
      <p>Articles, thoughts and pretty much everything else.</p>
      <SearchContainer>
        <Input
          placeholder="search for anything here ..."
          sx={{ mb: 5 }}
          onChange={queryHandler}
        />
      </SearchContainer>
      {isPosts ? (
        <BlogPostListing posts={showPosts} />
      ) : (
        <h4>Sorry, couldn't find anything... please try again!</h4>
      )}
    </div>
  );
};

HomePage.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default HomePage;
