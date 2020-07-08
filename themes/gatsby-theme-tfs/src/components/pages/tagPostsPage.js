/** @jsx jsx */
import { jsx } from "theme-ui";
import BlogPostListing from "../shared/blogPostListing";
import SEO from '../shared/seo';

const TagPostsPage = ({ data }) => {
  let postsArray = [];

  data.postsOfTag.nodes.map((post) => {
    const postObject = {
      title: post.frontmatter.title,
      date: post.frontmatter.date,
      category: post.frontmatter.category,
      tags: post.frontmatter.tags,
      excerpt: post.excerpt,
      slug: post.fields.slug,
      timeToRead: post.timeToRead,
      thumbnail: post.frontmatter.thumbnail,
    };
    postsArray.push(postObject);
    return postsArray;
  });

  return (
    <div sx={{variant: `layout.container`}}>
       <SEO title={`Tag: ${data.pageContext.tag}`}/>
      <h1>
        All posts tagged with{" "}
        <span sx={{ color: `highlight` }}>{data.pageContext.tag}</span> tag
      </h1>
      <section style={{ margin: `40px auto` }}>
        <BlogPostListing posts={postsArray} />
      </section>
    </div>
  );
};

export default TagPostsPage;
