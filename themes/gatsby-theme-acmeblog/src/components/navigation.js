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
          <Link to={url.slug} style={{textDecoration: `none`}}>
            <h3 sx={{ color: `primary` }}>
              {url.title}
            </h3>
          </Link>
        </NavItems>
      ))}
    </>
  );
};

export default Navigation;
