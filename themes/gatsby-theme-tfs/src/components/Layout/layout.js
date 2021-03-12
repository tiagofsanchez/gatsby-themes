/** @jsx jsx */
import { jsx } from "theme-ui";
import "typeface-ibm-plex-sans";
import styled from "@emotion/styled";

import Header from "./header";
import Footer from "../Layout/footer";

const Grid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-gap: 80px;
  height: 100vh;
`;

const FooterContainer = styled.footer`
  padding-top: 40px;
  padding-bottom: 40px;
`;

const Layout = ({ children }) => {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]');
  }

  return (
    <Grid>
      <header sx={{ variant: `layout.header` }}>
        <Header />
      </header>
      <main sx={{ variant: `layout.main`, alignSelf: `grid-start` }}>
        {children}
      </main>
      <FooterContainer sx={{ bg: `hover`}}>
        <Footer />
      </FooterContainer>
    </Grid>
  );
};

export default Layout;
