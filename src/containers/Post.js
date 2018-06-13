import React from 'react'
import { withRouteData } from 'react-static'
import Markdown from 'react-markdown'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Prism from 'prismjs'

import PostNav from '../components/PostNav'

import { nameContent } from '../siteMeta'

const PostWrapper = styled.div`
  margin: 0.5rem;
  padding: 0.5rem;
  background: ${({ theme }) => theme.foreground};
  border: 1px solid ${props => props.border};
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  img {
    max-width: 100%;
    max-height: 100%;
  }
  font-family: ${props => props.theme.fontBody};
  color: ${props => props.theme.fontDark};
`

const ContentWrapper = styled.div`
  margin: 0.25rem;
  padding: 0.5rem;
`

const PostHeader = styled.h1`
  margin: 0rem;
  padding: 0rem;
`

export default withRouteData(({ post }) => (
  <PostWrapper>
    <ContentWrapper>
      <article>
        <Helmet title={`${post.title} - ${nameContent}`} />
        <PostHeader>{post.title}</PostHeader>
        <Markdown source={post.content} escapeHtml={false} />
        <PostNav props={post} />
      </article>
    </ContentWrapper>
  </PostWrapper>
))
