require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Scott Spence - blog',
    author: 'Scott Spence'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-'
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
              linkImagesToOriginal: false
            }
          },
          {
            resolve: 'gatsby-plugin-favicon',
            options: {
              logo: './src/img/favicon.png',
              injectHTML: true,
              icons: {
                android: true,
                appleIcon: true,
                appleStartup: true,
                coast: false,
                favicons: true,
                firefox: true,
                twitter: false,
                yandex: false,
                windows: false
              }
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GATSBY_GA_TRACKING_ID,
        anonymize: false
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'blog.scottspence.me',
        short_name: 'blog.scottspence.me',
        start_url: '/',
        background_color: '#f7f0eb', // #755f9f
        theme_color: '#755f9f',
        display: 'minimal-ui',
        icon: 'src/img/favicon.png' // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-eslint',
    {
      resolve: 'gatsby-plugin-purify-css',
      options: {
        /* Defaults */
        styleId: 'gatsby-inlined-css',
        purifyOptions: {
          info: true,
          minify: true
        }
      }
    }
  ]
}
