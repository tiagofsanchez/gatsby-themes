import { useStaticQuery, graphql } from "gatsby";

const useAllCategories = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(sort: { order: DESC, fields: frontmatter___date }) {
        group(field: frontmatter___category) {
          fieldValue
          nodes {
            frontmatter {
              title
            }
            slug
          }
        }
      }
    }
  `);
  return data.allMdx.group;
};

export default useAllCategories;
