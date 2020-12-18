/** @jsx jsx */
import { jsx, Button } from "theme-ui";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { FaArrowAltCircleRight } from "react-icons/fa";

const PageToggle = ({ link }) => {
  return (
    <Link to={`/${link}`} sx={{ variant: `links.secondary` }} aria-label={link}>
      <Button
        sx={{
          variant: `buttons.secondary`,
          display: `grid`,
          gridTemplateColumns: `repeat(2, auto)`,
          gridGap: `5px`,
        }}
      >
        {link} <FaArrowAltCircleRight />
      </Button>
    </Link>
  );
};

PageToggle.protoTypes = {
  link: PropTypes.string.isRequired,
};

export default PageToggle;
