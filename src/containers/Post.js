import React from 'react'
import { withRouteData } from 'react-static'
import Markdown from 'react-markdown'
import Helmet from 'react-helmet'

import { nameContent } from '../siteMeta'

export default withRouteData(({ post }) => (
  <article>
    <Helmet title={`${post.title} - ${nameContent}`} />
    <h1>{post.title}</h1>
    <Markdown source={post.content} escapeHtml={false} />
  </article>
))
