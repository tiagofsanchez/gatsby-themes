/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import { Link } from "gatsby";

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BlogPostNavigation = ({prevPostSlug , nextPostSlug}) => {
  return (
    <NavigationContainer>
      {prevPostSlug ? (
        <Link
          to={prevPostSlug}
          aria-label={`Previous post`}
          sx={{ variant: `links.secondary` }}
        >
          <h1>&larr;</h1>
        </Link>
      ) : (
        <div></div>
      )}
      {nextPostSlug && (
        <Link
          to={nextPostSlug}
          aria-label={`Previous post`}
          sx={{ variant: `links.secondary` }}
        >
          <h1>&rarr;</h1>
        </Link>
      )}
    </NavigationContainer>
  );
};

export default BlogPostNavigation
