/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

import Avatar from "../shared/avatar";
import MenuLink from "../Layout/menuLink";
import Social from "../shared/social";
import ToogleMode from '../Layout/toogleMode'

const Container = styled.div`
  display: grid;
  grid-template-columns: 150px;
  grid-gap: 5px;
`;

const MegaMenuHero = ({ closeMenu , mode}) => {
  return (
    <div>
      <Container>
        <Avatar width="150px" />
        <MenuLink link="about" closeMenu={closeMenu} />
        <MenuLink link="anything" closeMenu={closeMenu} />
        <MenuLink link="dashboard" closeMenu={closeMenu} />
        <Social />
      </Container>
      <ToogleMode mode={mode} />
    </div>
  );
};

export default MegaMenuHero;
