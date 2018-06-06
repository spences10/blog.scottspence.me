import axios from 'axios'
import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'
import { request } from 'graphql-request'

const GRAPHCMS_API =
  'https://api.graphcms.com/simple/v1/cjf55g4211ici0162l1bq479e'

const query = `
  {
    allPosts {
      id
      slug
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
  }
`

export default {
  getSiteData: () => ({
    title: 'blog.scottspence.me'
  }),
  getRoutes: async () => {
    const { allPosts, allAuthors } = await request(
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
        children: allPosts.map(post => ({
          path: `/${post.slug}`,
          component: 'src/containers/Post',
          getData: () => ({
            post
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
}
