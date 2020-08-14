import React from "react";

const DashboardPage = ({ data }) => {
  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};

export default DashboardPage;
