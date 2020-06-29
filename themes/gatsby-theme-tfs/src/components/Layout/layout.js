/** @jsx jsx */
import { jsx } from "theme-ui";
import "typeface-ibm-plex-sans";
import styled from "@emotion/styled";

import Header from "./header";
import Footer from "../Layout/footer";

const Grid = styled.div `
display: grid; 
grid-template-rows: auto 1fr auto;
grid-template-columns: 1fr;
grid-gap: 80px;
padding: 20px;
height: 100vh;
`

const Layout = ({ children }) => {
  return (
    <Grid>
      <header sx={{ variant: `layout.header` }}>
        <Header />
      </header>
        <main sx={{ variant: `layout.main` , alignSelf: `grid-start`}}>{children}</main>
        <footer sx={{ variant: `layout.footer` }} >
          <Footer />
        </footer>
    </Grid>
  );
};
export default Layout;