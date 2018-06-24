import React from 'react'
import { withRouteData, Link } from 'react-static'
import styled from 'styled-components'
import Markdown from 'react-markdown'

import { excerpt, formatDate } from '../util/helpers'

const PostsList = styled.ul`
  /* grid-area: m; */
  /* margin: 1rem; */
  padding-top: 1.5rem;
  padding: 0rem;
  list-style-type: none;
`

const PostWrapper = styled.li`
  margin: 0.5rem;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px;
  background: white;
  font-family: ${props => props.theme.fontBody};
  color: ${({ theme }) => theme.fontLight};
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
`

const PostTitle = styled.h1`
  margin: 0.12rem 0.5rem;
  /* padding: 0.5rem 0.25rem 0.5rem 0.25rem; */
  font-family: ${props => props.theme.fontHeader};
  color: ${({ theme }) => theme.fontLight};
  font-weight: bold;
  /* font-size: 1rem; */
  &:hover {
    transform: skew(2deg); /* SKEW */
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }
`

const PostLink = styled(Link)`
  display: inline-block;
  /* padding: 0rem 0.25rem 0rem 0.25rem; */
  color: ${props => props.theme.fontDark};
  &:visited,
  &:active {
    color: inherit;
  }
  &:hover {
    color: ${({ theme }) => theme.primaryAccent};
    background: ${({ theme }) => theme.primary};
    border-radius: 4px;
    transition: color 0.2s ease-out, background 0.2s ease-in;
  }
`

const PostExcerpt = styled.div`
  margin: 0.12rem 0.5rem;
  /* padding: 0rem; */
`

const PostedDate = styled.p`
  margin: 0.12rem 0.5rem;
  /* padding: 0rem; */
  font-weight: bold;
  color: ${props => props.theme.fontLight};
`

const Home = ({ allPosts }) => (
  <React.Fragment>
    <PostsList>
      {allPosts.map(
        (post, index) =>
          post.isPublished ? (
            <PostWrapper key={index}>
              <PostLink to={`/${post.slug}`}>
                <PostTitle>{post.title}</PostTitle>
              </PostLink>
              <PostedDate>{formatDate(post.dateAndTime)}</PostedDate>
              <PostExcerpt>
                <Markdown
                  source={excerpt(post.content)}
                  disallowedTypes={['image']}
                />
              </PostExcerpt>
            </PostWrapper>
          ) : (
            ''
          )
      )}
    </PostsList>
  </React.Fragment>
)

export default withRouteData(Home)
