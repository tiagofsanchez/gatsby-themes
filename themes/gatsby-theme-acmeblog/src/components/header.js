/** @jsx jsx */
import { useColorMode, Button, jsx } from "theme-ui";
import styled from "@emotion/styled";

import ToogleMode from "./toogleMode";

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
  padding: 15px;
`;

const TitleContainer = styled.div`
  width: auto;
  height: auto;
`;

const Header = () => {
  const [colorMode, setColorMode] = useColorMode();
  const changeModehandler = () => {
    setColorMode(colorMode === "dark" ? "default" : "dark");
  };

  return (
    <HeaderContainer sx={{ bg: `headerbgcolor` }}>
      <TitleContainer>
        <p style={{ margin: `0px` }}>This is my Header</p>
      </TitleContainer>

      <Button
        onClick={changeModehandler}
        style={{
          padding: `0px`,
          backgroundColor: `none`,
          borderRadius: `15px`,
        }}
      >
        <ToogleMode mode={colorMode} onClick={changeModehandler} />
      </Button>
    </HeaderContainer>
  );
};
export default Header;
