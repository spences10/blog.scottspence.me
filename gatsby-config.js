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
        path: `${__dirname}/blog`,
        name: 'posts'
      }
    },
    'gatsby-transformer-remark'
  ]
}
