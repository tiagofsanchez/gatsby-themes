/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import styled from "@emotion/styled";

const NavItems = styled.nav`
  display: grid;
  grid-template-columns: repeat(2, auto);
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

const activeStyle = { borderRadius: `4px`, background:`rgba(194, 36, 93 , 0.4)`  };

const Navigation = ({ navigation }) => {
  return (
    <div>
      <NavItems>
        {navigation.map((url) => (
          <Link
            key={url.title}
            to={url.slug}
            aria-label={`${url.title} page`}
            sx={{ variant: `links.secondary` }}
            activeStyle={activeStyle}
          >
            <h5 sx={{ color: `primary`, margin: `0`, p: `10px` }}>{url.title}</h5>
          </Link>
        ))}
      </NavItems>
      <MobileMenu sx={{ bg: `background` }}>
        <FlexMenu>
          <Link
            to="/"
            sx={{ borderBottom: `0px` , variant: `links.secondary`  }}
            aria-label={`home page`}
            activeStyle={activeStyle}
          >
            <h5
              sx={{
                color: `primary`,
                margin: `0px`,
                fontWeight: `600`,
                textDecoration: `none`,
                p: `0px 15px` ,
              }}
            >
              Home
            </h5>
          </Link>
          {navigation.map((nav) => (
            <Link
              key={nav.title}
              to={nav.slug}
              sx={{ borderBottom: `0px` , variant: `links.secondary` }}
              activeStyle={activeStyle}
            >
              <h5
                sx={{
                  margin: `0`,
                  color: `primary`,
                  fontWeight: `600`,
                  p: `5px 10px` 
                }}
              >
                {nav.title}
              </h5>
            </Link>
          ))}
        </FlexMenu>
      </MobileMenu>
    </div>
  );
};

export default Navigation;
