/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

import GardenOverallStats from '../shared/gardenOveralStats'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  grid-template-rows: 360px;
  grid-gap: 10px;
  @media (max-width: 740px) {
    grid-template-columns: auto;
    grid-template-rows: repeat(2, 360px);
  }
`;

const DashboardPage = ({ data }) => {
  console.log(data);
  return (
    <section sx={{variant: `layout.container`}}>
      <h1>Dashboard</h1>
      <Grid>
        <GardenOverallStats />
        <div sx={{bg: `hover`}}></div>
      </Grid>
    </section>
  );
};

export default DashboardPage;
