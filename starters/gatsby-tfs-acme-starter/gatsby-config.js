module.exports = {
    siteMetadata: {
      siteTitle: `ACME`,
      siteTitleAlt: `Simple Blog - gatsby-theme-acmeblog`,
      siteHeadline: `Simple Blog - gatsby theme from tiagofsanchez`,
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
          name: `Github`,
          url: `https://github.com/tiagofsanchez`,
        },
      ],
    },
      plugins: [
        {
          resolve: "gatsby-theme-acmeblog",
          options: {
            postTableOfContents: true,
          },
        },
      ],
    };
    