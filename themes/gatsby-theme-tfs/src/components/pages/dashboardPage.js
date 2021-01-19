/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { RiDashboard2Fill } from "react-icons/ri";

import useAcmeBlogConfig from "../../hooks/useAcmeBlogConfig";
import GardenOverallStats from "../shared/gardenOveralStats";
import GardenCatStatsV from "../shared/gardenCatStatsV";
import GardenFrequencyV from "../shared/gardenFrequencyV";
import GardenTags from "../shared/gardenTags";
import PageToggle from "../shared/pageToggle";

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
  const {
    blogPath,
    categoryPath,
    tagsPath,
    gardenStartYear,
  } = useAcmeBlogConfig();
  const { gardenOverallStats, gardenCatStats, gardenPosts, gardenTags } = data;
  return (
    <section sx={{ variant: `layout.container` }}>
      <Flex>
        <RiDashboard2Fill size={50} />
        <PageToggle link={blogPath.substr(1)} />
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
        <GardenFrequencyV
          gardenPosts={gardenPosts}
          gardenStartYear={gardenStartYear}
        />
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
