import React from "react";

const HomePage = ({ data }) => {
  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};

export default HomePage;
