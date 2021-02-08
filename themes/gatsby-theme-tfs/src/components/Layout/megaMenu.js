/** @jsx jsx */
import { jsx, Close } from "theme-ui";
import styled from "@emotion/styled";

const MegaMenuContainer = styled.div`
  position: absolute;
  z-index: 100;
  top: 100px;
  left: 5%;
  width: 90%;
  height: 800px;
  border: 2px solid;
  border-radius: 12px;
  background: rgba(15, 14, 71, 0.3);
  backdrop-filter: blur(40px) brightness(80%) saturate(150%);
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
      <div sx={{ variant: `layout.header`, py: 5 }}>Hello</div>
    </MegaMenuContainer>
  );
};

export default MegaMenu;
