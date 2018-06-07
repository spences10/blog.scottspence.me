import React from 'react'
import { withRouteData, Link } from 'react-static'
import styled from 'styled-components'

const PostsList = styled.ul`
  margin: 1rem;
  padding: 1rem;
`

const PostWrapper = styled.li`
  margin: 1rem;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px;
  background: white;
`

const PostTitle = styled.h1`
  margin: 0.25rem 0.5rem 0.25rem 0.5rem;
  padding: 0.5rem 0.25rem 0.5rem 0.25rem;
  font-family: ${props => props.theme.fontHeader};
  color: ${({ theme }) => theme.fontLight};
  font-weight: bold;
  /* font-size: 1rem; */
  &:hover {
    transform: skew(2deg); /* SKEW */
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }
`

export default withRouteData(({ allPosts }) => (
  <React.Fragment>
    <PostsList>
      {allPosts.map(
        post =>
          post.isPublished ? (
            <PostWrapper key={post.id}>
              <Link to={`/${post.slug}`}>
                <PostTitle>{post.title}</PostTitle>
              </Link>
            </PostWrapper>
          ) : (
            ''
          )
      )}
    </PostsList>
  </React.Fragment>
))
