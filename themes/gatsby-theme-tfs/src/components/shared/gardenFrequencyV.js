/** @jsx jsx */
import { jsx, Radio, Label, useThemeUI } from "theme-ui";
import { useState } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { VictoryBar, VictoryLabel, VictoryChart, VictoryAxis } from "victory";
import moment from "moment";

const FrequencyContainer = styled.div`
  border-radius: 6px;
  padding: 29px 35px;
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

const GardenFrequencyV = ({ gardenPosts }) => {
  const [year, setYear] = useState(currentYear);
  const { theme } = useThemeUI();
  console.log(`render: frequency`);

  //   So that the dashboard presents all years since the 2019 onwards
  let yearArray = [];
  for (let i = 2019; i <= currentYear; i++) {
    yearArray.push(i);
  }

  const changeYear = (e) => setYear(e.target.value);

  let gardenFrequency = [
    { name: moment(`${year}01`, "YYYYMM").format("MMM[/]YY"), posts: 10 },
    { name: moment(`${year}02`, "YYYYMM").format("MMM[/]YY"), posts: 6 },
    { name: moment(`${year}03`, "YYYYMM").format("MMM[/]YY"), posts: 0 },
    { name: moment(`${year}04`, "YYYYMM").format("MMM[/]YY"), posts: 0 },
    { name: moment(`${year}05`, "YYYYMM").format("MMM[/]YY"), posts: 0 },
    { name: moment(`${year}06`, "YYYYMM").format("MMM[/]YY"), posts: 0 },
    { name: moment(`${year}07`, "YYYYMM").format("MMM[/]YY"), posts: 0 },
    { name: moment(`${year}08`, "YYYYMM").format("MMM[/]YY"), posts: 10 },
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

  console.log(gardenFrequency);

  return (
    <FrequencyContainer sx={{ bg: `hover` }}>
      <Flex>
        <h4 sx={{ m: `0` }}>Gardening frequency</h4>
        <Grid>
          {yearArray.map((y) => (
            <Label key={y}>
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
      <VictoryChart>
        <VictoryBar
          data={gardenFrequency}
          barRatio={1.2}
          x="name"
          y="posts"
          style={{
            data: {
              fill: "rgb(219, 94, 135)",
            },
            labels: {
              fill: theme.colors.primary,
            },
          }}
          // labels={({ datum }) => `${datum.name.slice(0, 3)}`}
          // labelComponent={<VictoryLabel dy={220} />}
        />
        <VictoryAxis
          tickFormat={gardenFrequency}
          tickFormat={(t) => `${t.slice(0, 3)}`}
          style={{
            tickLabels: {
              fill: theme.colors.primary,
              fontSize: 12,
              opacity: 0.5,
            },
            axis: { stroke: theme.colors.primary, opacity: 0.5 },
          }}
        />
      </VictoryChart>
    </FrequencyContainer>
  );
};

GardenFrequencyV.protoTypes = {
  gardenPosts: PropTypes.array.isRequired,
};

export default GardenFrequencyV;
