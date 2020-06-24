import React from "react";
import OtherPages from "../../components/pages/otherPages";

const MinBlogPost = ({ data }) => {
  const page = {
    body: data.page.body,
  };
  return <OtherPages {...page} />;
};

export default MinBlogPost;
