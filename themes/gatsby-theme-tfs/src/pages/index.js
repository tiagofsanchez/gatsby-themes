/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

import usePostsForIndexPage from "../hooks/usePostsForIndexPage";
import useAllCategories from "../hooks/useAllCategories";
import useAcmeBlogConfig from "../hooks/useAcmeBlogConfig";
import useSelectedPostsForIndexPage from "../hooks/useSelectedPostsForIndexPage";

import { BlogHeaderMinimal } from "../components/shared/blogPostHeader";
import CategoryListing from "../components/shared/categoryListing";
import { Hero } from "../components/shared/hero";
import SEO from "../components/shared/seo";
import PostCardList from "../components/shared/postCardList";

const GridContainer = styled.div`
  display: grid;
  grid-gap: 70px;
`;

const IndexPage = () => {
  const postsArray = usePostsForIndexPage();
  const selectedPostsArray = useSelectedPostsForIndexPage();
  const categoriesArray = useAllCategories();
  const { categoryPath, blogPath } = useAcmeBlogConfig();

  return (
    <GridContainer>
      <SEO />
      <section sx={{ variant: `layout.blogHeader` }}>
        <Hero />
      </section>
      {/* <section sx={{ variant: `layout.container` }}>
        <h1>The stuff I like to write about</h1>
        <CategoryListing
          categoriesArray={categoriesArray}
          categoryPath={categoryPath}
          blogPath={blogPath}
        />
      </section> */}
      <section sx={{ variant: `layout.container` }}>
        <h1>Selection of posts</h1>
        <PostCardList selectedPostsArray={selectedPostsArray} />
      </section>
      <section sx={{ variant: `layout.container` }}>
        <h1>Latest posts</h1>
        <div>
          {postsArray.map((blogPost) => {
            return <BlogHeaderMinimal {...blogPost} key={blogPost.title} />;
          })}
        </div>
      </section>
    </GridContainer>
  );
};
export default IndexPage;
