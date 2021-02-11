/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import styled from "@emotion/styled";

import MenuLink from "./menuLink";

const _ = require("lodash");

const Container = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-gap: 5px;
`;

const MegaMenuPosts = ({ category, closeMenu, blogPath, categoryPath }) => {
  const { fieldValue, nodes } = category;

  return (
    <div>
      <h3 sx={{ color: `white`, mt: `0px` }}>{fieldValue}</h3>
      <Container>
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
                p: `5px 10px`,
                borderRadius: 4,
                my: `0px`,
                color: `rgba(255,255,255, 0.8)`,
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

        <MenuLink
          closeMenu={closeMenu}
          link={`${blogPath}${categoryPath}/${_.kebabCase(fieldValue)}`}
          text={`all about ${_.kebabCase(fieldValue)}`}
        />
      </Container>
    </div>
  );
};

export default MegaMenuPosts;
