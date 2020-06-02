/** @jsx jsx */
import { jsx } from "theme-ui";
import "typeface-ibm-plex-sans";
import styled from "@emotion/styled";

import Header from "./header";
import Footer from "./footer";

const Main = styled.main`
  @media (max-width: 600px) {
    width: 80%;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  height: -webkit-fill-available;
  flex-direction: column;
`;

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Flex>
        <Main sx={{ variant: `layout.main` }}>{children}</Main>
        <Footer />
      </Flex>
    </div>
  );
};
export default Layout;
