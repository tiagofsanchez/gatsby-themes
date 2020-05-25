module.exports = [{
      plugin: require('../../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":800},
    },{
      plugin: require('../../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"extensions":[".mdx",".md"],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-images","options":{"maxWidth":1200}}]},
    }]
