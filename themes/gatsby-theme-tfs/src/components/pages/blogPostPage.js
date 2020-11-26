/** @jsx jsx */
import { jsx } from "theme-ui";
import { MDXRenderer } from "gatsby-plugin-mdx";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import SEO from "../shared/seo";
import { BlogHeaderMax } from "../shared/blogPostHeader";
import AlternativePosts from "../shared/alternativePosts";
import useAcmeBlogConfig from "../../hooks/useAcmeBlogConfig";

const BlogContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 50px;
`;

const EditLink = styled.a`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-decoration: none;
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
  slug,
  alternatives,
  tableOfContentsArray
}) => {
  const blogHeader = {
    title,
    date,
    tags,
    category,
    slug,
    timeToRead,
    thumbnail,
    page: true,
  };

  const { githubUrl, postsContentPath , postTableOfContents } = useAcmeBlogConfig();
  const newSlug = slug.slice(6).slice(0, -1);
  const edit = `${githubUrl}${postsContentPath}/${newSlug}.md`;

  console.log(tableOfContentsArray)

  return (
    <BlogContainer>
      <SEO
        description={excerpt}
        title={title}
        image={thumbnail.childImageSharp.fluid.src}
        article={true}
      />

      <BlogHeaderMax {...blogHeader} />

      <div sx={{ variant: `layout.container` }}>
        {githubUrl && (
          <EditLink
            href={edit}
            sx={{ variant: `links.edit`, textAlign: `center` }}
            aria-label="Edit the post"
          >
            <span role="img" aria-label="pencil" sx={{ marginRight: `10px` }}>
              ✏️
            </span>
            edit
          </EditLink>
        )}
        <MDXRenderer>{body}</MDXRenderer>
      </div>
      <div sx={{ variant: `layout.blogHeader` }}>
        {alternatives.length !== 0 ? (
          <div>
            <hr sx={{ width: `50%` }} />
            <AlternativePosts alternatives={alternatives} category={category} />
          </div>
        ) : null}
      </div>
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
