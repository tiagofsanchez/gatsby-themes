import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const ImageWrapper = styled.div`
  width: ${(props) => props.width};
  margin-right: 15px;

`;

const AcmeLogo = ({ width }) => {
  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(grayscale: true) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <ImageWrapper width={width}>
      <Img fluid={data.logo.childImageSharp.fluid} />
    </ImageWrapper>
  );
};

AcmeLogo.propTypes = {
  width: PropTypes.string,
};

export default AcmeLogo;
