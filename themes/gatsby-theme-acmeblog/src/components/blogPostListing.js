import React from "react";
import BlogPostHeader from "./blogPostHeader";


const BlogPostListing = ({ posts }) => {
  
  //NOTE: the map() could be outside the return to improve readability
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
        } else { return null}
      })}
    </>
  );
};

export default BlogPostListing;
