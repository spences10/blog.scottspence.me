import React from 'react'
import { withRouteData, Link } from 'react-static'
import styled from 'styled-components'
import { Dump } from '../util/helpers'

const PageWrapper = styled.div`
  /* height: 100vh; */
  list-style-type: none;
`
const LinkWrapper = styled.ul`
  margin: 0.5rem;
  padding: 0.5rem;
  list-style-type: square;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px;
  background: white;
  font-family: ${props => props.theme.fontBody};
  color: ${({ theme }) => theme.fontLight};
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
`

const ListTags = styled.li`
  margin: 0.25rem 0rem;
  padding: 0.25rem 0rem;
  list-style-type: none;
`

const TagLink = styled(Link)`
  margin: 0.5rem;
  padding: 0.5rem;
  /* display: inline-block; */
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

const TagTitle = styled.h1`
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

// position: absolute;
// min-height: 100%;
// width: 100%;
// background-size: 15% auto;

export default withRouteData(({ allTags }) => {
  return (
    <PageWrapper>
      {allTags.map((tag, index) => {
        const { blogPosts } = tag
        return (
          <LinkWrapper key={index}>
            <TagTitle>{tag.name}</TagTitle>
            {blogPosts.map((post, index) => {
              return (
                <ListTags key={index}>
                  <TagLink to={post.slug}>{post.title}</TagLink>
                </ListTags>
              )
            })}
          </LinkWrapper>
        )
      })}
    </PageWrapper>
  )
})
