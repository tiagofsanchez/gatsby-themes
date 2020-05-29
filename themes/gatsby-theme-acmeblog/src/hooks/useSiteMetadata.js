import { graphql, useStaticQuery } from "gatsby";

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          siteHeadline
          siteDescription
          siteImage
          siteLanguage
          siteTitle
          siteTitleAlt
          navigation { 
            slug
            title
          }
          externalLinks { 
            name 
            url
          }
        }
      }
    }
  `);
  return data.site.siteMetadata;
};

export default useSiteMetadata