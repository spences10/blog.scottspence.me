module.exports = {
  siteMetadata: {
    title: 'blog.scottspence.me',
    contact: {
      github: 'https://github.com/spences10',
      medium: 'https://medium.com/@spences10',
      devto: 'https://dev.to/spences10',
      twitter: 'https://twitter.com/ScottDevTweets'
    }
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
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590
            }
          }
        ]
      }
    }
  ]
}
