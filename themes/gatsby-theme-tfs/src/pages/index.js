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
import PostCard from "../components/shared/postCard";

const GridContainer = styled.div`
  display: grid;
  grid-gap: 70px;
`;

const MySelectionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 10px;
  justify-content: center;
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
      <section sx={{ variant: `layout.container` }}>
        <h1>The stuff I like to write about</h1>
        <CategoryListing
          categoriesArray={categoriesArray}
          categoryPath={categoryPath}
          blogPath={blogPath}
        />
      </section>
      <section sx={{ variant: `layout.container` }}>
        <h1>My selection</h1>
        <MySelectionContainer>
          {selectedPostsArray.map((post) => {
            const blogPost = {
              title: post.title,
              timeToRead: post.timeToRead,
              slug: post.slug,
              excerpt: post.excerpt,
              img: post.thumbnail.childImageSharp.fluid,
            };
            return <PostCard {...blogPost} key={post.title}/>;
          })}
        </MySelectionContainer>
      </section>
      <section sx={{ variant: `layout.container` }}>
        <h1> My latest posts</h1>
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
