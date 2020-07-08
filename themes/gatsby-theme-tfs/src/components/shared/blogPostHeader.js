/** @jsx jsx */
import { jsx, Card } from "theme-ui";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import moment from "moment";
import Img from "gatsby-image";

const PostHeaderContainer = styled.div`
  padding: 10px;
  border-radius: 4px;
`;

const ThumbnailContainer = styled.div`
  width: ${(props) => (props.big ? "200px" : "35px")};
  margin: ${(props) => (props.big ? "auto" : null)};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 20px;
  align-items: center;
`;

const GridRow = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-gap: 15px;
`;

const TagsCatContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center
`;

export const BlogHeaderMinimal = ({
  title,
  date,
  slug,
  timeToRead,
  thumbnail,
}) => {
  const newest = moment(new Date(date)) > moment().subtract(1, "months");

  return (
    <PostHeaderContainer
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
          <ThumbnailContainer>
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
    </PostHeaderContainer>
  );
};

export const BlogHeaderMax = ({ title, date, tags, category, thumbnail , slug }) => {
  const newSlug = slug.slice(6).slice(0,-1)
  console.log(`https://github.com/tiagofsanchez/tiagofsanchez/blob/master/content/posts/${newSlug}.md`);
  return (
    <GridRow>
      <ThumbnailContainer big={true}>
        <Img fluid={thumbnail.childImageSharp.fluid} />
      </ThumbnailContainer>
      <div>
        <h1 sx={{ my: `0px`, textAlign: `center` }}>{title}</h1>
        <p sx={{ color: `primary`, my: `5px`, textAlign: `center` }}>{date}</p>
      </div>
      <TagsCatContainer>
        <Card
          variant="category"
          sx={{ color: `white` }}
        >
          {category}
        </Card>
        {tags.map((tag, index) => (
          <Card
            variant="tag"
            key={index}
          >
            {tag}
          </Card>
        ))}
      </TagsCatContainer>
    </GridRow>
  );
};
