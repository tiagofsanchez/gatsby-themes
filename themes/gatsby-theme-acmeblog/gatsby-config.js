module.exports = {
  siteMetadata: {
    siteTitle: `ACME`,
    siteTitleAlt: `Simple Blog - @tiagofsanchez/gatsby-theme-acmeblog`,
    siteHeadline: `Simple Blog - Gatsby Theme from tiagofsanchez`,
    // siteUrl: ``,
    siteDescription: `A blogging theme with small aesthetics. Includes tags and categories support`,
    siteLanguage: `en`,
    siteImage: `./images/logo.png`,
    author: `tiagofsanchez`,
    navigation: [
      {
        title: `blog`,
        slug: `/blog`,
      },
      {
        title: `about`,
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
  
  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-layout", 
      options: { 
        component: require.resolve(`./src/components/layout`)
      }
    },
    {
      resolve: "gatsby-theme-acmeblog-data",
      options: { 
        postTableOfContents: true
      }
    },
  ],
};
