// const path = require(`path`)

const siteMetadata = {
  siteUrl: `https://blog.scottspence.me`,
  title: `blog.scottspence.me`,
  siteTitle: `blog.scottspence.me`,
  description: `Blog (learnings) of Scott Spence, father, husband 👨‍👩‍👧 Full stack web developer in the making 👨‍💻 Just In Time learner 👌 Byproduct of: coffee+excess carbs+lack of sleep. He/Him.`,
  titleTemplate: `%s | blog.scottspence.me`,
  twitterUsername: `@spences10`,
  facebookAppID: ``,
  pages: [`tags`], //`about`, `contact`,
  nameContent: `Scott Spence - blog`,
  developerName: `Scott Spence`,
  developerUrl: `https://scottspence.me`,
  imageLink: `https://blog.scottspence.me/icons/icon-512x512.png`,
  faviconPng: `./static/favicon.png`,
  contact: [
    { name: `GitHub`, link: `https://ss10.dev/git` },
    {
      name: `YouTube`,
      link: `https://ss10.dev/yt`,
    },
    { name: `Dev.to`, link: `https://ss10.dev/to` },
    { name: `Twitter`, link: `https://ss10.dev/twitter` },
    {
      name: `LinkedIn`,
      link: `https://ss10.dev/li`,
    },
    { name: `Email`, link: `mailto:spences10apps@gmail.com` },
  ],
  // this is for favicon and manifest
  backgroundColour: `#663399`,
  // this is for favicon and manifest
  themeColour: `#755f9f`,
  siteLanguage: `en-GB`,
  siteLocale: `en_gb`,
  lastBuildDate: new Date(Date.now()).toLocaleDateString(),
};

module.exports = {
  siteMetadata: siteMetadata,
  // mapping: {
  //   'Mdx.fields.featuredImage': `File.absolutePath`
  // },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-twitter`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        // defaultLayouts: { default: path.resolve('./src/components/Layout.js') },
        gatsbyRemarkPlugins: [
          `gatsby-remark-embed-video`,
          `gatsby-remark-code-titles`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.5rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: `_blank`,
              rel: `noopener`,
            },
          },
        ],
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `posts`,
      },
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
        icon: siteMetadata.faviconPng,
      },
    },
    `gatsby-plugin-offline`,
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
                    { 'content:encoded': edge.node.html },
                  ],
                });
              });
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
                    html
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
            title: `${siteMetadata.title} feed`,
          },
        ],
      },
    },
  ],
};
