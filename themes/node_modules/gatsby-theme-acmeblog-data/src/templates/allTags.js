import { graphql } from 'gatsby'; 
import AllTagsPage from '../components/allTagsPage'; 

export default AllTagsPage

export const query = graphql`
  {
    allMdx(sort: {fields: frontmatter___tags, order: ASC}) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
