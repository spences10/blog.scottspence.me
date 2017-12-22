module.exports = {
  siteMetadata: {
    title: `Scott Spence blog made with Gatsby Default Starter`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`
      }
    }
  ]
}
