/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

const TagsContainer = styled.div`
  border-radius: 6px;
  display: grid;
  grid-template-columns: auto;  
  padding: 29px 35px;
  height: 360px;
`;

const GardenTags = () => (
  <TagsContainer sx={{ bg: `hover` }}>
    <h4 sx={{ m: `0` }}>Tags</h4>

  </TagsContainer>
);

export default GardenTags;
