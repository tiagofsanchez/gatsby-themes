/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "@emotion/styled";

const ImageWrapper = styled.div`
  width: 500px;
  margin: auto;
`;

const NoPage = () => {
  const data = useStaticQuery(graphql`
  { 
    img: file(relativePath: {eq: "404.png"}) {
      childImageSharp {
        fluid(grayscale: true) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `);
  return (
    <div sx={{ variant: `layout.container`, textAlign: `center`, margin: `auto` }}>
      <h1>Ups...something went wrong!</h1>
      <ImageWrapper>
        <Img fluid={data.img.childImageSharp.fluid}/>
      </ImageWrapper>
    </div>
  );
};

export default NoPage;
