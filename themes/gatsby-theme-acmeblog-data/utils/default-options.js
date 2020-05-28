module.exports = (themeOptions) => {
  const blogPath = themeOptions.blogPath || `/blog`;
  const postsContentPath = themeOptions.postsContentPath || `content/posts`;
  const postsContentThumbnail =
    themeOptions.postsContentThumbnail || `content/images`;
  const pagesContentPath = themeOptions.pagesContentPath || `content/pages`;
  const otherImagesContentPath = themeOptions.otherImagesContentPath || `images`
  const tagsPath = themeOptions.tagsPath || `/tags`
  const categoryPath = themeOptions.categoryPath || `/category`

  return {
    blogPath,
    postsContentPath,
    postsContentThumbnail,
    pagesContentPath,
    otherImagesContentPath,
    tagsPath,
    categoryPath
  };
};
