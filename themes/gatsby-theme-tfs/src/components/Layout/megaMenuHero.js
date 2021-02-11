/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import { Link } from "gatsby";

import Avatar from "../shared/avatar";
import MenuLink from "../Layout/menuLink";
import Social from "../shared/social";

const Container = styled.div`
  display: grid;
  grid-template-columns: 150px;
  grid-gap: 5px;
`;

const MegaMenuHero = ({ closeMenu, blogPath }) => {
  return (
    <div>
      <Container>
        <Link
          to="/"
          sx={{
            borderBottom: `none`,
            ":hover": {
              borderBottom: `none`,
            },
          }}
          onClick={closeMenu}
        >
          <Avatar width="150px" />
        </Link>
        <MenuLink link="/" text="home" closeMenu={closeMenu} />
        <MenuLink link="/about" text="about" closeMenu={closeMenu} />
        <MenuLink
          link={`${blogPath}`}
          text={`${blogPath.slice(1, blogPath.length)}`}
          closeMenu={closeMenu}
        />
        <MenuLink link="/dashboard" text="dashboard" closeMenu={closeMenu} />
        <Social />
      </Container>
    </div>
  );
};

export default MegaMenuHero;
