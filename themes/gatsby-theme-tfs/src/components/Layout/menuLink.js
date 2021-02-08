/** @jsx jsx */
import { jsx, IconButton } from "theme-ui";
import { Link } from "gatsby";
import PropTypes from "prop-types";

const MenuLink = ({ link, closeMenu }) => {
  return (
    <Link
      to={`/${link}`}
      sx={{ variant: `links.link` }}
      aria-label={link}
      onClick={closeMenu}
    >
      {link}
    </Link>
  );
};

MenuLink.protoTypes = {
  link: PropTypes.string.isRequired,
};

export default MenuLink;
