import React from "react";
import Header from "./header";
import "typeface-ibm-plex-sans";
import styled from "@emotion/styled";

const Main = styled.main`
  margin: 60px 40px auto 40px;
  @media (max-width: 600px) {
  margin: 60px 8px auto 8px;
  }
`;

const Layout = ({ children }) => {
  return (
    <div style={{marginTop: `60px`}}>
      <Header />
      <Main>{children}</Main>
    </div>
  );
};
export default Layout;
