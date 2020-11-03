/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import { Link } from "gatsby";

import ReadMore from "../shared/readMore";

const ImgContainer = styled.div`
  width: 50px;
`;

const Card = styled.div`
  display: grid;
  padding: 20px;
  border-radius: 9px;
  height: 100%;
`;

const PostCard = ({ title, slug, img, excerpt }) => {
  return (
    <Link
      key={title}
      to={slug}
      aria-label={title}
      sx={{ variant: `links.secondary` }}
    >
      <Card sx={{ bg: `hover`, color: `text` }}>
        <ImgContainer>
          <Img fluid={img} />
        </ImgContainer>
        <h2 sx={{ mb: `0px` }}>{title}</h2>
        <p>{excerpt}</p>
        <div sx={{ justifyContent: `end` }}>
          <ReadMore />
        </div>
      </Card>
    </Link>
  );
};

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  img: PropTypes.object.isRequired,
};

export default PostCard;
