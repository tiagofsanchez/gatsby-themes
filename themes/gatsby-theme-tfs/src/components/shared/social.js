/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import useSiteMetadata from "../../hooks/useSiteMetadata";

import github from "../../logos/github.svg";
import linkedin from "../../logos/linkedin.svg";
import instagram from "../../logos/instagram.svg";

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 5px;
`;

const Logo = styled.img`
  padding: 9px;
  border-radius: 4px;
`;

const Social = () => {
  const { externalLinks } = useSiteMetadata();
  return (
    <ImageContainer>
      <a
        href={externalLinks[0].url}
        sx={{ variant: `links.secondary` }}
        aria-label="Tiago's Github"
        alt="Tiago's Github"
      >
        <Logo
          sx={{ bg: `hover`, "&:hover": { bg: `background` } }}
          src={github}
        />
      </a>
      <p sx={{ m: `0` }}>.</p>
      <a
        href={externalLinks[1].url}
        sx={{ variant: `links.secondary` }}
        aria-label="Tiago's LinkedIn"
        alt="Tiago's LinkedIn"
      >
        <Logo
          sx={{ bg: `hover`, "&:hover": { bg: `background` } }}
          src={linkedin}
        />
      </a>
      <p sx={{ m: `0` }}>.</p>
      <a
        href={externalLinks[2].url}
        sx={{ variant: `links.secondary` }}
        aria-label="Tiago's Instagram"
        alt="Tiago's Instagram"
      >
        <Logo
          sx={{ bg: `hover`, "&:hover": { bg: `background` } }}
          src={instagram}
        />
      </a>
    </ImageContainer>
  );
};

export default Social;