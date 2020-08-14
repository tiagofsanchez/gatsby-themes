import { graphql } from "gatsby";
import DashboardPage from "../components/dashboardPage";


export default DashboardPage;

export const query = graphql`
  {
    tagGroup: allMdx {
      group(field: frontmatter___tags) {
        field
        fieldValue
        totalCount
      }
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

