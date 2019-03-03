const siteMetadata = {
  siteUrl: 'https://blog.scottspence.me',
  title: 'blog.scottspence.me',
  siteTitle: 'blog.scottspence.me',
  description:
    'Blog (learnings) of Scott Spence, father, husband 👨‍👩‍👧 Full stack web developer in the making 👨‍💻 Just In Time learner 👌 Byproduct of: coffee+excess carbs+lack of sleep. He/Him.',
  titleTemplate: '%s | blog.scottspence.me',
  twitterUsername: '@ScottDevTweets',
  facebookAppID: '',
  pages: ['tags'], //'about', 'contact',
  nameContent: 'Scott Spence - blog',
  developerName: 'Scott Spence',
  developerUrl: 'https.scottspence.me',
  keywordsContent:
    'blog, web developer, javascript, react, learning, information, how to',
  imageLink: 'https://blog.scottspence.me/icons/icon-512x512.png',
  faviconPng: './src/images/favicon.png',
  contact: [
    { name: 'GitHub', link: 'https://github.com/spences10' },
    { name: 'Medium', link: 'https://medium.com/@spences10' },
    { name: 'Dev.to', link: 'https://dev.to/spences10' },
    { name: 'Twitter', link: 'https://twitter.com/ScottDevTweets' },
    { name: 'Email', link: 'mailto:spences10apps@gmail.com' }
  ],
  // this is for favicon and manifest
  backgroundColour: '#663399',
  // this is for favicon and manifest
  themeColour: '#755f9f',
  siteLanguage: 'en-GB',
  prismJsLanguages: [
    'language-bash',
    'language-css',
    'language-html',
    'language-js',
    'language-json',
    'language-yaml'
  ]
}

module.exports = {
  siteMetadata: siteMetadata,
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
      resolve: 'gatsby-mdx',
      options: {
        extensions: [".mdx", ".md"]
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-autolink-headers',
          'gatsby-remark-copy-linked-files',
          '@weknow/gatsby-remark-twitter',
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590
            }
          },
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true //Optional: Disable insertion of <style> border: 0
            }
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: siteMetadata.prismJsLanguages
            }
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noopener'
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: siteMetadata.faviconPng,
        // WebApp Manifest Configuration
        appName: siteMetadata.siteTitle,
        appDescription: siteMetadata.description,
        developerName: siteMetadata.developerName,
        developerURL: siteMetadata.developerUrl,
        dir: 'auto',
        lang: siteMetadata.siteLanguage,
        background: siteMetadata.backgroundColour,
        theme_color: siteMetadata.themeColour,
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
        name: siteMetadata.siteTitle,
        short_name: siteMetadata.siteTitle,
        start_url: '/',
        background_color: siteMetadata.backgroundColour,
        theme_color: siteMetadata.themeColour,
        display: 'minimal-ui',
        // This path is relative to the root of the site.
        icon: siteMetadata.faviconPng
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        // add to netlify Build environment variables
        trackingId: process.env.GATSBY_GA_TRACKING_ID,
        anonymize: false
      }
    },
    'gatsby-plugin-remove-serviceworker',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-catch-links',
    // this has to stay at the end of the array
    'gatsby-plugin-netlify'
  ]
}
