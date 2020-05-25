module.exports = (options) => ({
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
        name: options.postsContentPath || "content/posts",
        path: options.postsContentPath || "content/posts",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: options.postsContentThumbnail || "content/images",
        path: options.postsContentThumbnail || "content/images",
      },
    },
    {
      resolve: "gatsby-source-filesystem", 
      options: { 
        name: options.pagesContentPath || "content/pages",
        path: options.pagesContentPath || "content/pages",
      },
    }
  ],
});
