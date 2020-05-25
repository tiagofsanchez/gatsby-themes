import React from "react";
import TagPostsPage from "../../components/tagPostsPage";

const MinBlogPost = ({ data , pageContext }) => {
  return <TagPostsPage data={{...data, pageContext}} />;
};
export default MinBlogPost;
