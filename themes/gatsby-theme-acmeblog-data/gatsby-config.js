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
        name: options.contentPath || "blog",
        path: options.contentPath || "blog",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: options.postThumbnail || "images",
        path: options.postThumbnail || "images",
      },
    },
  ],
});
