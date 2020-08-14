/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 2px;
  padding: 29px 35px;
`;

const TotalPosts = styled.h1`
  font-size: 150px;
  margin: 0;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-items: center;
`;

const GardenOverallStats = () => (
  <GridContainer sx={{ bg: `hover` }}>
    <h4 sx={{ m: `0` }}>Garden stats</h4>
    <TotalPosts>99</TotalPosts>
    <div>
      <hr sx={{ borderColor: `primary` }} />
    </div>
    <Grid>
      <h5>4500 words</h5>
      <h5>500 min read</h5>
    </Grid>
  </GridContainer>
);

export default GardenOverallStats;
