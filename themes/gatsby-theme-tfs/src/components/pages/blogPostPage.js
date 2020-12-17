/** @jsx jsx */
import { jsx } from "theme-ui";
import { MDXRenderer } from "gatsby-plugin-mdx";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import SEO from "../shared/seo";
import { BlogHeaderMax } from "../shared/blogPostHeader";
import AlternativePosts from "../shared/alternativePosts";
import useAcmeBlogConfig from "../../hooks/useAcmeBlogConfig";
import TableOfContents from "../shared/tableOfContents";

const BlogContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 50px;
`;

const EditLink = styled.a`
  display: flex;
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
  tableOfContentsArray,
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

  const {
    githubUrl,
    postsContentPath,
    postTableOfContents,
  } = useAcmeBlogConfig();
  const newSlug = slug.slice(6).slice(0, -1);
  const edit = `${githubUrl}${postsContentPath}/${newSlug}.md`;

  return (
    <BlogContainer>
      <SEO
        description={excerpt}
        title={title}
        image={thumbnail.childImageSharp.fluid.src}
        article={true}
      />
      <div>
        <BlogHeaderMax {...blogHeader} />

        <div sx={{ variant: `layout.container` }}>
          {postTableOfContents && (
            <TableOfContents tableOfContentsArray={tableOfContentsArray} />
          )}
          {githubUrl && (
            <EditLink
              href={edit}
              sx={{ variant: `links.edit`, textAlign: `center` }}
              aria-label="Edit the post"
            >
              <span
                role="img"
                aria-label="pencil"
                sx={{ marginRight: `15px`, marginLeft: `10px` }}
              >
                ✏️
              </span>
              edit
            </EditLink>
          )}
        </div>
        <div sx={{ variant: `layout.container` }}>
          <MDXRenderer sx={{ variant: `layout.container` }}>{body}</MDXRenderer>
        </div>
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
