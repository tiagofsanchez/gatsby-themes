import { useStaticQuery, graphql } from "gatsby";

const useAllCategories = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(sort: { fields: frontmatter___category, order: ASC }) {
        group(field: frontmatter___category) {
          fieldValue
        }
      }
    }
  `);
  return data.allMdx.group;
};

export default useAllCategories;
