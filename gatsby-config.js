const path = require(`path`)

module.exports = {
  // metadata
siteMetadata:{
title: ` Blog Ricky noviansah`,
author: `Ricky Brainware`,
description: `Web Blog Ricky noviansyah dengan Framework Gatsbyjs.`
  },
  // plugins
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          posts: require.resolve("./src/components/blog-post-layout.js"),
          default: require.resolve("./src/components/layout.js"),
      },
    },
  },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
  ],
}