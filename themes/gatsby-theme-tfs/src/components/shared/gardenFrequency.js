/** @jsx jsx */
import { jsx, Radio, Label, useThemeUI } from "theme-ui";
import { useState } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Text,
} from "recharts";
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

const currentYear = moment().year();

const GardenFrequency = ({ gardenPosts }) => {
  const [year, setYear] = useState(currentYear);
  const { theme } = useThemeUI();

  let yearArray = [];
  for (let i = 2019; i <= currentYear; i++) {
    yearArray.push(i);
  }

  const changeYear = (e) => setYear(e.target.value);

  let gardenFrequency = [
    { name: moment(`${year}01`, "YYYYMM").format("MMM[/]YY"), posts: 0 },
    { name: moment(`${year}02`, "YYYYMM").format("MMM[/]YY"), posts: 0 },
    { name: moment(`${year}03`, "YYYYMM").format("MMM[/]YY"), posts: 0 },
    { name: moment(`${year}04`, "YYYYMM").format("MMM[/]YY"), posts: 0 },
    { name: moment(`${year}05`, "YYYYMM").format("MMM[/]YY"), posts: 0 },
    { name: moment(`${year}06`, "YYYYMM").format("MMM[/]YY"), posts: 0 },
    { name: moment(`${year}07`, "YYYYMM").format("MMM[/]YY"), posts: 0 },
    { name: moment(`${year}08`, "YYYYMM").format("MMM[/]YY"), posts: 0 },
    { name: moment(`${year}09`, "YYYYMM").format("MMM[/]YY"), posts: 0 },
    { name: moment(`${year}10`, "YYYYMM").format("MMM[/]YY"), posts: 0 },
    { name: moment(`${year}11`, "YYYYMM").format("MMM[/]YY"), posts: 0 },
    { name: moment(`${year}12`, "YYYYMM").format("MMM[/]YY"), posts: 0 },
  ];

  gardenFrequency.map((item, index) => {
    return gardenPosts.map((date) => {
      if (date === item.name) {
        gardenFrequency[index].posts = gardenFrequency[index].posts + 1;
      }
      return gardenFrequency;
    });
  });

  return (
    <FrequencyContainer sx={{ bg: `hover` }}>
      <Flex>
        <h4 sx={{ m: `0` }}>Gardening frequency</h4>
        <Grid>
          {yearArray.map((y) => (
            <Label>
              <Radio
                name="year-toogle"
                value={y}
                onClick={changeYear}
                defaultChecked={y === currentYear ? true : false}
              />
              {y}
            </Label>
          ))}
        </Grid>
      </Flex>
      <ResponsiveContainer width="99%" height="100%">
        <BarChart
          data={gardenFrequency}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis
            dataKey="name"
            tickLine={false}
            tick={{ fontSize: 12 }}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <Text dataKey="name" />
          <Tooltip
            contentStyle={{
              borderRadius: "4px",
              backgroundColor: theme.colors.background,
            }}
          />
          <Bar dataKey="posts" fill="#DB5E87" />
        </BarChart>
      </ResponsiveContainer>
    </FrequencyContainer>
  );
};

GardenFrequency.protoTypes = {
  gardenPosts: PropTypes.array.isRequired,
};

export default GardenFrequency;
