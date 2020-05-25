import { graphql } from "gatsby";
import CategoryPostsPage from '../components/categoryPostsPage';

export default CategoryPostsPage;

export const category = graphql`
  query category($category: String!) {
    postsOfCategory: allMdx(
      filter: { frontmatter: { category: { eq: $category } } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      nodes {
        excerpt
        frontmatter {
          title
          tags
          date
          category
        }
        fields {
          slug
        }
      }
    }
  }
`;

