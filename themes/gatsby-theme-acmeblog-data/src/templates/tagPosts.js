import { graphql } from "gatsby";
import TagPostsPage from "../components/tagPostsPage";

export default TagPostsPage;

export const tag = graphql`
  query tag($tag: String!) {
    postsOfTag: allMdx(
      filter: { frontmatter: { tags: { eq: $tag } } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      nodes {
        excerpt
        timeToRead
        frontmatter {
          title
          tags
          date(formatString: "MMMM DD, YYYY")
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
          readingTime {
            words
            time
            minutes
            text
          }
        }
      }
    }
  }
`;
