import 'dotenv/config'
import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'
import { request } from 'graphql-request'
// import OfflinePlugin from 'offline-plugin'
import ManifestPlugin from 'webpack-manifest-plugin'
import SWPrecacheWebpackPlugin from 'sw-precache-webpack-plugin'

const GRAPHCMS_API = process.env.API_URL

const env = process.env.NODE_ENV || 'development'

const query = `
  {
    allPosts (orderBy:dateAndTime_DESC) {
      isPublished
      slug
      dateAndTime
      updatedAt
      title
      content
      relatedTags {
        name
      }
    }
    allAuthors {
      id
      name
      avatar {
        handle
      }
      bibliography
    }
    allTags (orderBy:name_ASC){
      name
      blogPosts {
        title
        slug
        isPublished
      }
    }
  }
`

export default {
  siteRoot: 'https://blog.scottspence.me',
  extractCssChunks: true,
  inlineCss: true,
  // bundleAnalyzer: true,
  getSiteData: () => ({
    title: 'blog.scottspence.me',
    name: 'Scott',
    email: 'spences10apps@gmail.com',
    gitHub: 'https://github.com/spences10',
    twitter: 'https://twitter.com/ScottDevTweets',
    medium: 'https://medium.com/@spences10'
  }),
  getRoutes: async () => {
    const { allPosts, allAuthors, allTags } = await request(
      GRAPHCMS_API,
      query
    )
    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getData: () => ({
          allPosts
        }),
        children: allPosts.map((post, index) => ({
          path: `/${post.slug}`,
          component: 'src/containers/Post',
          getData: () => ({
            previousPost: {
              title: allPosts[index + 1]
                ? allPosts[index + 1].title
                : '',
              slug: allPosts[index + 1]
                ? allPosts[index + 1].slug
                : '',
              isPublished: allPosts[index + 1]
                ? allPosts[index + 1].isPublished
                : ''
            },
            nextPost: {
              title: allPosts[index - 1]
                ? allPosts[index - 1].title
                : '',
              slug: allPosts[index - 1]
                ? allPosts[index - 1].slug
                : '',
              isPublished: allPosts[index - 1]
                ? allPosts[index - 1].isPublished
                : ''
            },
            post
          })
        }))
      },
      {
        path: '/all-tags',
        component: 'src/containers/AllTags',
        getData: () => ({
          allTags
        })
        // children: allPosts.map(tag => ({
        //   path: `/all-tags/${tag.name}`,
        //   component: 'src/containers/Tag',
        //   getData: () => ({
        //     tag
        //   })
        // }))
      },
      // {
      //   path: '/tag',
      //   component: 'src/containers/Tag',
      //   getData: () => ({ allTags })
      // },
      {
        path: '/about',
        component: 'src/containers/About',
        getData: () => ({
          allAuthors
        })
      },
      {
        is404: true,
        component: 'src/containers/404'
      }
    ]
  },
  webpack: config => {
    config.plugins.push(
      new ManifestPlugin({ fileName: 'asset-manifest.json' })
    )
    config.plugins.push(
      new SWPrecacheWebpackPlugin({
        // By default, a cache-busting query parameter is appended to requests
        // used to populate the caches, to ensure the responses are fresh.
        // If a URL is already hashed by Webpack, then there is no concern
        // about it being stale, and the cache-busting can be skipped.
        dontCacheBustUrlsMatching: /\.\w{8}\./,
        filename: 'service-worker.js',
        logger(message) {
          if (message.indexOf('Total precache size is') === 0) {
            // This message occurs for every build and is a bit too noisy.
            return
          }
          if (message.indexOf('Skipping static resource') === 0) {
            // This message obscures real errors so we ignore it.
            return
          }
          console.log(message)
        },
        minify: true, // minify and uglify the script
        // navigateFallback: '/index.html',
        // navigateFallbackWhitelist: [/^(?!\/__).*/],
        // Don't precache sourcemaps (they're large) and build asset manifest:
        staticFileGlobsIgnorePatterns: [
          /\.map$/,
          /asset-manifest\.json$/
        ]
      })
    )
  },
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))
    meta.styleTags = sheet.getStyleElement()
    return html
  },
  Document: class CustomHtml extends Component {
    render() {
      const { Html, Head, Body, children, renderMeta } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            {/* <script async src="/assets/js/registerServiceWorker.js" /> */}
            {/* <script>
              require('offline-plugin/runtime').install()
            </script> */}
            <script
              async
              src="https://www.google-analytics.com/analytics.js"
            />
            <script async src="/assets/js/autotrack.custom.js" />
            {renderMeta.styleTags}
            <script
              async
              src="https://www.google-analytics.com/analytics.js"
            />
            <script async src="/assets/js/autotrack.custom.js" />
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  }
  // preact: true
  // webpack: config => {
  //   config.plugins.push(new OfflinePlugin())
  //   return config
  // }
  // paths: {
  //   prismCss: 'src/prism.css',
  //   prismJs: 'src/prism.js'
  // }
}
