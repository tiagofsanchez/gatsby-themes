/** @jsx jsx */
import { jsx} from "theme-ui";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

import useAcmeBlogConfig from "../hooks/useAcmeBlogConfig";
import BlogPostListing from "./blogPostListing";

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const HomePage = ({ posts }) => {
  const { tagsPath, blogPath } = useAcmeBlogConfig();
  return (
    <div>
      <Flex>
        <h1>Blog</h1>
        <Link to={`${blogPath}${tagsPath}`} style={{ textDecoration: `none` }}>
          <h4
            sx={{ color: `primary`, margin: "0px" }}
            to={`${blogPath}${tagsPath}`}
          >
            All tags
          </h4>
        </Link>
      </Flex>
      <BlogPostListing posts={posts} />
    </div>
  );
};

HomePage.prototype = {
  posts: PropTypes.array.isRequired,
};

export default HomePage;
