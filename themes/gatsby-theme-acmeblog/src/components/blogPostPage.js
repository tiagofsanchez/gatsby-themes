import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link } from "gatsby";
import PropTypes from "prop-types";

const _ = require("lodash");

const BlogPostPage = ({
  title,
  body, 
  date,
  category,
  tags,
  tableOfContentsArray,
  slug,
  basePath,
  thumbnail, 
}) => {

  return (
    <>
      <section>
      <h1>Title: {title}</h1>
      <p>Date: {date}</p>
      <p>
        Category:{" "}
        <Link to={`${basePath}/category/${_.kebabCase(category)}`}>
          {category}
        </Link>
      </p>
      <p>
        Tags:{" "}
        {tags.map((tag) => (
          <span key={tag} style={{ margin: `auto 2px` }}>
            <Link to={`${basePath}/tags/${_.kebabCase(tag)}`}>{tag}</Link>
          </span>
        ))}
      </p>
      </section>
     
      <div style={{ border: `1px solid black` }} />
      <MDXRenderer>{body}</MDXRenderer>
      <section>
        <h3>Table of contents</h3>
        <ul>
          {tableOfContentsArray.map((item) => {
            return(
            <li key={item.title}>
              <Link to={`${slug}${item.url}`} >{item.title}</Link>
              {item.items && item.items.map((intItem) => (
                <p key={intItem.title}>{intItem.title}</p>
              ) )}
            </li>)
          })}
        </ul>
      </section>
    </>
  );
};

BlogPostPage.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  tableOfContentsArray: PropTypes.array.isRequired,
  slug: PropTypes.string.isRequired,
  basePath: PropTypes.string.isRequired,
};

export default BlogPostPage;
