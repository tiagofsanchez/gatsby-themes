import React from "react";

const CategoryPostsPage = ({ data, pageContext }) => {
  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <pre>{JSON.stringify(pageContext, null, 2)}</pre>
    </>
  );
};

export default CategoryPostsPage;
