require('dotenv').config({
  path: '.env'
})

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
          },
          {
            resolve: 'gatsby-source-graphcms',
            options: {
              endpoint: process.env.GRAPHCMS_ID,
              token: process.env.GRAPHCMS_TOKEN,
              query: require('./gatsby/configQuery')
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-87264973-3',
        anonymize: false
      }
    }
  ]
}
