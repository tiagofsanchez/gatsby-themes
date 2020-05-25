import React from "react"; 
import BlogPostPage from '../../components/blogPostPage'

 const MinBlogPost = ({data, pageContext}) => {

    const post = {
        body: data.post.body,
        title: data.post.frontmatter.title,
        date: data.post.frontmatter.date,
        category: data.post.frontmatter.category,
        tags: data.post.frontmatter.tags,
        slug: data.post.fields.slug,
        tableOfContentsArray: data.post.tableOfContents.items,
        basePath: pageContext.basePath,
        thumbnail: data.post.frontmatter.thumbnail, 
      };
      
      return <BlogPostPage {...post} />;
    };

 export default MinBlogPost   