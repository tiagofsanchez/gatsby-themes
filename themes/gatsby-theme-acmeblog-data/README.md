# gatsby-theme-acmeblog-data

The parent theme (that defines all the data needed) that will feed the `@gastby-theme-acmeblog` and, in a way, `@gatsby-theme-acme` (basically will be shadow acmeblog) themes with data. 

## Motivation

First of all I wanted to learn how to build [gatsby themes](https://www.gatsbyjs.org/docs/themes/), and there is not better way to learn than doing, secondly because I loved the idea of being able to separate data concerns with ui concerns and wanted to apply that to my projects. 

This is a very simple theme that takes care of all the data concerns from building a blog with gatsby using Mdx.


## Installation 

with npm

```
npm install gatsby-theme-acmeblog-data
```

with yarn 

```
yarn add gatsby-theme-acmeblog-data
```

## Usage


### Theme options

| key      |  default value|  description |
|----------|-------------|------|
| `blogPath` |  `/blog` | defines the url (slug) for the blog posts overview page |
| `postsContentPath` |    `content/posts`   |   location of all the posts files |
| `postsContentThumbnail` | `content/thumbnail` |    location of all the thumbnails images used in the posts |
|`pagesContentPath`| `content/pages`| location of other pages that you would like to build using `mdx`|
|`otherImagesContentPath`| `content/images` | location for any other images that you would like to post in your |
|`tagsPath`| `/tags`| defines the url (slug) for all existing tags, shown in a overview tags page and used for listing all posts with a certain tag (prepending it to the tag itself, e.g. `/blog/tags/yourtag`) |
|`categoryPath`|`/category` | defines the url (slug) used for listing all posts with a certain category (prepending it to the category itself, e.g. `/blog/category/yourcategory`)  |
|`postTableOfContents`|`false`| If you would like to have a table of contents in your posts page change it to `true`|
|`githubUrl`|``| in case you are using github and want to create an edit link for your posts |


### How to use theme options

In `gatsby-config.js` you will be able to define the options

```js
module.exports = { 
  plugins: [
    {
      resolve: "gatsby-theme-acmeblog-data",
      options: { 
        blogPath: "/anything", // the default will be /blog
        tagsPath: "/mytags", // the default will be /tags
        categoryPath: "/mycategory", // the default will be /category
        postsContentPath: "myblog/posts", // the default will be content/posts
        pagesContentPath: "myblog/pages", // the default will be content/pages
        otherImagesContentPath: "mysuperimages", // the default will be images
        postTableOfContents: true //the default is false,
        githuUrl: `https://github.com/tiagofsanchez/tiagofsanchez/blob/master/` // else defaults to '' and doesn't render
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
- thumbnail - in case you want to give the post a thumbnail


## Dev notes

There are a couple of things that I still need to do

- [ ] thumbnail is not totally implemented at `gatsby-theme-acmeblog`
- [ ] reading time for every posts
- [ ] Pagination implementation
- [ ] Next and previous post in the post page
- [ ] attached a PDF in a post
