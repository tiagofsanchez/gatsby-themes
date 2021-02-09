/** @jsx jsx */
import { jsx, Close } from "theme-ui";
import styled from "@emotion/styled";

import MegaMenuHero from "../Layout/megaMenuHero";

const MegaMenuContainer = styled.div`
  position: absolute;
  z-index: 100;
  top: 100px;
  left: 5%;
  width: 90%;
  height: auto;
  border: 2px solid;
  border-radius: 12px;
  background: rgba(15, 14, 71, 0.3);
  backdrop-filter: blur(20px) brightness(50%) saturate(20%);
`;

const MegaMenu = ({ closeMenu }) => {
  return (
    <MegaMenuContainer sx={{ borderColor: `highlight` }}>
      <Close
        sx={{
          position: `absolute`,
          right: `0px`,
          mt: 2,
          mr: 2,
          color: `highlight`,
          cursor: `pointer`,
        }}
        onClick={closeMenu}
      />
      <div sx={{ variant: `layout.header`, py: 5 }}>
        <MegaMenuHero closeMenu={closeMenu} />
      </div>
    </MegaMenuContainer>
  );
};

export default MegaMenu;
