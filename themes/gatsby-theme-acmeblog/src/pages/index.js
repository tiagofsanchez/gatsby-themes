/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

import usePostsForIndexPage from "../hooks/usePostsForIndexPage";
import useAllCategories from "../hooks/useAllCategories";
import useAcmeBlogConfig from "../hooks/useAcmeBlogConfig";

import Logo from "../components/acmeLogo";
import BlogPostHeader from "../components/blogPostHeader";
import CategoryListing from "../components/categoryListing";

const FlexContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const ImgContainer = styled.div`
  flex: 0 1 350px;
  margin-left: 30px;
  flex-wrap: wrap;
`;

const IndexPage = () => {
  const postsArray = usePostsForIndexPage();
  const categoriesArray = useAllCategories();
  const { categoryPath , blogPath } = useAcmeBlogConfig();
  return (
    <div>
      <FlexContainer>
        <div style={{ flex: `1 1 50%` }}>
          <h1>
            <span sx={{ color: `highlight` }}>Hello!</span> We are ACME!
          </h1>
          <h2>Yes, we could be a barista :)</h2>
          <h3>
            We create content for the web - you know, that thing that lives on
            the cloud? Just kidding! This is a gatsby theme that you can use for
            share your cool work
          </h3>
          <h3>Hope you enjoy!</h3>
        </div>
        <ImgContainer>
          <Logo />
        </ImgContainer>
      </FlexContainer>
      <section style={{ marginTop: `80px` }}>
        <h1>
          {" "}
          The <span sx={{ color: `highlight` }}>topics</span> you write or like
        </h1>
        <CategoryListing
          categoriesArray={categoriesArray}
          categoryPath={categoryPath}
          blogPath={blogPath}
        />
      </section>
      <section style={{ marginTop: `80px`, marginBottom: `100px` }}>
        <h1>
          {" "}
          Lastest <span sx={{ color: `highlight` }}>posts</span> bellow
        </h1>
        <div>
          {postsArray.map((blogPost) => {
            return <BlogPostHeader {...blogPost} key={blogPost.title} />;
          })}
        </div>
      </section>
    </div>
  );
};
export default IndexPage;
