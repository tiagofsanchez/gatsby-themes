/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState } from "react";
import styled from "@emotion/styled";

const NavItems = styled.nav`
  @media (max-width: 600px) {
    display: none;
  }
`;


const MegaMenuContainer = styled.div`
z-index: 100px; 
background-color: white;
width: 100%
height: 100px;
`

const activeStyle = {
  borderRadius: `4px`,
  background: `rgba(194, 36, 93 , 0.4)`,
};

const Navigation = ({ navigation }) => {
  const [isMegaMenu, setIsMegaMenu] = useState(false);

  const showMenuHandler = () => {
    setIsMegaMenu(!isMegaMenu);
  };



  return (
    <div>
    <NavItems>
      <h5
        onClick={showMenuHandler}
        sx={{ color: `primary`, margin: `0`, p: `10px` }}
      >
        {navigation[0].title}
      </h5>
    </NavItems>
    {isMegaMenu && <MegaMenuContainer >T</MegaMenuContainer>}
    </div>
  );
};

export default Navigation;
