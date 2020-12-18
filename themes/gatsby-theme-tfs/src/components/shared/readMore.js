/** @jsx jsx */
import { jsx, IconButton } from "theme-ui";
import useSound from "use-sound";
import { FiPlusCircle } from "react-icons/fi";

import readMore from "../sounds/readMore.mp3";

const ReadMore = () => {
  const [play, { stop }] = useSound(readMore, { volume: 1 });

  return (
    <IconButton
      onMouseEnter={() => {
        play();
      }}
      onMouseLeave={() => {
        stop();
      }}
      sx={{ width: `auto` }}
    >
      <p
        sx={{
          fontWeight: `900`,
          margin: `0px`,
          fontSize: 16,
          display: `grid`,
          gridTemplateColumns: `repeat(2, auto)`,
          gridGap: `5px`,
          alignItems: `center`,
          ":hover": { color: `highlight` },
        }}
      >
        {" "}
        <FiPlusCircle size={20} /> read more
      </p>
    </IconButton>
  );
};

export default ReadMore;
