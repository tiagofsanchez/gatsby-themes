/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled"

import usePostsForIndexPage from "../hooks/usePostsForIndexPage";
import useAllCategories from "../hooks/useAllCategories";
import useAcmeBlogConfig from "../hooks/useAcmeBlogConfig";

import { BlogHeaderMinimal } from "../components/shared/blogPostHeader";
import CategoryListing from "../components/shared/categoryListing";
import { Hero } from "../components/shared/hero";
import SEO from "../components/shared/seo";

const GridContainer = styled.div`
display: grid; 
grid-gap: 50px;
`

const IndexPage = () => {
  const postsArray = usePostsForIndexPage();
  const categoriesArray = useAllCategories();
  const { categoryPath, blogPath } = useAcmeBlogConfig();

  return (
    <GridContainer>
      <SEO />
      <Hero />
      <section >
        <h1>
          {" "}
          The <span sx={{ color: `highlight` }}>stuff</span> I like to write about
        </h1>
        <CategoryListing
          categoriesArray={categoriesArray}
          categoryPath={categoryPath}
          blogPath={blogPath}
        />
      </section>
      <section>
        <h1>
          {" "}
          Lastest <span sx={{ color: `highlight` }}>posts</span> bellow
        </h1>
        <div>
          {postsArray.map((blogPost) => {
            return <BlogHeaderMinimal  {...blogPost} key={blogPost.title} />;
          })}
        </div>
      </section>
    </GridContainer>
  );
};
export default IndexPage;
