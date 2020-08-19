/** @jsx jsx */
import { jsx, Radio, Label } from "theme-ui";
import { useState } from "react";
import styled from "@emotion/styled";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import moment from "moment";

const FrequencyContainer = styled.div`
  border-radius: 6px;
  display: grid;
  grid-template-columns: auto;
  padding: 29px 35px;
  height: 360px;
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(2, auto);
  align-items: center;
`;

const GardenFrequency = ({ gardenPosts }) => {
  const [year, setYear] = useState(2020);

  const changeYearBefore = () => setYear(2019);
  const changeYearCurrent = () => setYear(2020);

  let gardenFrequency = [
    { name: moment(`${year}01`, "YYYYMM").format("MMM[/]YY"), pv: 0 },
    { name: moment(`${year}02`, "YYYYMM").format("MMM[/]YY"), pv: 0 },
    { name: moment(`${year}03`, "YYYYMM").format("MMM[/]YY"), pv: 0 },
    { name: moment(`${year}04`, "YYYYMM").format("MMM[/]YY"), pv: 0 },
    { name: moment(`${year}05`, "YYYYMM").format("MMM[/]YY"), pv: 0 },
    { name: moment(`${year}06`, "YYYYMM").format("MMM[/]YY"), pv: 0 },
    { name: moment(`${year}07`, "YYYYMM").format("MMM[/]YY"), pv: 0 },
    { name: moment(`${year}08`, "YYYYMM").format("MMM[/]YY"), pv: 0 },
    { name: moment(`${year}09`, "YYYYMM").format("MMM[/]YY"), pv: 0 },
    { name: moment(`${year}10`, "YYYYMM").format("MMM[/]YY"), pv: 0 },
    { name: moment(`${year}11`, "YYYYMM").format("MMM[/]YY"), pv: 0 },
    { name: moment(`${year}12`, "YYYYMM").format("MMM[/]YY"), pv: 0 },
  ];

  gardenFrequency.map((item, index) => {
    return gardenPosts.map((date) => {
      if (date === item.name) {
        gardenFrequency[index].pv = gardenFrequency[index].pv + 1;
      }
      return gardenFrequency;
    });
  });

  return (
    <FrequencyContainer sx={{ bg: `hover` }}>
      <Flex>
        <h4 sx={{ m: `0` }}>Gardening frequency</h4>
        <Grid>
          <Label>
            <Radio name="dark-mode" value="true" onClick={changeYearBefore} />
            2019
          </Label>
          <Label>
            <Radio
              name="dark-mode"
              value="false"
              onClick={changeYearCurrent}
              defaultChecked={true}
            />
            2020
          </Label>
        </Grid>
      </Flex>
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
