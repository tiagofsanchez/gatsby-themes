/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import PropTypes from "prop-types";

const MenuLink = ({ link, closeMenu, text }) => {
  return (
    <Link
      to={`${link}`}
      sx={{ variant: `links.link` }}
      aria-label={`Go to the following page: ${link}`}
      onClick={closeMenu}
    >
      {text}
    </Link>
  );
};

MenuLink.protoTypes = {
  link: PropTypes.string.isRequired,
  closeMenu: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default MenuLink;
