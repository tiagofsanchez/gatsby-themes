/** @jsx jsx */
import { jsx, Card } from "theme-ui";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import moment from "moment";
import Img from "gatsby-image";

const PostHeaderContainerMinimal = styled.div`
  padding: 10px;
  border-radius: 4px;
`;

const ThumbnailContainer = styled.div`
  width: ${(props) => (props.big ? "200px" : "30px")};
  margin: ${(props) => (props.big ? "auto" : null)};
  @media (max-width: 599px) {
    width: ${(props) => (props.small ? "30px" : "100px")};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 20px;
  align-items: center;
`;

const PostHeaderContainer = styled.div`
  width: 100%;
  padding: 40px;
  border-radius: 4px;
  @media (max-width: 599px) {
    padding: 40px 15px;
  }
`;

const TagsCatContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 599px) {
    display: none;
  }
`;

export const BlogHeaderMax = ({ title, date, tags, category, thumbnail }) => {
  return (
    <PostHeaderContainer
      sx={{
        variant: `layout.blogHeader`,
        bg: `hover`,
      }}
    >
      <ThumbnailContainer big={true}>
        <Img fluid={thumbnail.childImageSharp.fluid} />
      </ThumbnailContainer>
      <div>
        <h1 sx={{ my: `0px`, textAlign: `center` }}>{title}</h1>
        <p sx={{ color: `primary`, my: `5px`, textAlign: `center` }}>{date}</p>
      </div>
      <TagsCatContainer>
        <Card variant="category" sx={{ color: `white` }}>
          {category}
        </Card>
        {tags.map((tag, index) => (
          <Card variant="tag" key={index}>
            {tag}
          </Card>
        ))}
      </TagsCatContainer>
    </PostHeaderContainer>
  );
};

export const BlogHeaderMinimal = ({
  title,
  date,
  slug,
  timeToRead,
  thumbnail,
}) => {
  const newest = moment(new Date(date)) > moment().subtract(1, "months");
  return (
    <PostHeaderContainerMinimal
      sx={{ ":hover": { bg: `hover`, boxShadow: "inset 0 0 0 0" } }}
    >
      <Link
        style={{
          textDecoration: `none`,
          color: `inherit`,
          fontWeight: `normal`,
        }}
        to={slug}
        aria-label={`post title: ${title}`}
      >
        <Grid>
          <ThumbnailContainer small={true}>
            <Img fluid={thumbnail.childImageSharp.fluid} />
          </ThumbnailContainer>
          <div>
            <h2 sx={{ marginBottom: `3px` }}>{title}</h2>
            <p sx={{ color: `primary`, my: `5px` }}>
              {date} . {timeToRead} minutes
            </p>
          </div>
          {newest && <p sx={{ color: `highlight`, fontWeight: `900` }}>new</p>}
        </Grid>
      </Link>
    </PostHeaderContainerMinimal>
  );
};
