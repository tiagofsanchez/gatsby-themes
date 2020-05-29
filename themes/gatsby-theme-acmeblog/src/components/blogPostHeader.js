/** @jsx jsx */
import React from "react";
import { jsx, Styled, Link as TLink } from "theme-ui";
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

const BlogPostHeader = ({ title, date, tags, category, excerpt, slug }) => {
  return (
    <>
      <PostHeaderContainer sx={{ ":hover": { backgroundColor: `hover` } }}>
        <TLink
          as={Link}
          style={{ textDecoration: `none`, color: `inherit` }}
          to={slug}
        >
          <Styled.h2>{title}</Styled.h2>
          <TagsCatContainer>
            <Styled.p
              sx={{ color: `primary`, fontWeight: `900`, margin: `0px` }}
            >
              {date} | {category} |
            </Styled.p>
            {tags.map((tag, index) => (
              <Styled.p style={{ margin: `0px 5px` }} key={index}>
                {tag}
              </Styled.p>
            ))}
          </TagsCatContainer>
          <Styled.p>{excerpt}</Styled.p>
        </TLink>
      </PostHeaderContainer>
    </>
  );
};

export default BlogPostHeader;
