module.exports = {
  siteMetadata: {
    siteTitle: `tiagofsanchez`,
    siteTitleAlt: `Simple Blog - @tiagofsanchez/gatsby-theme-acmeblog`,
    siteHeadline: `Simple Blog - Gatsby Theme from tiagofsanchez`,
    siteUrl: `https://gatsby-tfs-acme-starter.netlify.app/`,
    siteDescription: ` Learning to code, writing about it and putting ✒️'pen to paper' on stuff that I like to do and think about!`,
    siteLanguage: `en`,
    siteImage: `./images/logo.png`,
    author: `tiagofsanchez`,
    navigation: [
      {
        title: `me`,
        slug: `/about`,
      },
      {
        title: `articles`,
        slug: `/blog`,
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
      resolve: "gatsby-theme-tfs",
      options: {
        postTableOfContents: false,
      },
    },
  ],
};
