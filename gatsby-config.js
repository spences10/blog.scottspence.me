// const path = require(`path`)

const siteMetadata = {
  siteUrl: `https://blog.scottspence.me`,
  title: `blog.scottspence.me`,
  siteTitle: `blog.scottspence.me`,
  description: `Blog (learnings) of Scott Spence, father, husband 👨‍👩‍👧 Full stack web developer in the making 👨‍💻 Just In Time learner 👌 Byproduct of: coffee+excess carbs+lack of sleep. He/Him.`,
  titleTemplate: `%s | blog.scottspence.me`,
  twitterUsername: `@ScottDevTweets`,
  facebookAppID: ``,
  pages: [`tags`], //`about`, `contact`,
  nameContent: `Scott Spence - blog`,
  developerName: `Scott Spence`,
  developerUrl: `https.scottspence.me`,
  keywordsContent: `blog, web developer, javascript, react, learning, information, how to`,
  imageLink: `https://blog.scottspence.me/icons/icon-512x512.png`,
  faviconPng: `./src/images/favicon.png`,
  contact: [
    { name: `GitHub`, link: `https://github.com/spences10` },
    { name: `Medium`, link: `https://medium.com/@spences10` },
    { name: `Dev.to`, link: `https://dev.to/spences10` },
    { name: `Twitter`, link: `https://twitter.com/ScottDevTweets` },
    { name: `Email`, link: `mailto:spences10apps@gmail.com` }
  ],
  // this is for favicon and manifest
  backgroundColour: `#663399`,
  // this is for favicon and manifest
  themeColour: `#755f9f`,
  siteLanguage: `en-GB`,
  prismJsLanguages: [
    `language-bash`,
    `language-css`,
    `language-html`,
    `language-js`,
    `language-json`,
    `language-yaml`
  ]
}

module.exports = {
  siteMetadata: siteMetadata,
  mapping: {
    'Mdx.fields.featuredImage': `File.absolutePath`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `posts`
      }
    },
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          {
            resolve: `gatsby-remark-copy-linked-files`
          },
          {
            resolve: `gatsby-remark-smartypants`
          },
          // TODO: Replace with "mdx-component-autolink-header"
          {
            resolve: `gatsby-remark-autolink-headers`
          },
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: `_blank`,
              rel: `noopener`
            }
          }
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [
    //       `@weknow/gatsby-remark-twitter`,
    //       {
    //         resolve: `gatsby-remark-images`,
    //         options: {
    //           // It's important to specify the maxWidth (in pixels) of
    //           // the content container as this plugin uses this as the
    //           // base for generating different widths of each image.
    //           maxWidth: 590
    //         }
    //       },
    //       {
    //         resolve: `gatsby-remark-embed-video`,
    //         options: {
    //           related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
    //           noIframeBorder: true //Optional: Disable insertion of <style> border: 0
    //         }
    //       },
    //       {
    //         resolve: `gatsby-remark-prismjs`,
    //         options: {
    //           classPrefix: siteMetadata.prismJsLanguages
    //         }
    //       },
    //     ]
    //   }
    // },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: siteMetadata.faviconPng,
        // WebApp Manifest Configuration
        appName: siteMetadata.siteTitle,
        appDescription: siteMetadata.description,
        developerName: siteMetadata.developerName,
        developerURL: siteMetadata.developerUrl,
        dir: `auto`,
        lang: siteMetadata.siteLanguage,
        background: siteMetadata.backgroundColour,
        theme_color: siteMetadata.themeColour,
        display: `standalone`,
        orientation: `any`,
        start_url: `/?homescreen=1`,
        version: `1.0`,

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
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteMetadata.siteTitle,
        short_name: siteMetadata.siteTitle,
        start_url: `/`,
        background_color: siteMetadata.backgroundColour,
        theme_color: siteMetadata.themeColour,
        display: `minimal-ui`,
        // This path is relative to the root of the site.
        icon: siteMetadata.faviconPng
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // add to netlify Build environment variables
        trackingId: process.env.GATSBY_GA_TRACKING_ID,
        anonymize: false
      }
    },
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  data: edge.node.frontmatter.date,
                  url:
                    site.siteMetadata.siteUrl + edge.node.fields.path,
                  guid:
                    site.siteMetadata.siteUrl + edge.node.fields.path,
                  custom_elements: [
                    { 'content:encoded': edge.node.code.boy }
                  ]
                })
              })
            },
            query: `
            {
              allMdx(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___date] },
                filter: { frontmatter: { published: { eq: true } } }
              ) {
                edges {
                  node {
                    code {
                      body
                    }
                    fields { path }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            }
            `,
            output: '/rss.xml',
            title: `${siteMetadata.title} feed`
          }
        ]
      }
    }
  ]
}
