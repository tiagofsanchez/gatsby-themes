# gatsby-theme-acmeblog

My blog theme.

This theme is leveraging `gatsby-theme-acmeblog-data` that is handling all the data concerns for us. Here we are "receiving" that data, shadowing `gatsby-theme-acmeblog-data` and styling the different components using `theme-ui`.   

## Installation 

with npm

```
npm install gatsby-theme-tfs
```

with yarn 

```
yarn add gatsby-theme-tfs
```

## Usage


### Theme options

| key      |  default value|  description |
|----------|-------------|------|
| `blogPath` |  `/blog` | defines the url (slug) for the blog posts overview page |
| `postsContentPath` |    `content/posts`   |   location of all the posts files |
| `postsContentThumbnail` | `content/images` |    location of all the thumbnails images used in the posts |
|`pagesContentPath`| `content/pages`| location of other pages that you would like to build using `mdx`|
|`otherImagesContentPath`| `images` | location for any other images that you would like to post in your |
|`tagsPath`| `/tags`| defines the url (slug) for all existing tags, shown in a overview tags page and used for listing all posts with a certain tag (prepending it to the tag itself, e.g. `/blog/tags/yourtag`) |
|`categoryPath`|`/category` | defines the url (slug) used for listing all posts with a certain category (prepending it to the category itself, e.g. `/blog/category/yourcategory`)  |
|`postTableOfContents`|`false`| If you would like to have a table of contents in your posts page change it to `true`|


### How to use theme options

In `gatsby-config.js` you will be able to define the options

```js
module.exports = { 
  plugins: [
    {
      resolve: "gatsby-theme-tfs",
      options: { 
        blogPath: "/anything", // the default will be /blog
        tagsPath: "/mytags", // the default will be /tags
        categoryPath: "/mycategory", // the default will be /category
        postsContentPath: "myblog/posts", // the default will be content/posts
        pagesContentPath: "myblog/pages", // the default will be content/pages
        otherImagesContentPath: "mysuperimages", // the default will be images
        postTableOfContents: true //the default is false
      }
    },
  ],
};

```

## How to use Mdx for your posts

### Url (slug) of your posts

This will be automatically generated for you and it will be the name of the mdx file created 

The frontmatter will need to have the following structure 

```mdx
---
title: "My firstpost"
date: "2020-05-21"
category: Mdx  
tags: 
    - post
    - mdx
    - gatsby
thumbnail:  ../images/gatsby-icon.png  
---
```

- title - will be the title of the blog post
- date - will be the date that will be shown in the blog post; 
- category - defines the category of this post
- tags - the tags that you want this particular post to have
- thumbnail - for the thumbnail of the post



## Additional configuration
In addition to the theme options the `siteMetadata` object is extremely useful. In our `gatsby-config.js` you will have the following: 

```js
siteMetadata: {
    siteTitle: `tiagofsanchez`,
    siteTitleAlt: `Simple Blog - gatsby-theme-tfs`,
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

```


