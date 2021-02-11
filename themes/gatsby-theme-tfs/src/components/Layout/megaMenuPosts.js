/** @jsx jsx */
import { jsx } from "theme-ui";

import useAcmeBlogConfig from "../../hooks/useAcmeBlogConfig";
import MenuLink from "./menuLink";

const _ = require("lodash");

const MegaMenuPosts = ({ category, closeMenu }) => {
  const { fieldValue, nodes } = category;
  const { blogPath, categoryPath } = useAcmeBlogConfig();
  return (
    <div>
      <h3>{fieldValue}</h3>
      {nodes.slice(0, 4).map((post) => (
        <p key={post.frontmatter.title}>{post.frontmatter.title}</p>
      ))}
      <MenuLink
        closeMenu={closeMenu}
        link={`${blogPath}${categoryPath}/${_.kebabCase(fieldValue)}`}
        text={`all about ${_.kebabCase(fieldValue)}`}
      />
    </div>
  );
};

export default MegaMenuPosts;
