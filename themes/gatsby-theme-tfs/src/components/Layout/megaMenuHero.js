/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

import Avatar from "../shared/avatar";
import MenuLink from "../Layout/menuLink";
import Social from "../shared/social";

const Container = styled.div`
  display: grid;
  grid-template-columns: 150px;
  grid-gap: 5px;
`;

const MegaMenuHero = () => {
  return (
    <Container>
      <Avatar width="150px" />
      <MenuLink link="about" />
      <MenuLink link="anything" />
      <MenuLink link="dashboard" />
      <Social />
    </Container>
  );
};

export default MegaMenuHero;
