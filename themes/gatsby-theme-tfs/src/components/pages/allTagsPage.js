/** @jsx jsx */
import { jsx } from "theme-ui";
import TagsListing from "../shared/tagsListing";
import SEO from "../shared/seo";

const AllTagsPage = ({ allTagsArray }) => {
  return (
    <div sx={{variant:`layout.container`}}>
      <SEO title="All tags"/>
      <h1>Tags</h1>
      <TagsListing allTagsArray={allTagsArray} />
    </div>
  );
};

export default AllTagsPage;
