import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

// top right bottom left
const Container = styled.div`
  margin: 1rem;
  padding: 1rem;
  background: ${({ theme }) => theme.background};
  border: 1px solid ${props => props.border};
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`

const TagName = styled.span`
  margin: 0.15rem;
  padding: 0.15rem;
  /* font-size: 0.6rem; */
  font-weight: bold;
  display: inline-block;
  background: ${({ theme }) => theme.primary};
  transform: skew(-2deg); /* INVERSE SKEW */
  transition-delay: 0.2s;
  &:hover {
    transition-delay: 0.2s;
    transform: skew(2deg); /* SKEW */
    color: ${({ theme }) => theme.secondary};
    cursor: pointer;
  }
  border-radius: 4px;
`

const Tags = ({ pathContext }) => {
  const { posts, tagName } = pathContext

  if (posts) {
    return (
      <Container>
        <span>
          Posts about:
          <TagName>{tagName}</TagName>
        </span>
        <ul>
          {posts.map((post, index) => {
            return (
              <li key={index}>
                <Link to={post.frontmatter.path}>
                  {post.frontmatter.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </Container>
    )
  }
}

export default Tags
