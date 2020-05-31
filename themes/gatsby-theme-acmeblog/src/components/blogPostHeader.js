/** @jsx jsx */
import React from "react";
import { jsx, Styled, } from "theme-ui";
import { Link } from "gatsby";
import styled from "@emotion/styled";

const PostHeaderContainer = styled.div`
  padding: 10px 20px;
  border-radius: 4px;
`;

const TagsCatContainer = styled.div`
  display: flex;
  margin: 0px;
`;

//blogheader for the BLOG
const blogHeaderForBlog = (title, date, tags, category, excerpt, slug) => {
  return (
    <>
      <PostHeaderContainer sx={{ ":hover": { backgroundColor: `hover` } }}>
        <Link
          style={{ textDecoration: `none`, color: `inherit` }}
          to={slug}
        >
          <h2>{title}</h2>
          <TagsCatContainer>
            <p sx={{ color: `primary`, fontWeight: `900`, margin: `0px` }}>
              {date} | {category} |
            </p>
            {tags.map((tag, index) => (
              <p sx={{ margin: `0px 5px` }} key={index}>
                {tag}
              </p>
            ))}
          </TagsCatContainer>
          <p>{excerpt}</p>
        </Link>
      </PostHeaderContainer>
    </>
  );
};

//bloghedear for the PAGE
const blogHeaderForPage = (title, date, tags, category) => {
  return (
    <>
      <h1 style={{ marginBottom: `0px` }}>{title}</h1>
      <TagsCatContainer>
        <p sx={{ color: `primary`, fontWeight: `900` }}>
          {date} | {category} |
        </p>
        {tags.map((tag, index) => (
          <p style={{ marginLeft: `5px` }} key={index}>
            {tag}
          </p>
        ))}
      </TagsCatContainer>
    </>
  );
};

const BlogPostHeader = ({
  title,
  date,
  tags,
  category,
  excerpt,
  slug,
  page,
}) => {
  console.log(page);
  if (page === true) {
    console.log("YES");
    return blogHeaderForPage(title, date, tags, category);
  } else {
    return blogHeaderForBlog(title, date, tags, category, excerpt, slug);
  }
};

export default BlogPostHeader;
