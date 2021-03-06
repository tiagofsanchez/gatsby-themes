/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import useSiteMetadata from "../../hooks/useSiteMetadata";

import github from "../../logos/github.svg";
import linkedin from "../../logos/linkedin.svg";
import instagram from "../../logos/instagram.svg";

const ImageContainer = styled.div`
  display: flex;
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
      >
        <Logo
          sx={{ "&:hover": { bg: `bg2` } }}
          src={github}
          alt="Tiago's Github"
        />
      </a>
      <p sx={{ m: `0` }}>.</p>
      <a
        href={externalLinks[1].url}
        sx={{ variant: `links.secondary` }}
        aria-label="Tiago's LinkedIn"
      >
        <Logo
          sx={{ "&:hover": { bg: `bg2` } }}
          src={linkedin}
          alt="Tiago's LinkedIn"
        />
      </a>
      <p sx={{ m: `0` }}>.</p>
      <a
        href={externalLinks[2].url}
        sx={{ variant: `links.secondary` }}
        aria-label="Tiago's Instagram"
      >
        <Logo
          sx={{ "&:hover": { bg: `bg2` } }}
          src={instagram}
          alt="Tiago's Instagram"
        />
      </a>
    </ImageContainer>
  );
};

export default Social;
