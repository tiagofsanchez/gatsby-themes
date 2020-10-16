import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const ImageWrapper = styled.div`
  width: ${(props) => props.width};
  border-radius: 50%;
`;

const Avatar = ({ width }) => {
  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return data.logo !== null ? (
    <ImageWrapper width={width}>
      <Img fluid={data.logo.childImageSharp.fluid} />
    </ImageWrapper>
  ) : null;
};

Avatar.propTypes = {
  width: PropTypes.string,
};

export default Avatar;
