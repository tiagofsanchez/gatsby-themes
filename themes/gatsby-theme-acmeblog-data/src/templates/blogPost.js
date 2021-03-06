import { graphql } from "gatsby";
import BlogPostPage from "../components/blogPostPage";

export default BlogPostPage;

export const blogPost = graphql`
  query post($slug: String!) {
    post: mdx(fields: { slug: { eq: $slug } }) {
      body
      tableOfContents
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
      excerpt
    }
    postsArray: allMdx(
      filter: { frontmatter: { title: { nin: "" } } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      nodes {
        excerpt
        timeToRead
        frontmatter {
          category
          title
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
