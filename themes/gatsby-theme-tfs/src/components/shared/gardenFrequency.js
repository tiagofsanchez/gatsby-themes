/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const FrequencyContainer = styled.div`
  border-radius: 6px;
  display: grid;
  grid-template-columns: auto;
  padding: 29px 35px;
  height: 360px;
`;

const data = [
  { name: "Jan", pv: 2400 },
  { name: "Feb", pv: 2400 },
  { name: "Mar", pv: 2400 },
  { name: "April", pv: 2400 },
  { name: "May", pv: 2400 },
  { name: "Jun", pv: 2400 },
  { name: "July", pv: 2400 },
  { name: "Aug", pv: 2400 },
  { name: "Sept", pv: 2400 },
  { name: "Oct", pv: 3000 },
  { name: "Nov", pv: 2400 },
  { name: "Dec", pv: 2400 },
];

const GardenFrequency = () => (
  <FrequencyContainer sx={{ bg: `hover` }}>
    <h4 sx={{ m: `0` }}>Gardening frequency</h4>
    <ResponsiveContainer width="99%" height="100%">
      <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="name" />
        <Tooltip />
        <Bar dataKey="pv" fill="#DB5E87" />
      </BarChart>
    </ResponsiveContainer>
  </FrequencyContainer>
);

export default GardenFrequency;
