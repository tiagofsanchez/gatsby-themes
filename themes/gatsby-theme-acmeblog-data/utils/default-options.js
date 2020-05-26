module.exports = (themeOptions) => {
  const blogPath = themeOptions.blogPath || `/blog`;
  const postsContentPath = themeOptions.postsContentPath || `content/posts`;
  const postsContentThumbnail =
    themeOptions.postsContentThumbnail || `content/images`;
  const pagesContentPath = themeOptions.pagesContentPath || `content/pages`;

  return {
    blogPath,
    postsContentPath,
    postsContentThumbnail,
    pagesContentPath,
  };
};
