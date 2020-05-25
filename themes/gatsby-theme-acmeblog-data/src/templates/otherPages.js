import { graphql } from "gatsby";
import OtherPages from "../components/otherPages";

export default OtherPages;

export const pages = graphql`
  query pages($slug: String!) {
    page: mdx(fields: { slug: { eq: $slug } }) {
      body
      fields {
        slug
      }
    }
  }
`;
