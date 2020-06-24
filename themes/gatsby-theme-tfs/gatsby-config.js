module.exports = {
  siteMetadata: {
    siteTitle: `tiagofsanchez`,
    siteTitleAlt: `Simple Blog - @tiagofsanchez/gatsby-theme-acmeblog`,
    siteHeadline: `Simple Blog - Gatsby Theme from tiagofsanchez`,
    siteUrl: `https://gatsby-tfs-acme-starter.netlify.app/`,
    siteDescription: ` We create content for the web - you know, that thing that lives on
    the cloud? Just kidding! This is a gatsby theme that you can use for
    share your cool work`,
    siteLanguage: `en`,
    siteImage: `./images/logo.png`,
    author: `tiagofsanchez`,
    navigation: [
      {
        title: `digital garden`,
        slug: `/blog`,
      },
      {
        title: `me`,
        slug: `/about`,
      },
    ],
    externalLinks: [
      {
        name: `LinkedIn`,
        url: `https://www.linkedin.com/in/tiagofsanchez/`,
      },
      {
        name: `Github`,
        url: `https://github.com/tiagofsanchez`,
      },
    ],
  },

  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve(`./src/components/Layout/layout`),
      },
    },
    {
      resolve: "gatsby-theme-acmeblog-data",
      options: {
        postTableOfContents: false,
      },
    },
  ],
};
