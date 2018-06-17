import 'dotenv/config'
import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'
import { request } from 'graphql-request'
// import OfflinePlugin from 'offline-plugin'

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
    }
    allAuthors {
      id
      name
      avatar {
        handle
      }
      bibliography
    }
    allTags {
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
  getSiteData: () => ({
    title: 'blog.scottspence.me'
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
            prevTitle: allPosts[index + 1]
              ? allPosts[index + 1].title
              : '',
            prevPath: allPosts[index + 1]
              ? allPosts[index + 1].slug
              : '',
            prevIsPublished: allPosts[index + 1]
              ? allPosts[index + 1].isPublished
              : '',
            nextTitle: allPosts[index - 1]
              ? allPosts[index - 1].title
              : '',
            nextPath: allPosts[index - 1]
              ? allPosts[index - 1].slug
              : '',
            nextIsPublished: allPosts[index - 1]
              ? allPosts[index - 1].isPublished
              : '',
            post
          })
        }))
      },
      {
        path: '/all-tags',
        component: 'src/containers/AllTags',
        getData: () => ({
          allTags
        }),
        children: allTags.map((tag, index) => ({
          path: `/${tag.name}`,
          component: 'src/containers/Tag',
          getData: () => ({
            tag
          })
        }))
      },
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
            {renderMeta.styleTags}
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
