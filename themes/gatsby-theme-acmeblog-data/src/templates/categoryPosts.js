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
        timeToRead
        frontmatter {
          title
          tags
          date (formatString: "MMMM DD, YYYY")
          category
          thumbnail {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
`;

