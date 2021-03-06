/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

import BlogPostListing from "../shared/blogPostListing";
import SEO from "../shared/seo";
import useAcmeBlogConfig from "../../hooks/useAcmeBlogConfig";
import PageToggle from "../shared/pageToggle";

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;

const CategoryPostsPage = ({ data }) => {
  const { blogPath } = useAcmeBlogConfig();

  let postsArray = [];

  data.postsOfCategory.nodes.map((post) => {
    const postObject = {
      title: post.frontmatter.title,
      date: post.frontmatter.date,
      category: post.frontmatter.category,
      tags: post.frontmatter.tags,
      excerpt: post.excerpt,
      slug: post.fields.slug,
      timeToRead: post.fields.readingTime.text,
      thumbnail: post.frontmatter.thumbnail,
    };
    postsArray.push(postObject);
    return postsArray;
  });

  return (
    <div sx={{ variant: `layout.container` }}>
      <SEO title={`Category: ${data.pageContext.category}`} />
      <Flex>
        <h1>
          Category .{" "}
          <span sx={{ color: `highlight` }}>{data.pageContext.category}</span>
        </h1>

        <PageToggle link={blogPath.substr(1)} />
      </Flex>
      <section style={{ margin: `40px auto` }}>
        <BlogPostListing posts={postsArray} />
      </section>
    </div>
  );
};
export default CategoryPostsPage;
