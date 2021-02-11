/** @jsx jsx */
import { jsx } from "theme-ui";

const BlogPostHover = ({ children }) => {
  return (
    <div
      sx={{
        padding: `20px 10px`,
        borderRadius: 4, 
        ":hover": { bg: `hover`, boxShadow: "inset 0 0 0 0" },
      }}
    >
      {children}
    </div>
  );
};

export default BlogPostHover;
