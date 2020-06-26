/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

import useSiteMetadata from "../../hooks/useSiteMetadata";
import Logo from "../shared/acmeLogo";

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

export const Hero = () => {
  const { siteDescription } = useSiteMetadata();

  return (
    <HeroContainer>
      <Logo width="200px" />
      <h1 sx={{ my: `0` }}>
        <span sx={{ color: `highlight` }}>Ola!</span> I'm Tiago!
      </h1>
      <h3>{siteDescription}</h3>
    </HeroContainer>
  );
};

export const TinyHero = () => {
  const { siteDescription } = useSiteMetadata();
  return (
    <TinyHeroContainer>
      <Logo width="50px" />
      <p sx={{ my: `0` }}>{siteDescription}</p>
    </TinyHeroContainer>
  );
};
