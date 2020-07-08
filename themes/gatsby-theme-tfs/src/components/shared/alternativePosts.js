/** @jsx jsx */
import { jsx, Card } from "theme-ui";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import Img from "gatsby-image";

const AlternativeContainer = styled.section`
  display: grid;
`;

const GridCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, auto));
  grid-gap: 10px;
  text-align: center;
  justify-content: center;
  @media (max-width: 740px) {
    grid-template-columns:1fr
  }
`;

const ImgContainer = styled.div`
  width: 50px;
  justify-self: center;
`;

const AlternativePosts = ({ alternatives, category }) => {
  return (
    <AlternativeContainer>
      <h1 sx={{ textAlign: `center` }}>
        More posts about <span sx={{ color: `highlight` }}>{category}</span>
      </h1>
      <GridCard>
        {alternatives.map((post) => {
          const title = post.frontmatter.title;
          const timeToRead = post.timeToRead;
          const slug = post.fields.slug;
          const img = post.frontmatter.thumbnail.childImageSharp.fluid;
          return (
            <Link
              key={title}
              to={slug}
              aria-label={title}
              sx={{ variant: `links.secondary` }}
            >
              <Card sx={{ variant: `cards.alternative` }}>
                <ImgContainer>
                  <Img fluid={img} />
                </ImgContainer>
                <h5 sx={{ margin: `0px` , alignSelf: `center`}}>{title}</h5>
                <p sx={{ margin: `0px`, fontWeight: `100` , alignSelf: `end`}}>
                  {timeToRead} minutes read
                </p>
              </Card>
            </Link>
          );
        })}
      </GridCard>
    </AlternativeContainer>
  );
};

export default AlternativePosts;
