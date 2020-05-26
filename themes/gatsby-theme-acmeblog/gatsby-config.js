module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-acmeblog-data",
      options: { 
        postsContentPath: "content/posts",
        postsContentThumbnail: 'content/images',
        pagesContentPath: 'content/pages',
        blogPath:'/',
      }
    },
  ],
};
