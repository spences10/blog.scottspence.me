const config = require('./data/siteConfig')

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    siteUrl: config.siteUrl,
    contact: {
      github: config.contact.github,
      medium: config.contact.medium,
      devto: config.contact.devto,
      twitter: config.contact.twitter
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
          },
          'gatsby-remark-autolink-headers'
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: config.faviconPng,
        // WebApp Manifest Configuration
        appName: config.siteTitle,
        appDescription: config.descriptionContent,
        developerName: config.developerName,
        developerURL: config.developerUrl,
        dir: 'auto',
        lang: config.siteLanguage,
        background: config.backgroundColour,
        theme_color: config.themeColour,
        display: 'standalone',
        orientation: 'any',
        start_url: '/?homescreen=1',
        version: '1.0',

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitle,
        start_url: '/',
        background_color: config.backgroundColour,
        theme_color: config.themeColour,
        display: 'minimal-ui',
        icon: config.faviconPng // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-offline'
  ]
}
