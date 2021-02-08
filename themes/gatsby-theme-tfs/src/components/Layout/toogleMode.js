/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import useSound from "use-sound";
import toggle from "../sounds/toggle.mp3";

const ToogleContainer = styled.div`
  z-index: 100;
  width: 48px;
  height: 25px;
  border-radius: 15px;
  display: flex;
  align-items: center;
`;

const Toogle = styled.div`
  width: 20px;
  height: 20px;
  transform: ${(props) =>
    props.mode === "default" ? "translateX(0px)" : "translateX(16px)"};
  transition: transform 100ms ease-out;
  margin: auto 5px;
  border-radius: 50%;
`;

const ToogleMode = ({ mode }) => {
  const [play] = useSound(toggle);
  const soundHandler = () => {
    play();
  };
  return (
    <ToogleContainer sx={{ bg: `primary` }}>
      <Toogle sx={{ bg: `background` }} mode={mode} onClick={soundHandler} />
    </ToogleContainer>
  );
};

export default ToogleMode;
