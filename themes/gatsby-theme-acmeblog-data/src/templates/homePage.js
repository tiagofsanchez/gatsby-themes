import { graphql } from "gatsby";
import HomePage from "../components/homePage";

export default HomePage;

export const allBlogposts = graphql`
  query allMyPosts {
    posts: allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        excerpt
        fields {
          slug
        }
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
      }
    }
  }
`;
