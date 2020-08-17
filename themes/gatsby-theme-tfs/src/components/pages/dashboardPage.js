/** @jsx jsx */
import { jsx, Button } from "theme-ui";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import useAcmeBlogConfig from "../../hooks/useAcmeBlogConfig";

import GardenOverallStats from "../shared/gardenOveralStats";
import GardenCatStats from "../shared/gardenCatStats";
import GardenFrequency from "../shared/gardenFrequency";
import GardenTags from "../shared/gardenTags";
import { BlogHeaderMinimal } from "../shared/blogPostHeader";
import usePostsForIndexPage from "../../hooks/usePostsForIndexPage";

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
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
  console.log(data);

  const postsArray = usePostsForIndexPage();
  return (
    <section sx={{ variant: `layout.container` }}>
      <Flex>
        <h1>Dashboard</h1>
        <Link to={blogPath} sx={{ variant: `links.secondary` }}>
          <Button sx={{ variant: `buttons.secondary` }}>{blogPath.substr(1)}</Button>
        </Link>
      </Flex>
      <DashboardContainer>
        <GridStats>
          <GardenOverallStats />
          <GardenCatStats />
        </GridStats>
        <GardenFrequency />
        <GardenTags />
      </DashboardContainer>
      <section>
        <h1> My latest posts</h1>
        <div>
          {postsArray.map((blogPost) => {
            return <BlogHeaderMinimal {...blogPost} key={blogPost.title} />;
          })}
        </div>
      </section>
    </section>
  );
};

export default DashboardPage;
