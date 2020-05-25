const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");
const { createFilePath } = require(`gatsby-source-filesystem`);
const _ = require("lodash");
const blogPostComponent = require.resolve("./src/templates/blogPost.js");
const tagPostsComponent = require.resolve("./src/templates/tagPosts.js");
const categoryPostsComponent = require.resolve("./src/templates/categoryPosts.js");
const homePageComponent = require.resolve("./src/templates/homePage.js");
const allTagsComponent = require.resolve("./src/templates/allTags.js")

exports.createPages = async ({ actions, graphql, reporter }, options) => {
  
  const results = await graphql(`
    query {
      allMdx {
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
    }
  `);

  let basePath = "";
  if (options.basePath !== undefined) {
    basePath = options.basePath;
  }

  if (results.errors) {
    reporter.panic("ERROR LOADING ACME MDX FILES", result, errors);
  }
  const blogPostArray = results.data.allMdx.nodes;

  actions.createPage({
    path: basePath || "/", 
    component: homePageComponent
  })

  actions.createPage({
    path: "/tags",
    component: allTagsComponent 
  })

  blogPostArray.forEach((node) => {
    actions.createPage({
      path: node.fields.slug,
      component: blogPostComponent,
      context: { slug: node.fields.slug , basePath},
    });
  });

  blogPostArray.forEach((node) => {
    const category = node.frontmatter.category;
    actions.createPage({
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
    actions.createPage({
      path: `${basePath}/tags/${_.kebabCase(tag)}`,
      component: tagPostsComponent,
      context: { tag },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }, options) => {
  const { createNodeField } = actions;
  if (node.internal.type === "Mdx") {
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
};

/*
Runs before Gatsby does things.
Checks if there is a content directory (blog) and the post thumbail directory
If not creates one for us
*/
exports.onPreBootstrap = ({ store }, options) => {
  const { program } = store.getState();
  const contentPath = options.contentPath || "blog";
  const dirBlog = path.join(program.directory, contentPath);
  if (!fs.existsSync(dirBlog)) {
    mkdirp.sync(dirBlog);
  }
  const postThumbnail = options.postThumbnail || "images"; 
  const dirPostThumbnail = path.join(program.directory, postThumbnail);
  if (!fs.existsSync(dirPostThumbnail)) {
    mkdirp.sync(dirPostThumbnail);
  }
};
