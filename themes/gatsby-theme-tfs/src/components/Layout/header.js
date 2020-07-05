/** @jsx jsx */
import { useColorMode, Button, jsx } from "theme-ui";
import styled from "@emotion/styled";
import { Link } from "gatsby";

import useSiteMetadata from "../../hooks/useSiteMetadata";
import ToogleMode from "./toogleMode";
import Nav from "./navigation";

const HeaderContainer = styled.div`
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
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
    <HeaderContainer>
      <FlexBox>
        <Link
          to="/"
          sx={{ variant: `links.primary` }}
          aria-label={`${siteTitle} home page`}
        >
          {siteTitle}
        </Link>
      </FlexBox>
      <NavContainer>
        <Nav navigation={navigation} />
        <Button
          aria-label="toggle color theme"
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
