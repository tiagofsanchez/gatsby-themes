/** @jsx jsx */
import { jsx } from "theme-ui";

import usePostsForIndexPage from "../hooks/usePostsForIndexPage";
import useAllCategories from "../hooks/useAllCategories";
import useAcmeBlogConfig from "../hooks/useAcmeBlogConfig";

import BlogPostHeader from "../components/shared/blogPostHeader";
import CategoryListing from "../components/shared/categoryListing";
import { Hero } from "../components/shared/hero";
import SEO from "../components/shared/seo";

const IndexPage = () => {
  const postsArray = usePostsForIndexPage();
  const categoriesArray = useAllCategories();
  const { categoryPath, blogPath } = useAcmeBlogConfig();

  return (
    <div>
      <SEO />
      <Hero />
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
