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

const GardenFrequency = ({gardenFrequency}) => {
  
  return ( 
    <FrequencyContainer sx={{ bg: `hover` }}>
      <h4 sx={{ m: `0` }}>Gardening frequency (2020)</h4>
      <ResponsiveContainer width="99%" height="100%">
        <BarChart
          data={gardenFrequency}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <Tooltip />
          <Bar dataKey="pv" fill="#DB5E87" />
        </BarChart>
      </ResponsiveContainer>
    </FrequencyContainer>
  );
};

export default GardenFrequency;
