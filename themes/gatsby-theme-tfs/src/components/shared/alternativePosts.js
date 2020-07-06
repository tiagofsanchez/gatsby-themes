/** @jsx jsx */
import { jsx, Card } from "theme-ui";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import Img from "gatsby-image";


const AlternativeContainer = styled.section`
display: grid; 
grid-gap: 40px;
`

const GridCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
  grid-gap: 10px;
  justify-content: center;
  text-align: center;
`;

const ImgContainer = styled.div`
  width: 50px;
  margin: auto;
`;

const AlternativePosts = ({ alternatives }) => {
  return (
    <AlternativeContainer>
      <h2 sx={{textAlign: `center`}}>Might also like</h2>
      <GridCard>
        {alternatives.map((post) => {
          const title = post.frontmatter.title;
          const slug = post.fields.slug;
          const img = post.frontmatter.thumbnail.childImageSharp.fluid;
          return (
            <Link key={title} to={slug} aria-label={title} sx={{variant: `links.secondary`}}>
              <Card sx={{ variant: `cards.alternative` }}>
                <ImgContainer>
                  <Img fluid={img} />
                </ImgContainer>
                <h4>{title}</h4>
              </Card>
            </Link>
          );
        })}
      </GridCard>
    </AlternativeContainer>
  );
};

export default AlternativePosts;
