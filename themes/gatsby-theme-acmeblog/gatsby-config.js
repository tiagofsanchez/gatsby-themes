module.exports = {
  siteMetadata: {
    siteTitle: `ACME, not a barrista`,
    siteTitleAlt: `Simple Blog - @tiagofsanchez/gatsby-theme-acmeblog`,
    siteHeadline: `Simple Blog - Gatsby Theme from tiagofsanchez`,
    // siteUrl: ``,
    siteDescription: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and line highlighting.`,
    siteLanguage: `en`,
    siteImage: `./images/latte.png`,
    author: `tiagofsanchez`,
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    {
      resolve: "gatsby-plugin-layout", 
      options: { 
        component: require.resolve(`./src/components/layout`)
      }
    },
    {
      resolve: "gatsby-theme-acmeblog-data",
      options: {
        postsContentPath: "content/posts",
        postsContentThumbnail: "content/images",
        pagesContentPath: "content/pages",
        blogPath: "/blog",
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/tiagofsanchez/`,
          },
          {
            name: `Twitter`,
            url: `https://twitter.com/tiagofsanchez`,
          },
        ],
      },
    },
  ],
};
