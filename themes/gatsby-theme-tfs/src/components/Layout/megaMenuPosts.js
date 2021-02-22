/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import styled from "@emotion/styled";

import MenuLink from "./menuLink";

const _ = require("lodash");

const PostContainer = styled.div``;

const FlexContainer = styled.div`
  display: flex;
  height: min-content; // This is just wrong and I don't get it
  flex-direction: column;
  justify-content: space-between;
  a {
    margin-left: 0px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-gap: 5px;
  p {
    font-size: 18px;
    padding: 5px 10px;
    border-radius: 4px;
    margin-top: 0px;
    margin-bottom: 0px;
    color: rgba(255, 255, 255, 0.8);
  }
`;

const MegaMenuPosts = ({ category, closeMenu, blogPath, categoryPath }) => {
  const { fieldValue, nodes } = category;

  return (
    <PostContainer>
      <h3 sx={{ color: `white`, mt: `0px` }}>{fieldValue}</h3>
      <FlexContainer>
        <GridContainer>
          {nodes.slice(0, 4).map((post) => (
            <Link
              key={post.frontmatter.title}
              to={`${blogPath}/${post.slug}`}
              aria-label={`post about: ${post.frontmatter.title}`}
              onClick={closeMenu}
              sx={{ variant: `links.link`, m: `0px`, fontWeight: `400` }}
            >
              <p
                sx={{
                  ":hover": {
                    boxShadow: "inset 0 0 0 0",
                    bg: `bg2`,
                  },
                }}
              >
                {post.frontmatter.title}
              </p>
            </Link>
          ))}
        </GridContainer>
        <MenuLink
          closeMenu={closeMenu}
          link={`${blogPath}${categoryPath}/${_.kebabCase(fieldValue)}`}
          text={`all about ${_.kebabCase(fieldValue)}`}
        />
      </FlexContainer>
    </PostContainer>
  );
};

export default MegaMenuPosts;
