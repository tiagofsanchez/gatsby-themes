module.exports =  {
  
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
          slug: `/anything`,
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
      {
        resolve: "gatsby-theme-tfs",
        options: { 
          blogPath: "/anything", // the default will be /blog
          tagsPath: "/mytags", // the default will be /tags
          categoryPath: "/mycategory", // the default will be /category
          postsContentPath: "myblog/posts", // the default will be content/posts
          pagesContentPath: "myblog/pages", // the default will be content/pages
          postsContentThumbnail: "myblog/thumbnails", // the default will be content/thumbnails
          otherImagesContentPath: "mysuperimages", // the default will be images
          postTableOfContents: false, //the default is true
          githubUrl: "https://github.com/tiagofsanchez/tiagofsanchez/blob/master/", // else defaults to '' and doesn't render
          gardenStartYear: 2021 // else it will default to 2019
        },
      }
    ],
  }
