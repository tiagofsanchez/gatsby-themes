/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import styled from "@emotion/styled";

const NavItems = styled.nav`
  display: flex;
  @media (max-width: 600px) { 
    display: none;
  }
`;

const Navigation = ({ navigation }) => {
  return (
    <NavItems>
      {navigation.map((url) => (
        <div key={url.title} style={{marginRight: `10px`}}>
          <Link to={url.slug} style={{ textDecoration: `none` }}>
            <h3 sx={{ color: `primary` }}>{url.title}</h3>
          </Link>
        </div>
      ))}
    </NavItems>
  );
};

export default Navigation;
