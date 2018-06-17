import React from 'react'
import { withRouteData } from 'react-static'
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
  console.log('=====================')
  console.log(blogPosts)
  console.log('=====================')
  return (
    <PageWrapper>
      {/* <Helmet title={`Posts relating to ${tag.name}`} /> */}

      {console.log(typeof tag)}
      <Dump tag={tag} />
    </PageWrapper>
  )
})
