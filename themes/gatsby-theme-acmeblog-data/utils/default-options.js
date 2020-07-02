module.exports = (themeOptions) => {
  const blogPath = themeOptions.blogPath || `/blog`;
  const postsContentPath = themeOptions.postsContentPath || `content/posts`;
  const postsContentThumbnail =
    themeOptions.postsContentThumbnail || `content/thumbnails`;
  const pagesContentPath = themeOptions.pagesContentPath || `content/pages`;
  const otherImagesContentPath = themeOptions.otherImagesContentPath || `content/images`
  const tagsPath = themeOptions.tagsPath || `/tags`
  const categoryPath = themeOptions.categoryPath || `/category`
  const postTableOfContents = themeOptions.postTableOfContents || false

  return {
    blogPath,
    postsContentPath,
    postsContentThumbnail,
    pagesContentPath,
    otherImagesContentPath,
    tagsPath,
    categoryPath,
    postTableOfContents
  };
};
