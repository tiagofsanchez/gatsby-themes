/** @jsx jsx */
import { jsx } from "theme-ui";
import "typeface-ibm-plex-sans";
import styled from "@emotion/styled";

import Header from "./header";
import Footer from "../Layout/footer";

const Grid = styled.div `
display: grid; 
grid-templates-columns: auto;
align-content: space-between;
grid-gap: 40px;
padding: 20px
`

const Layout = ({ children }) => {
  return (
    <Grid>
      <header sx={{ variant: `layout.header` }}>
        <Header />
      </header>
        <main sx={{ variant: `layout.main` }}>{children}</main>
        <footer sx={{ variant: `layout.footer` }} >
          <Footer />
        </footer>
    </Grid>
  );
};
export default Layout;
