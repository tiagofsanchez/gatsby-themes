import React from "react";

const AllTagsPage = ({ data }) => {
  return (
    <>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </>
  );
};

export default AllTagsPage;
