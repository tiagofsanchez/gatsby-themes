/** @jsx jsx */
import { useColorMode, Button, jsx, Styled } from "theme-ui";
import styled from "@emotion/styled";
import { Link } from "gatsby";

import useSiteMetadata from "../hooks/useSiteMetadata";
import ToogleMode from "./toogleMode";
import AcmeLogo from "./acmeLogo";
import Nav from "./navigation";

const HeaderContainer = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 70px;
  opacity: 0.95;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Header = () => {
  const [colorMode, setColorMode] = useColorMode();
  const { siteTitle, navigation } = useSiteMetadata();
  const changeModehandler = () => {
    setColorMode(colorMode === "dark" ? "default" : "dark");
  };

  return (
    <HeaderContainer sx={{ bg: `headerbgcolor` }}>
      <FlexBox>
        <AcmeLogo width="50px" />
          <Styled.h1 sx={{ color: `headerTextColor` }} as={Link} to="/">{siteTitle}</Styled.h1>
      </FlexBox>
      <NavContainer>
        <Nav navigation={navigation} />
        <Button
          onClick={changeModehandler}
          style={{
            padding: `0px`,
            backgroundColor: `none`,
            borderRadius: `15px`,
            marginLeft: `10px`,
          }}
        >
          <ToogleMode mode={colorMode} onClick={changeModehandler} />
        </Button>
      </NavContainer>
    </HeaderContainer>
  );
};
export default Header;
