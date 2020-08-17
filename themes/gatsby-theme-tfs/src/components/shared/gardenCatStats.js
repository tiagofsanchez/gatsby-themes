/** @jsx jsx */
import { jsx, Card } from "theme-ui";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { PieChart, Pie, Cell } from "recharts";
import useAcmeBlogConfig from "../../hooks/useAcmeBlogConfig";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 2px;
  padding: 29px 35px;
  border-radius: 6px;
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: auto;
`;

const COLORS = ["#d23669", "#DB5E87", "#E486A5", "#EDAEC3"];
const _ = require("lodash");

const GardenCatStats = ({ gardenCatStats }) => {
  const { blogPath, categoryPath } = useAcmeBlogConfig();
  console.log(gardenCatStats);
  return (
    <GridContainer sx={{ bg: `hover` }}>
      <h4 sx={{ m: `0` }}>Categories</h4>
      <PieChart width={160} height={215} sx={{ margin: `auto` }}>
        <Pie
          data={gardenCatStats}
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={80}
          paddingAngle={4}
          fill="#8884d8"
        >
          {gardenCatStats.map((entry, index) => (
            <Cell
              fill={COLORS[index % COLORS.length]}
              stroke={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
      </PieChart>
      <Flex>
        {gardenCatStats.map((cat, index) => (
          <Link
            to={`${blogPath}${categoryPath}/${_.kebabCase(cat.name)}`}
            sx={{ variant: `links.secondary` }}
          >
            <Card
              sx={{
                variant: `cards.ctg2`,
                margin: `0px 5px`,
                borderColor: `${COLORS[index % COLORS.length]}`,
                color: `${COLORS[index % COLORS.length]}`,
              }}
            >
              <p sx={{ my: `0px`, fontSize: 1 }}>{cat.name}</p>
            </Card>
          </Link>
        ))}
      </Flex>
    </GridContainer>
  );
};

export default GardenCatStats;
