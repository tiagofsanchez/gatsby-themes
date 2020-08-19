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

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.2;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const GardenCatStats = ({ gardenCatStats }) => {
  const { blogPath, categoryPath } = useAcmeBlogConfig();
  return (
    <GridContainer sx={{ bg: `hover` }}>
      <h4 sx={{ m: `0` }}>Categories</h4>
      <PieChart width={190} height={215} sx={{ margin: `auto` }}>
        <Pie
          data={gardenCatStats}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={90}
          paddingAngle={4}
          fill="#8884d8"
          label={renderCustomizedLabel}
          labelLine={false}
          animationDuration="1000"
        >
          {gardenCatStats.map((entry, index) => (
            <Cell
              key={index}
              fill={COLORS[index % COLORS.length]}
              stroke={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
      </PieChart>
      <Flex>
        {gardenCatStats.map((cat, index) => (
          <Link
            key={cat.name}
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
