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

const Navigation = ({ navigation }) => {
  return (
    <NavItems>
      {navigation.map((url) => (
        <div key={url.title}>
          <Link to={url.slug} style={{ textDecoration: `none` }}>
            <h4 sx={{ color: `primary` }}>{url.title}</h4>
          </Link>
        </div>
      ))}
    </NavItems>
  );
};

export default Navigation;
