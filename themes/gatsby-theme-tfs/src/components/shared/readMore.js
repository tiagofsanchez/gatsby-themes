/** @jsx jsx */
import { jsx, IconButton } from "theme-ui";
import useSound from "use-sound";

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
      sx={{
        fontWeight: `900`,
        width: `auto`,
        fontSize: 16,
        ":hover": { color: `highlight` },
      }}
    >
      Read more
    </IconButton>
  );
};

export default ReadMore;
