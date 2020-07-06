/** @jsx jsx */
import { jsx } from "theme-ui";
import { MDXRenderer } from "gatsby-plugin-mdx";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import SEO from "../shared/seo";
import { BlogHeaderMax } from "../shared/blogPostHeader";
import { Link } from "gatsby";

const BlogContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 50px;
`;

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BlogPostPage = ({
  title,
  body,
  excerpt,
  date,
  category,
  tags,
  thumbnail,
  timeToRead,
  prevPostSlug,
  nextPostSlug,
}) => {
  const blogHeader = {
    title,
    date,
    tags,
    category,
    timeToRead,
    thumbnail,
    page: true,
  };

  console.log(prevPostSlug);
  console.log(nextPostSlug);
  return (
    <BlogContainer>
      <SEO
        description={excerpt}
        title={title}
        image={thumbnail.childImageSharp.fluid.src}
        article={true}
      />
      <BlogHeaderMax {...blogHeader} />
      <div>
        <MDXRenderer>{body}</MDXRenderer>
      </div>
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
    </BlogContainer>
  );
};

BlogPostPage.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
};

export default BlogPostPage;
