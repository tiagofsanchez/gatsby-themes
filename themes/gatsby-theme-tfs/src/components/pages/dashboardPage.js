/** @jsx jsx */
import { jsx, Button } from "theme-ui";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { RiDashboard2Fill } from "react-icons/ri";

import useAcmeBlogConfig from "../../hooks/useAcmeBlogConfig";
import GardenOverallStats from "../shared/gardenOveralStats";
import GardenCatStatsV from "../shared/gardenCatStatsV";
import GardenFrequencyV from "../shared/gardenFrequencyV";
// import GardenFrequency from "../shared/gardenFrequency";
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
  margin-top: 20px;
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
  const { blogPath, categoryPath, tagsPath } = useAcmeBlogConfig();
  const { gardenOverallStats, gardenCatStats, gardenPosts, gardenTags } = data;

  return (
    <section sx={{ variant: `layout.container` }}>
      <Flex>
        <RiDashboard2Fill size={50} />
        <Link
          to={blogPath}
          sx={{ variant: `links.secondary` }}
          aria-label={blogPath}
        >
          <Button
            sx={{
              variant: `buttons.secondary`,
              display: `grid`,
              gridTemplateColumns: `repeat(2, auto)`,
              gridGap: `5px`,
            }}
          >
            {blogPath.substr(1)} <FaArrowAltCircleRight />
          </Button>
        </Link>
      </Flex>
      <DashboardContainer>
        <GridStats>
          <GardenOverallStats gardenOverallStats={gardenOverallStats} />
          <GardenCatStatsV
            gardenCatStats={gardenCatStats}
            blogPath={blogPath}
            categoryPath={categoryPath}
          />
        </GridStats>
        <GardenFrequencyV gardenPosts={gardenPosts} />
        {/* <GardenFrequency gardenPosts={gardenPosts} /> */}
        <GardenTags
          gardenTags={gardenTags}
          blogPath={blogPath}
          tagsPath={tagsPath}
        />
      </DashboardContainer>
    </section>
  );
};

DashboardPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DashboardPage;
