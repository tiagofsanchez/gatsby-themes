/** @jsx jsx */
import { jsx, IconButton } from "theme-ui";
import { useState } from "react";
import { CgMenuGridR } from "react-icons/cg";

import MegaMenu from "../Layout/megaMenu";

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
            ":hover": {
              boxShadow: "inset 0 0 0 0",
              bg: `rgba(15, 14, 71, 0.3)`,
              backdropFilter: `blur(40px) brightness(80%) saturate(150%)`,
              border: `2px solid`,
              borderColor: `highlight`,
            },
          }}
        >
          <CgMenuGridR size={28} />{" "}
          <h5 sx={{ m: `0px`, ml: 1 }}>{navigation[0].title}</h5>
        </IconButton>
      </nav>
      {isMegaMenu && <MegaMenu closeMenu={showMenuHandler} />}
    </div>
  );
};

export default Navigation;
