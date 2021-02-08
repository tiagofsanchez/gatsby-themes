/** @jsx jsx */
import { jsx, IconButton } from "theme-ui";
import { useState } from "react";
import { CgMenuGridR } from "react-icons/cg";

import MegaMenu from "../Layout/megaMenu";

const Navigation = ({ navigation , mode }) => {
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
          <CgMenuGridR size={28} />{" "}
          <h5 sx={{ m: `0px`, ml: 1 }}>{navigation[0].title}</h5>
        </IconButton>
      </nav>
      {isMegaMenu && <MegaMenu closeMenu={showMenuHandler} mode={mode}/>}
    </div>
  );
};

export default Navigation;
