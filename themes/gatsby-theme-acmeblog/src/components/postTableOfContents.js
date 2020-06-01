/** @jsx jsx */
import React from "react";
import { jsx, Link as TLink } from "theme-ui";
import { Link } from "gatsby";
import styled from "@emotion/styled";

const ContentContainer = styled.div`
  position: sticky;
  top: 2rem;
  margin-left: 20px;
  padding-left: 20px;
  height: fit-content;
  border-left: 3px solid;
  flex: 1 1 20%;
  @media (max-width: 1100px) {
    display: none;
    position: none;
  }
`;
const Ul = styled.ul`
  padding-left: 0;
  margin-bottom: 16px;
`;

const Li = styled.div`
  list-style: none;
`;

const postTableOfContents = ({ tableOfContentsArray, slug }) => {
  console.log(tableOfContentsArray);

  return (
    <ContentContainer sx={{ borderLeftColor: `primary` }}>
      <h3>Table of contents</h3>
      <Ul>
        {tableOfContentsArray.map((item) => {
          return (
            <Li key={item.title}>
              <TLink to={`${slug}${item.url}`} as={Link}>
                {item.title}
              </TLink>
              {item.items &&
                item.items.map((intItem) => (
                  <Li key={intItem.title}>{intItem.title}</Li>
                ))}
            </Li>
          );
        })}
      </Ul>
    </ContentContainer>
  );
};

export default postTableOfContents;
