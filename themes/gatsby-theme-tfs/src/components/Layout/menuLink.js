/** @jsx jsx */
import { jsx, IconButton } from "theme-ui";
import { Link } from "gatsby";
import PropTypes from "prop-types";

const MenuLink = ({ link }) => {
  return (
    <Link to={`/${link}`} sx={{ variant: `links.link` }} aria-label={link}>
      {link}
    </Link>
  );
};

MenuLink.protoTypes = {
  link: PropTypes.string.isRequired,
};

export default MenuLink;
