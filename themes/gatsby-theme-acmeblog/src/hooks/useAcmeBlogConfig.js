import { graphql, useStaticQuery } from "gatsby";

const useAcmeBlogConfig = () => {
  const data = useStaticQuery(graphql`
    {
      acmeBlogConfig {
        blogPath
        otherImagesContentPath
        pagesContentPath
        postsContentPath
        postsContentThumbnail
        categoryPath
        tagsPath,
        postTableOfContents
      }
    }
  `);
  return data.acmeBlogConfig;
};

export default useAcmeBlogConfig;
