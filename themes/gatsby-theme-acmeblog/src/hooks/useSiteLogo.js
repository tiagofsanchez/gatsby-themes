import { useStaticQuery, graphql } from "gatsby"

const useSiteLogo = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "logo.png"}) {
        publicURL
      }
    }
  `)
  return data.file.publicURL
}

export default useSiteLogo
