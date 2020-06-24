/** @jsx jsx */
import { jsx, Link as Tlink } from "theme-ui";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import useSiteMetadata from "../hooks/useSiteMetadata";

const FlexCreds = styled.div`
  display: flex;
  bottom: 0;
  justify-content: space-between;
  @media (max-width: 600px) {
    display: none;
  }
`;

const MenuContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-around;
  bottom: 0;
  width: 100%;
  height: 45px;
  left: 0;
  border-top: 1px solid;
  @media (min-width: 599px) {
    display: none;
  }
`;

const FlexMenu = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  padding: 0px 20px 0px 20px;
`;

const Footer = () => {
  const { navigation, externalLinks } = useSiteMetadata();
  return (
    <div>
      <FlexCreds>
        <h5>2020 by ACME. All rights reserved</h5>
        <h5>
          Theme by{" "}
          <Tlink
            href="https://www.tiagofsanchez.com/"
            rel="noreferrer noopener"
            target="_blank"
            style={{ marginRight: `5px` }}
          >
            Tiago
          </Tlink>
          , {""}
          {externalLinks.map((link) => (
            <Tlink
              href={link.url}
              rel="noreferrer noopener"
              target="_blank"
              style={{ marginRight: `5px` }}
            >
              {link.name}
            </Tlink>
          ))}
        </h5>
      </FlexCreds>
      <MenuContainer sx={{ bg: `background` }}>
        <FlexMenu>
          <Link to="/" sx={{ borderBottom: `0px` }}>
            <p sx={{ color: `primary`, margin: `0px`, fontWeight: `600` }}>
              home
            </p>
          </Link>
          {navigation.map((nav) => (
            <Link key={nav.title} to={nav.slug} sx={{ borderBottom: `0px` }}>
              <p sx={{ color: `primary`, margin: `0px`, fontWeight: `600` }}>
                {nav.title}
              </p>
            </Link>
          ))}
        </FlexMenu>
      </MenuContainer>
    </div>
  );
};

export default Footer;
