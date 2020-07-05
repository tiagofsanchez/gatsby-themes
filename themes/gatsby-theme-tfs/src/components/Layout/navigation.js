/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import styled from "@emotion/styled";

const NavItems = styled.nav`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 10px;
  place-contents: center;
  @media (max-width: 600px) {
    display: none;
  }
`;

const MobileMenu = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding-top: 10px;
  bottom: 0;
  width: 100%;
  height: 60px;
  left: 0;
  z-index: 100;
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

const activeStyle = { borderBottom: `2px solid` };

const Navigation = ({ navigation }) => {
  return (
    <div>
      <NavItems>
        {navigation.map((url) => (
          <Link
            key={url.title}
            to={url.slug}
            aria-label={`${url.title} page`}
            sx={{ borderBottom: `none` }}
            activeStyle={activeStyle}
          >
            <h4 sx={{ color: `primary`, margin: `0` }}>{url.title}</h4>
          </Link>
        ))}
      </NavItems>
      <MobileMenu sx={{ bg: `background` }}>
        <FlexMenu>
          <Link
            to="/"
            sx={{ borderBottom: `0px` }}
            aria-label={`home page`}
            activeStyle={activeStyle}
          >
            <p
              sx={{
                color: `primary`,
                margin: `0px`,
                fontWeight: `600`,
                textDecoration: `none`,
              }}
            >
              home
            </p>
          </Link>
          {navigation.map((nav) => (
            <Link
              key={nav.title}
              to={nav.slug}
              sx={{ borderBottom: `0px` }}
              activeStyle={activeStyle}
            >
              <p
                sx={{
                  margin: `0`,
                  color: `primary`,
                  fontWeight: `600`,
                }}
              >
                {nav.title}
              </p>
            </Link>
          ))}
        </FlexMenu>
      </MobileMenu>
    </div>
  );
};

export default Navigation;
