import React from "react";
import TagsListing from "./tagsListing";
import SEO from "../components/seo";

const AllTagsPage = ({ allTagsArray }) => {
  return (
    <>
      <SEO />
      <h1>Tags</h1>
      <TagsListing allTagsArray={allTagsArray} />
    </>
  );
};

export default AllTagsPage;
