import React from "react";
import TagsListing from "../shared/tagsListing";
import SEO from "../shared/seo";

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
