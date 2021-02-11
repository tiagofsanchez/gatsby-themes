/** @jsx jsx */
import { jsx, Card } from "theme-ui";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import moment from "moment";
import Img from "gatsby-image";

import ReadMore from "./readMore";
import BlogPostHover from "../shared/blogPostHover";

const PostHeaderContainerMinimal = styled.div`
  border-radius: 4px;
  margin-top: 10px;
  margin-bottom: 10px;
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
  align-items: center;
  justify-content: center;
`;

export const BlogHeaderMax = ({ title, date, tags, timeToRead, thumbnail }) => {
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
        <p sx={{ color: `primary`, my: `5px`, textAlign: `center` }}>
          {date} . {timeToRead}
        </p>
      </div>
      <TagsCatContainer>
        {tags.map((tag, index) => (
          <Card variant="tag" key={index}>
            <p sx={{ fontSize: 2, m: `0` }}>{tag}</p>
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
  excerpt,
  timeToRead,
  thumbnail,
}) => {
  const newest = moment(new Date(date)) > moment().subtract(1, "months");
  return (
    <PostHeaderContainerMinimal>
      <BlogPostHover>
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
            <ThumbnailContainer small={true} sx={{ alignSelf: `baseline` }}>
              <Img fluid={thumbnail.childImageSharp.fluid} />
            </ThumbnailContainer>
            <div>
              <h2 sx={{ marginBottom: `3px`, mt: `-8px` }}>{title}</h2>
              <p sx={{ my: `5px`, opacity: `0.5` }}>
                {date} . {timeToRead}
              </p>
              <p sx={{ my: 2 }}>{excerpt}</p>
              <ReadMore />
            </div>
            {newest && (
              <p
                sx={{
                  color: `highlight`,
                  fontWeight: `900`,
                  alignSelf: `flex-start`,
                }}
              >
                new
              </p>
            )}
          </Grid>
        </Link>
      </BlogPostHover>
    </PostHeaderContainerMinimal>
  );
};
