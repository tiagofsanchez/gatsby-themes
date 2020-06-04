const withDefaults = require(`./utils/default-options`)
const remarkSlug = require(`remark-slug`);

module.exports = (themeOptions) => {

  const options= withDefaults(themeOptions);

  return {
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.mdx`, `.md`],
        remarkPlugins: [remarkSlug],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: options.postsContentPath, 
        path: options.postsContentPath 
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: options.postsContentThumbnail, 
        path: options.postsContentThumbnail 
      },
    },
    {
      resolve: "gatsby-source-filesystem", 
      options: { 
        name: options.pagesContentPath,
        path: options.pagesContentPath
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: options.otherImagesContentPath, 
        path: options.otherImagesContentPath 
      },
    },
  ],
}};
