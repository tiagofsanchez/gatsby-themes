/** @jsx jsx */
import { jsx, IconButton } from "theme-ui";
import { useState } from "react";
import styled from "@emotion/styled";
import { CSSTransition } from "react-transition-group";
import { TiThLargeOutline } from "react-icons/ti";

import "../../css/animation.css";
import MegaMenu from "../Layout/megaMenu";

const H5 = styled.h5`
  margin: 0px;
  margin-left: 5px;
  @media (max-width: 600px) {
    display: none;
  }
`;

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
          sx={{
            color: `primary`,
            width: `auto`,
            height: `auto`,
            cursor: `pointer`,
            px: 3,
            py: 1,
            ":hover": {
              boxShadow: "inset 0 0 0 0",
              bg: `bg2`,
            },
          }}
        >
          <TiThLargeOutline size={28} /> <H5>{navigation[0].title}</H5>
        </IconButton>
      </nav>
      <CSSTransition
        in={isMegaMenu}
        timeout={1000}
        mountOnEnter
        unmountOnExit
        classNames="menu"
      >
        <MegaMenu closeMenu={showMenuHandler} />
      </CSSTransition>
    </div>
  );
};

export default Navigation;
