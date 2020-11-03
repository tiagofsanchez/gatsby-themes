/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import { Link } from "gatsby";

import ReadMore from "../shared/readMore";

const ImgContainer = styled.div`
  width: 100px;
  justify-self: center;
`;

const Card = styled.div`
  display: grid;
  grid-gap: 10px;
  padding: 20px;
  border-radius: 9px;
  height: 300px;
`;

const PostCard = ({ title, slug, img, }) => {
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
        <div sx={{ justifyContent: `end`}}>
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
