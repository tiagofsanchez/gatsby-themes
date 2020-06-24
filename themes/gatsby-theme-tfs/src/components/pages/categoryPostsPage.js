/** @jsx jsx */
import { jsx } from "theme-ui";
import BlogPostListing from "../shared/blogPostListing";
import SEO from '../shared/seo'

const CategoryPostsPage = ({ data }) => {
  let postsArray = [];

  data.postsOfCategory.nodes.map((post) => {
    const postObject = {
      title: post.frontmatter.title,
      date: post.frontmatter.date,
      category: post.frontmatter.category,
      tags: post.frontmatter.tags,
      excerpt: post.excerpt,
      slug: post.fields.slug,
    };
    postsArray.push(postObject);
    return postsArray;
  });

  return (
    <div>
      <SEO />
      <h1>
        All posts from{" "}
        <span sx={{ color: `highlight` }}>{data.pageContext.category}</span>{" "}
        category
      </h1>
      <section style={{ margin: `40px auto` }}>
        <BlogPostListing posts={postsArray} />
      </section>
    </div>
  );
};
export default CategoryPostsPage;
