module.exports = {
  siteMetadata: {
    title: 'blog.scottspence.me'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/posts`,
        name: 'posts'
      }
    },
    'gatsby-transformer-remark'
  ]
}
