/** @jsx jsx */
import { jsx, Button } from "theme-ui";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import useAcmeBlogConfig from "../../hooks/useAcmeBlogConfig";

import GardenOverallStats from "../shared/gardenOveralStats";
import GardenCatStats from "../shared/gardenCatStats";
import GardenFrequency from "../shared/gardenFrequency";
import GardenTags from "../shared/gardenTags";

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;

const DashboardContainer = styled.div`
  display: grid;
  grid-gap: 10px;
`;

const GridStats = styled.div`
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
  const { blogPath } = useAcmeBlogConfig();
  const { gardenOverallStats, gardenCatStats, gardenPosts, gardenTags } = data;

  return (
    <section sx={{ variant: `layout.container` }}>
      <Flex>
        <h1>Dashboard</h1>
        <Link
          to={blogPath}
          sx={{ variant: `links.secondary` }}
          aria-label={blogPath}
        >
          <Button sx={{ variant: `buttons.secondary` }}>
            {blogPath.substr(1)} &rarr;
          </Button>
        </Link>
      </Flex>
      <DashboardContainer>
        <GridStats>
          <GardenOverallStats gardenOverallStats={gardenOverallStats} />
          <GardenCatStats gardenCatStats={gardenCatStats} />
        </GridStats>
        <GardenFrequency gardenPosts={gardenPosts} />
        <GardenTags gardenTags={gardenTags} />
      </DashboardContainer>
    </section>
  );
};

DashboardPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DashboardPage;
