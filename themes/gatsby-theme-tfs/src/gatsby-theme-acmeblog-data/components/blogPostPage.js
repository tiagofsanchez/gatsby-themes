import React from "react";
import BlogPostPage from "../../components/pages/blogPostPage";

const MinBlogPost = ({ data , pageContext}) => {
  
  const category = data.post.frontmatter.category;
  const title = data.post.frontmatter.title;
  //This can be all done in graphQL
  const alternatives = [];
  data.postsArray.nodes.map((post) => {
    if ((post.frontmatter.category === category) && (post.frontmatter.title !== title)) {
      alternatives.push(post);
    }
    return alternatives;
  });

  const post = {
    body: data.post.body,
    excerpt: data.post.excerpt,
    title,
    date: data.post.frontmatter.date,
    category,
    tags: data.post.frontmatter.tags,
    slug: data.post.fields.slug,
    tableOfContentsArray: data.post.tableOfContents.items,
    basePath: pageContext.basePath,
    thumbnail: data.post.frontmatter.thumbnail,
    timeToRead: data.post.fields.readingTime.text,
    alternatives: alternatives.slice(0,6),
  };

  return <BlogPostPage {...post} />;
};

export default MinBlogPost;
