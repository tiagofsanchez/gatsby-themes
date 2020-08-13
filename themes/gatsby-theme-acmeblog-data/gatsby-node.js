const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");
const withDefaults = require(`./utils/default-options`)
const { createFilePath } = require(`gatsby-source-filesystem`);
const _ = require("lodash");
const blogPostComponent = require.resolve("./src/templates/blogPost.js");
const tagPostsComponent = require.resolve("./src/templates/tagPosts.js");
const categoryPostsComponent = require.resolve(
  "./src/templates/categoryPosts.js"
);
const homePageComponent = require.resolve("./src/templates/homePage.js");
const otherPages = require.resolve("./src/templates/otherPages.js");


//embeed the themeoptions in my graphql so that they can be queried
exports.sourceNodes =({actions, createContentDigest}, options) => { 
  const { createNode} = actions 
  const { 
    blogPath,
    postsContentPath,
    postsContentThumbnail,
    pagesContentPath,
    otherImagesContentPath,
    tagsPath, 
    categoryPath,
    postTableOfContents, 
    githubUrl
  } = withDefaults(options)

  const acmeBlogConfig = { 
    blogPath,
    postsContentPath,
    postsContentThumbnail,
    pagesContentPath,
    otherImagesContentPath, 
    tagsPath, 
    categoryPath,
    postTableOfContents,
    githubUrl
  }

  createNode({
    ...acmeBlogConfig,
    id: `@tfs/gatsby-theme-acmeblog-data-config`,
    parent: null,
    children: [],
    internal: {
      type: `ACMEBlogConfig`,
      contentDigest: createContentDigest(acmeBlogConfig),
      content: JSON.stringify(acmeBlogConfig),
      description: `Options for @tfs/gatsby-theme-acmeblog-data-config`,
    },
  })
}

exports.onCreateNode = ({ node, actions, getNode }, options) => {
  const { createNodeField } = actions;
  const { postsContentPath, pagesContentPath , blogPath } = withDefaults(options);
  //just for mdx
  if (node.internal.type !== `Mdx`) {
    return;
  }
  // Create a source field
  // And grab the sourceInstanceName to differentiate the different sources
  // In this case "postsContentPath" and "pagesContentPath"
  const fileNode = getNode(node.parent);
  const source = fileNode.sourceInstanceName;

  if (node.internal.type === "Mdx" && source === postsContentPath) {
    const slug = createFilePath({ node, getNode });

    createNodeField({
      node,
      name: "slug",
      value: `${blogPath}${slug}`,
    });
  }

  if (node.internal.type === "Mdx" && source === pagesContentPath) {
    const slug = createFilePath({ node, getNode });
    createNodeField({
      node,
      name: "slug",
      value: `${slug}`,
    });
  }
};

exports.createPages = async ({ actions, graphql, reporter }, options) => {
  const results = await graphql(`
    query {
      allMdx(
        filter: { frontmatter: { category: { ne: null }, tags: { ne: null } } }
      ) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            category
            tags
          }
        }
      }
      pages: allMdx(
        filter: { frontmatter: { category: { eq: null }, tags: { eq: null } } }
      ) {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `);

  if (results.errors) {
    reporter.panic("ERROR LOADING ACME MDX FILES", result, errors);
  }

  const { tagsPath, categoryPath, blogPath } = withDefaults(options);

  const { createPage } = actions;
  const blogPostArray = results.data.allMdx.nodes;
  const pagesArray = results.data.pages.nodes;

  createPage({
    path: blogPath,
    component: homePageComponent,
  });

  blogPostArray.forEach((node , index ) => {
    createPage({
      path: node.fields.slug,
      component: blogPostComponent,
      context: { 
        slug: node.fields.slug, 
        // prev: index=== 0 ? null : blogPostArray[index-1].fields.slug,
        // next: index === (blogPostArray.length - 1 ) ? null: blogPostArray[index+1].fields.slug
       },
    });
  });


    //gets all the tags in one Array
    const tagsArray = [];
    blogPostArray.forEach((node) => {
      node.frontmatter.tags.forEach((tag) => {
        if (tagsArray.includes(tag) === false) {
          tagsArray.push(tag);
        }
      });
    });
  
    tagsArray.forEach((tag) => {
      createPage({
        path: `${blogPath}${tagsPath}/${_.kebabCase(tag)}`,
        component: tagPostsComponent,
        context: { tag },
      });
    });
  
  blogPostArray.forEach((node) => {
    const category = node.frontmatter.category;

    createPage({
      path: `${blogPath}${categoryPath}/${_.kebabCase(category)}`,
      component: categoryPostsComponent,
      context: {
        category: node.frontmatter.category,
      },
    });
  });

  pagesArray.forEach((node) => {
    createPage({
      path: node.fields.slug,
      component: otherPages,
      context: { slug: node.fields.slug },
    });
  });
};

/*
Runs before Gatsby does things.
Checks if there is a content directory (posts, images for thumbnails and pages) and the post thumbail directory
If not creates one for us
*/
exports.onPreBootstrap = ({ store }, options) => {
  const { program } = store.getState();
  const { postsContentPath, postsContentThumbnail, pagesContentPath , otherImagesContentPath} = withDefaults(options);

  const dirPostsContentPath = path.join(program.directory, postsContentPath);
  if (!fs.existsSync(dirPostsContentPath)) {
    mkdirp.sync(dirPostsContentPath);
  }


  const dirPostContnentThumbnail = path.join(
    program.directory,
    postsContentThumbnail
  );
  if (!fs.existsSync(dirPostContnentThumbnail)) {
    mkdirp.sync(dirPostContnentThumbnail);
  }
  const dirPagesContentPath = path.join(program.directory, pagesContentPath);
  if (!fs.existsSync(dirPagesContentPath)) {
    mkdirp.sync(dirPagesContentPath);
  }

  const dirOtherImagesContentPath = path.join(program.directory, otherImagesContentPath);
  if (!fs.existsSync(dirOtherImagesContentPath)) {
    mkdirp.sync(dirOtherImagesContentPath);
  }

};
