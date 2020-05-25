import React from "react";

const otherPages = ({ data, pageContext }) => {
  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <pre>{JSON.stringify(pageContext, null, 2)}</pre>
    </>
  );
};

export default otherPages;