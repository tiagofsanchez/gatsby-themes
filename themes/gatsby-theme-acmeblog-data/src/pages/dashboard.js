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
    catGroup: allMdx {
      group(field: frontmatter___category) {
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
          date
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

