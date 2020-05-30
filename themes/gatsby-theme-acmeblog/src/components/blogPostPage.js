/** @jsx jsx */
import React from "react";
import { jsx, ThemeProvider } from "theme-ui";
import { MDXRenderer } from "gatsby-plugin-mdx";
import theme from "../gatsby-plugin-theme-ui/index";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import BlogPostHeader from './blogPostHeader'

const _ = require("lodash");

const BlogPostPage = ({
  title,
  body,
  date,
  category,
  tags,
  tableOfContentsArray,
  slug,
  thumbnail,
}) => {
 
  const blogHeader = {title , date, tags, category, page: true}
  return (
    <>
      <section>
        <BlogPostHeader {...blogHeader} />
      </section>
      <ThemeProvider theme={theme}>
        <MDXRenderer>{body}</MDXRenderer>
      </ThemeProvider>
      <section>
        <h3>Table of contents</h3>
        <ul>
          {tableOfContentsArray.map((item) => {
            return (
              <li key={item.title}>
                <Link to={`${slug}${item.url}`}>{item.title}</Link>
                {item.items &&
                  item.items.map((intItem) => (
                    <p key={intItem.title}>{intItem.title}</p>
                  ))}
              </li>
            );
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

};

export default BlogPostPage;
