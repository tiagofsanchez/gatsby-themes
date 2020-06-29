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

const MobileMenu = styled.div`
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

const Navigation = ({ navigation }) => {
  return (
    <div>
      <NavItems>
        {navigation.map((url) => (
          <div key={url.title}>
            <Link to={url.slug} style={{ textDecoration: `none` }}>
              <h4 sx={{ color: `primary` }}>{url.title}</h4>
            </Link>
          </div>
        ))}
      </NavItems>
      <MobileMenu sx={{ bg: `background` }}>
        <FlexMenu>
          <Link to="/" sx={{ borderBottom: `0px` }}>
            <p sx={{ color: `primary`, margin: `0px`, fontWeight: `600` }}>
              home
            </p>
          </Link>
          {navigation.map((nav) => (
            <Link key={nav.title} to={nav.slug} sx={{ borderBottom: `0px` }}>
              <nav sx={{ color: `primary`, margin: `0px`, fontWeight: `600` }}>
                {nav.title}
              </nav>
            </Link>
          ))}
        </FlexMenu>
      </MobileMenu>
    </div>
  );
};

export default Navigation;
