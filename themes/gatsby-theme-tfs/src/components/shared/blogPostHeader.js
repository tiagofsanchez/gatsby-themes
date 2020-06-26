/** @jsx jsx */
import { jsx, Card } from "theme-ui";
import { Link } from "gatsby";
import styled from "@emotion/styled";

const PostHeaderContainer = styled.div`
  padding: 10px 20px;
  border-radius: 4px;
`;

const TagsCatContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px;
`;

//blogheader for the BLOG
export const BlogHeaderMinimal = ({
  title,
  date,
  excerpt,
  slug,
  timeToRead,
  thumbnail,
}) => {
  console.log(thumbnail);
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
        <h2 sx={{ marginBottom: `3px` }}>{title}</h2>
        <p sx={{ color: `primary`, my: `5px` }}>{date}</p>
        <p>{excerpt}</p>
      </Link>
    </PostHeaderContainer>
  );
};

// blog header for the post page
export const BlogHeaderMax = ({ title, date, tags, category, thumbnail }) => {
  console.log(thumbnail);
  return (
    <div>
      <h1 sx={{ my: `0px` }}>{title}</h1>
      <p sx={{ color: `primary`, my: `5px` }}>{date}</p>
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
    </div>
  );
};
