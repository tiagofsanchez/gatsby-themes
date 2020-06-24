/** @jsx jsx */
import { jsx } from "theme-ui";
import { MDXRenderer } from "gatsby-plugin-mdx";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import useAcmeBlogConfig from "../../hooks/useAcmeBlogConfig";


import SEO from '../shared/seo'
import BlogPostHeader from "../shared/blogPostHeader";
import PostTableOfContents from "../shared/postTableOfContents";


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
  excerpt,
  date,
  category,
  tags,
  tableOfContentsArray,
  thumbnail,
}) => {
  const blogHeader = { title, date, tags, category, page: true };
  const { postTableOfContents } = useAcmeBlogConfig();
  console.log(thumbnail)
  return (
    <div>
      <SEO description={excerpt} title={title} image={thumbnail}/>
      <Flex>
        <PostContentContainer>
          <BlogPostHeader {...blogHeader} />
          <MDXRenderer>{body}</MDXRenderer>
        </PostContentContainer>
        {postTableOfContents === true &&
        tableOfContentsArray !== null &&
        tableOfContentsArray !== undefined ? (
          <PostTableOfContents tableOfContentsArray={tableOfContentsArray} />
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
