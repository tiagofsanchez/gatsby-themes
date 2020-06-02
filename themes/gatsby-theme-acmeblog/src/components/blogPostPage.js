/** @jsx jsx */
import { jsx } from "theme-ui";
import { MDXRenderer } from "gatsby-plugin-mdx";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import useAcmeBlogConfig from '../hooks/useAcmeBlogConfig';


import BlogPostHeader from "./blogPostHeader";
import PostTableOfContents from "./postTableOfContents";

const PostContentContainer = styled.div`
  flex: 1 1 70%;
  white-space: normal;
  overflow: hidden;
`;

const Flex = styled.div`
  display: flex;
`;

const BlogPostPage = ({
  title,
  body,
  date,
  category,
  tags,
  tableOfContentsArray,
  slug,
  thumbnail,
}) => {
  const blogHeader = { title, date, tags, category, page: true };
  const { postTableOfContents } = useAcmeBlogConfig()

  return (
    <div>
      <BlogPostHeader {...blogHeader} />
      <Flex>
        <PostContentContainer>
          <MDXRenderer>{body}</MDXRenderer>
        </PostContentContainer>
        {postTableOfContents === true ? (
          <PostTableOfContents
            tableOfContentsArray={tableOfContentsArray}
            slug={slug}
          />
        ) : null}
      </Flex>
    </div>
  );
};

BlogPostPage.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  tableOfContentsArray: PropTypes.array.isRequired,
  slug: PropTypes.string.isRequired,
};

export default BlogPostPage;
