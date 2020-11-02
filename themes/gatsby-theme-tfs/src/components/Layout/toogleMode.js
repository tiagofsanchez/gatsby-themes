/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

const ToogleContainer = styled.div`
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
  transition: transform 200ms ease-out;
  margin: auto 5px;
  border-radius: 50%;
`;

const ToogleMode = ({ mode }) => {
  return (
    <ToogleContainer sx={{ bg: `primary` }}>
      <Toogle sx={{ bg: `background` }} mode={mode} />
    </ToogleContainer>
  );
};

export default ToogleMode;
