/** @jsx jsx */
import { jsx, IconButton } from "theme-ui";
import { useState } from "react";
import styled from "@emotion/styled";

const MegaMenuContainer = styled.div`
  position: absolute;
  z-index: 100;
  left: 0px;
  top: 80px;
  background-color: white;
  width: 100%;
  height: 800px;
`;

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
      <nav>
        <IconButton
          aria-label="Menu pop up"
          onClick={showMenuHandler}
          sx={{ color: `primary`, width: `auto`, cursor: `pointer` }}
        >
          <h5>{navigation[0].title}</h5>
        </IconButton>
      </nav>
      {isMegaMenu && <MegaMenuContainer></MegaMenuContainer>}
    </div>
  );
};

export default Navigation;
