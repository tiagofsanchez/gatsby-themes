import React from "react";
import OtherPages from "../../components/otherPages";

const MinBlogPost = ({ data }) => {
  const page = {
    body: data.page.body,
  };
  return <OtherPages {...page} />;
};

export default MinBlogPost;
