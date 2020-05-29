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
        <Link to={url.slug} as={Link} key={url.title} style={{textDecoration: `none`, color: `inherit`}}>
          <NavItems >
            <Styled.h3 sx={{color: `headerTextColor`}}>{url.title}</Styled.h3>
          </NavItems>
        </Link>
      ))}
    </>
  );
};

export default Navigation;
