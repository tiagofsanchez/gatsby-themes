const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");
const { createFilePath } = require(`gatsby-source-filesystem`);
const _ = require("lodash");
const blogPostComponent = require.resolve("./src/templates/blogPost.js");
const tagPostsComponent = require.resolve("./src/templates/tagPosts.js");
const categoryPostsComponent = require.resolve(
  "./src/templates/categoryPosts.js"
);
const homePageComponent = require.resolve("./src/templates/homePage.js");
const allTagsComponent = require.resolve("./src/templates/allTags.js");
const otherPages = require.resolve("./src/templates/otherPages.js")

exports.onCreateNode = ({ node, actions, getNode }, options) => {
  const { createNodeField } = actions;
  const { postsContentPath, pagesContentPath } = options;
  //making sure this is only for Mdx nodes
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
    let basePath = "";
    if (options.basePath !== undefined) {
      basePath = options.basePath;
    }
    createNodeField({
      node,
      name: "slug",
      value: `${basePath}${slug}`,
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

  const { createPage } = actions
  const blogPostArray = results.data.allMdx.nodes;
  const pagesArray = results.data.pages.nodes;

  let basePath = "";
  if (options.basePath !== undefined) {
    basePath = options.basePath;
  }

  createPage({
    path: basePath || "/",
    component: homePageComponent,
  });

  createPage({
    path: `${basePath}/tags`,
    component: allTagsComponent,
  });

  pagesArray.forEach((node) => { 
    createPage({
      path: node.fields.slug, 
      component: otherPages,
      context: { slug: node.fields.slug }
    })
  })

  blogPostArray.forEach((node) => {
    createPage({
      path: node.fields.slug,
      component: blogPostComponent,
      context: { slug: node.fields.slug, basePath },
    });
  });

  blogPostArray.forEach((node) => {
    const category = node.frontmatter.category;
    createPage({
      path: `${basePath}/category/${_.kebabCase(category)}`,
      component: categoryPostsComponent,
      context: {
        category: node.frontmatter.category,
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
      path: `${basePath}/tags/${_.kebabCase(tag)}`,
      component: tagPostsComponent,
      context: { tag },
    });
  });
};

/*
Runs before Gatsby does things.
Checks if there is a content directory (blog) and the post thumbail directory
If not creates one for us
*/
exports.onPreBootstrap = ({ store }, options) => {
  const { program } = store.getState();
  const postsContentPath = options.postsContentPath || "content/posts";
  const dirPostsContentPath = path.join(program.directory, postsContentPath);
  if (!fs.existsSync(dirPostsContentPath)) {
    mkdirp.sync(dirPostsContentPath);
  }
  const postsContentThumbnail =
    options.postsContentThumbnail || "content/images";
  const dirPostContnentThumbnail = path.join(
    program.directory,
    postsContentThumbnail
  );
  if (!fs.existsSync(dirPostContnentThumbnail)) {
    mkdirp.sync(dirPostContnentThumbnail);
  }
  const pagesContentPath = options.pagesContentPath || "content/pages";
  const dirPagesContentPath = path.join(program.directory, pagesContentPath);
  if (!fs.existsSync(dirPagesContentPath)) {
    mkdirp.sync(dirPagesContentPath);
  }
};
