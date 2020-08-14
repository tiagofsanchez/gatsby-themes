/** @jsx jsx */
import { jsx } from "theme-ui";
import { PieChart, Pie, Cell } from "recharts";
import styled from "@emotion/styled";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 2px;
  padding: 29px 35px;
  border-radius: 6px; 
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-items: center;
`;

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const COLORS = ["#d23669", "#DB5E87", "#E486A5", "#EDAEC3"];

const GardenCatStats = () => (
  <GridContainer sx={{ bg: `hover` }}>
    <h4 sx={{ m: `0` }}>Categories</h4>
    <PieChart width={160} height={215} sx={{margin: `auto`}}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={50}
        outerRadius={80}
        paddingAngle={4}
        fill="#8884d8"
      >
        {data.map((entry, index) => (
          <Cell
            fill={COLORS[index % COLORS.length]}
            stroke={COLORS[index % COLORS.length]}
          />
        ))}
      </Pie>
    </PieChart>
    <Grid>
      <h5>4500 words</h5>
      <h5>500 min read</h5>
    </Grid>
  </GridContainer>
);

export default GardenCatStats;
