/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 2px;
  padding: 29px 35px;
  border-radius: 6px;
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

const GardenOverallStats = ({ gardenOverallStats }) => {
  const { totalPosts, totalMinRead, totalNumWords } = gardenOverallStats;

  return (
    <GridContainer sx={{ bg: `hover` }}>
      <h4 sx={{ m: `0` }}>Garden stats</h4>
      <TotalPosts>{totalPosts}</TotalPosts>
      <div>
        <hr sx={{ borderColor: `primary`, width: `160px` }} />
      </div>
      <Grid>
        <h5>{totalNumWords}</h5>
        <h5>{totalMinRead}</h5>
      </Grid>
    </GridContainer>
  );
};

export default GardenOverallStats;
