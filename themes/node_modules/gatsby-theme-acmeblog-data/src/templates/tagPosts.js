import { graphql } from "gatsby";
import TagPostsPage from '../components/tagPostsPage';

export default TagPostsPage;

export const tag = graphql`
  query tag($tag: String!) {
    postsOfTag: allMdx(
      filter: { frontmatter: { tags: { eq: $tag } } }
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
