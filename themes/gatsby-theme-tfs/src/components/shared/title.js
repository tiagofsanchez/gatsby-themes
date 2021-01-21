/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

const TitleContainer = styled.div`
  background-color: rgba(194, 36, 93 , 0.4);
  margin-top: 32px;
  position: relative;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.h2`
  margin: 0px;
  color: black;
`;

const LanguageTag = styled.div`
  padding: 1px 5px 5px 5px;
  position: absolute; 
  bottom: -26px;
  right: 8px;
  color: white;
  border-radius: 0px 0px 4px 4px;
`;

const Title = (props) => {
  const { text, children, className } = props;
  return (
    <TitleContainer className={className} >
      <Text
        sx={{
          fontSize: [2, 3],
          fontFamily: `heading`,
          lineHeight: `heading`,
          color: `primary`
        }}
      >
        {text}
      </Text>
      <LanguageTag
        sx={{
          bg: `highlight`,
        }}
      >
        {children}
      </LanguageTag>
    </TitleContainer>
  );
};

export default Title;
