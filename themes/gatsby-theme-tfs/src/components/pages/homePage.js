/** @jsx jsx */
import { jsx, Input } from "theme-ui";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { useState } from "react";
import { FaMicroblog } from "react-icons/fa";

import SEO from "../shared/seo";
import BlogPostListing from "../shared/blogPostListing";
import PageToggle from "../shared/pageToggle";

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
        <FaMicroblog size={50} />
        <PageToggle link="dashboard" />
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
