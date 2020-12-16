/** @jsx jsx */
import { jsx, Card } from "theme-ui";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { VictoryPie } from "victory";

const Container = styled.div`
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

const gardenCatStatsV = ({ gardenCatStats, blogPath, categoryPath }) => {
  return (
    <Container sx={{ bg: `hover` }}>
      <h4 sx={{ m: `0` }}>Categories</h4>
      <div sx={{ height: `240px`, width: `auto` }}>
        <VictoryPie
          colorScale={COLORS}
          data={gardenCatStats}
          labels={({ datum }) => `${datum.y}%`}
          labelRadius={50}
          style={{
            labels: {
              fontSize: 32,
              fill: "white",
            },
          }}
        />
      </div>
      <Flex>
        {gardenCatStats.map((cat, index) => (
          <Link
            key={cat.x}
            to={`${blogPath}${categoryPath}/${_.kebabCase(cat.x)}`}
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
              <p sx={{ my: `0px`, fontSize: 1 }}>{cat.x}</p>
            </Card>
          </Link>
        ))}
      </Flex>
    </Container>
  );
};

export default gardenCatStatsV;
