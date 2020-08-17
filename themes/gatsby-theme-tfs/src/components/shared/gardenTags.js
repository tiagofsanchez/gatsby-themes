/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import TagsListing from '../shared/tagsListing'

const TagsContainer = styled.div`
  border-radius: 6px;
  display: grid;
  grid-template-columns: auto;
  grid-gap: 20px;
  padding: 29px 35px;
  height: auto;
`;

const GardenTags = ({ gardenTags }) => {
  console.log(gardenTags);
  return (
    <TagsContainer sx={{ bg: `hover` }}>
      <h4 sx={{ m: `0` }}>Tags</h4>
      <TagsListing  allTagsArray={gardenTags}/> 
    </TagsContainer>
  );
};

export default GardenTags;
