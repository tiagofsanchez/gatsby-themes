/** @jsx jsx */
import { jsx, Card } from "theme-ui";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import Img from "gatsby-image";

const PostHeaderContainer = styled.div`
  padding: 10px 20px;
  border-radius: 4px;
`;

const ThumbnailContainer = styled.div`
  width: ${(props) => (props.big ? "200px" : "35px")};
  margin: ${(props) => (props.big ? "auto" : null)};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 20px;
  align-items: center;
`;

const GridRow = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-gap: 15px;
  justify-items: center;
`;

const TagsCatContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px;
`;

export const BlogHeaderMinimal = ({
  title,
  date,
  slug,
  timeToRead,
  thumbnail,
}) => {
  return (
    <PostHeaderContainer
      sx={{ ":hover": { bg: `hover`, boxShadow: "inset 0 0 0 1px" } }}
    >
      <Link
        style={{
          textDecoration: `none`,
          color: `inherit`,
          fontWeight: `normal`,
        }}
        to={slug}
      >
        <Grid>
          <ThumbnailContainer>
            <Img fluid={thumbnail.childImageSharp.fluid} />
          </ThumbnailContainer>
          <div>
            <h2 sx={{ marginBottom: `3px` }}>{title}</h2>
            <p sx={{ color: `primary`, my: `5px` }}>
              {date} . {timeToRead} minutes
            </p>
          </div>
        </Grid>
      </Link>
    </PostHeaderContainer>
  );
};

export const BlogHeaderMax = ({ title, date, tags, category, thumbnail }) => {
  return (
    <GridRow>
      <ThumbnailContainer big={true}>
        <Img fluid={thumbnail.childImageSharp.fluid} />
      </ThumbnailContainer>
      <div>
        <h1 sx={{ my: `0px` }}>{title}</h1>
        <p sx={{ color: `primary`, my: `5px` , textAlign: `center`}}>{date}</p>
      </div>
      <TagsCatContainer>
        <Card
          variant="category"
          sx={{ color: `white`, marginLeft: `0px`, p: `5px`, my: `2px` }}
        >
          {category}
        </Card>
        {tags.map((tag, index) => (
          <Card
            variant="tag"
            sx={{ p: `5px`, my: `2px`, mx: `3px`, borderWidth: `1px` }}
            key={index}
          >
            {tag}
          </Card>
        ))}
      </TagsCatContainer>
    </GridRow>
  );
};
