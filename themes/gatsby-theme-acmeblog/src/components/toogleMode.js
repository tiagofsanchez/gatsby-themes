/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

const ToogleContainer = styled.div`
  width: 48px;
  height: 25px;
  background: #eeeeee;
  border-radius: 15px;
  display: flex;
  justify-content: ${props => props.mode === 'default' ? 'flex-start' : 'flex-end'};
  align-items: center;
`;
const Toogle = styled.div`
  width: 20px;
  height: 20px;
  margin: auto 5px;
  border-radius: 50%;
`;

const ToogleMode = ({ mode }) => {
  return (
    <ToogleContainer mode={mode}>
      <Toogle sx={{ bg: `headerbgcolor` }} />
    </ToogleContainer>
  );
};

export default ToogleMode;
