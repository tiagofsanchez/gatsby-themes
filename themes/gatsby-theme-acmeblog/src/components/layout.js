/** @jsx jsx */
import { jsx } from "theme-ui";
import "typeface-ibm-plex-sans";
import styled from "@emotion/styled";

import Header from "./header";
import Footer from "./footer";

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  height: -webkit-fill-available;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children }) => {
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",

      }}
    >
      <header sx={{ variant: `layout.header` }}>
        <Header />
      </header>
      <Flex>
        <main sx={{ variant: `layout.main` }}>{children}</main>
        <footer sx={{ variant: `layout.footer` }} >
          <Footer />
        </footer>
      </Flex>
    </div>
  );
};
export default Layout;
