module.exports = (options) =>  {
  
  return {
    siteMetadata: {
      siteTitle: `tiagofsanchez`,
      siteTitleAlt: `digital garden - @tiagofsanchez/gatsby-theme-tfs`,
      siteHeadline: `digital garden - Gatsby Theme from tiagofsanchez`,
      siteUrl: `https://www.tiagofsanchez.com/`,
      siteDescription: ` Learning to code, writing about it and putting ✒️'pen to paper' on stuff that I like to do and think about!`,
      siteLanguage: `en`,
      siteImage: `./images/logo.png`,
      author: `tiagofsanchez`,
      navigation: [
        {
          title: `Digital garden`,
          slug: `/blog`,
        },
        {
          title: `Me`,
          slug: `/about`,
        },
      ],
      externalLinks: [
        {
          name: `Github`,
          url: `https://github.com/tiagofsanchez`,
        },
        {
          name: `LinkedIn`,
          url: `https://www.linkedin.com/in/tiagofsanchez/`,
        },
        {
          name: `Instagram`,
          url: `https://www.instagram.com/copytiago/`,
        },
      ],
    },

    plugins: [
      `@pauliescanlon/gatsby-mdx-embed`,
      `gatsby-plugin-catch-links`,
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
        options,
      },
    ],
  }};
