import React from 'react'
import { withRouteData, Link } from 'react-static'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import { nameContent } from '../siteMeta'
import { Dump } from '../util/helpers'

const PageWrapper = styled.div`
  grid-area: m;
  /* height: 100vh; */
`

export default withRouteData(({ tag }) => {
  const { blogPosts } = tag
  return (
    <PageWrapper>
      {/* <Helmet title={`Posts relating to ${tag.name}`} /> */}
      {/* {console.log(blogPosts[0].slug)} */}
      {blogPosts.map((post, index) => {
        console.log(post.slug)
        return (
          <li key={index}>
            <Link to={post.slug}>{post.title}</Link>
          </li>
        )
      })}
      <Dump tag={tag} />
    </PageWrapper>
  )
})
