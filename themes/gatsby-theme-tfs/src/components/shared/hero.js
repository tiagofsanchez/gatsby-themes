/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

import useSiteMetadata from "../../hooks/useSiteMetadata";
import Avatar from "./avatar";
import Social from '../shared/social'

const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 5px;
  place-items: center;
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
    <HeroContainer>
      <Avatar width="200px" />
      <h1 sx={{ my: `0` }}>
        <span sx={{ color: `highlight` }}>Ola!</span> I'm Tiago!
      </h1>
      <Social />
      <h4 sx={{textAlign: `center`}}>{siteDescription}</h4>
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
