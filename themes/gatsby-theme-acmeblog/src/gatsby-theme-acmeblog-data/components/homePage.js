import React from 'react';
import HomePage from '../../components/homePage';

const MinBlogPost = ({data}) => { 
    const { posts } = data
    let postsArray = [];
    posts.nodes.map((item) => {
      const post = {
        title: item.frontmatter.title,
        date: item.frontmatter.date,
        category: item.frontmatter.category,
        tags: item.frontmatter.tags,
        excerpt: item.excerpt,
        slug: item.fields.slug,
      };
      postsArray.push(post);
      return postsArray;
    });
    return <HomePage posts={[...postsArray]} />
}
export default MinBlogPost;