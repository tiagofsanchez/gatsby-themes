import React from "react";

const OtherPages = ({ data }) => {
  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};

export default OtherPages; 