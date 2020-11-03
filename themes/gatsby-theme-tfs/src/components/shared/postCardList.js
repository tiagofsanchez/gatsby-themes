/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

import PostCard from "./postCard";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 10px;
  justify-content: center;
`;

const PostCardList = ({ selectedPostsArray }) => {
  return (
    <Container>
      {selectedPostsArray.map((post) => {
        const blogPost = {
          title: post.title,
          timeToRead: post.timeToRead,
          slug: post.slug,
          excerpt: post.excerpt,
          img: post.thumbnail.childImageSharp.fluid,
        };
        return <PostCard {...blogPost} key={post.title} />;
      })}
    </Container>
  );
};

PostCardList.propTypes = {
  selectedPostsArray: PropTypes.array.isRequired,
};

export default PostCardList;
