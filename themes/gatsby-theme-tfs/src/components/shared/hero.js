/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

import useSiteMetadata from "../../hooks/useSiteMetadata";
import Avatar from "./avatar";
import Social from "../shared/social";

const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-gap: 10px;
  place-items: center;
  border-radius: 4px;
  padding: 80px;
  @media (max-width: 740px) { 
    grid-template-columns: auto;
    padding: 40px;
    grid-gap: 20px;
  }
`;

const TinyHeroContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  grid-gap: 15px;
`;

const FormHeroContainer = styled.div`
  display: grid;
  place-items: center;
  grid-gap: 20px;
`;

export const Hero = () => {
  const { siteDescription } = useSiteMetadata();
  return (
    <HeroContainer sx={{ variant: `layout.blogHeader`, bg: `hover` }}>
      <Avatar width="200px" />
      <div>
        <h1 sx={{ my: `0` }}>
          <span sx={{ color: `highlight` }}>Ola!</span> I'm Tiago!
        </h1>
        <h4>{siteDescription}</h4>
        <Social />
      </div>
    </HeroContainer>
  );
};

export const TinyHero = () => {
  const { siteDescription } = useSiteMetadata();
  return (
    <TinyHeroContainer>
      <Avatar width="50px" />
      <p sx={{ my: `0` }}>{siteDescription}</p>
    </TinyHeroContainer>
  );
};

export const FormHero = ({ blurb }) => {
  return (
    <FormHeroContainer>
      <Avatar width="80px" />
      <p sx={{ my: `0` }}>{blurb}</p>
    </FormHeroContainer>
  );
};
