/** @jsx jsx */
import React from 'react';
import { jsx  , Styled } from "theme-ui";
import { Link } from 'gatsby';
import styled from "@emotion/styled";

const NavItems = styled.nav`
  display: flex;
  margin-right: 10px;
`;

const Navigation = ({ navigation }) => {
  return (
    <>
      {navigation.map((url) => (
        <NavItems key={url.title}>
          <Styled.h3 sx={{ color: `headerTextColor` }} as={Link} to={url.slug}>
            {url.title}
          </Styled.h3>
        </NavItems>
      ))}
    </>
  );
};

export default Navigation;
