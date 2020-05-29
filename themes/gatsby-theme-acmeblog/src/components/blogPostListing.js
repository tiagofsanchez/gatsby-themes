import React from "react";
import BlogPostHeader from "./blogPostHeader";


const BlogPostListing = ({ posts }) => {
  return (
    <>
      {posts.map((post , index) => {
        //NOTE: this is just a fix, need to do it better and take care of this on the
        // gatsby-theme-acmeblog-data piece of the graphql
        if (post.tags !== null) {
          const blogPost = {
            title: post.title,
            date: post.date,
            category: post.category,
            tags: post.tags,
            excerpt: post.excerpt,
            slug: post.slug,
          };
          return (
            <div key={index}>
              <BlogPostHeader {...blogPost}  />
              <br />
            </div>
          );
        }
      })}
    </>
  );
};

export default BlogPostListing;
