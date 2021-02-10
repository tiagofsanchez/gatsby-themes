/** @jsx jsx */
import { jsx, IconButton } from "theme-ui";
import { useState } from "react";
import styled from "@emotion/styled";
import { CSSTransition } from "react-transition-group";
import { CgMenuGridR } from "react-icons/cg";

import "../../css/code.css";
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
  console.log(isMegaMenu);

  const animationTiming = {
    enter: 10000,
    exit: 1000,
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
          <CgMenuGridR size={28} /> <H5>{navigation[0].title}</H5>
        </IconButton>
      </nav>
      <CSSTransition
        in={isMegaMenu}
        timeout={animationTiming}
        mountOnEnter
        unmountOnExit
        classNames="fade"
      >
        <MegaMenu closeMenu={showMenuHandler} />
      </CSSTransition>
    </div>
  );
};

export default Navigation;
