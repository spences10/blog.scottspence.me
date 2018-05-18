import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

// top right bottom left
const Container = styled.div`
  margin: 1rem;
  padding: 1rem;
  background: ${({ theme }) => theme.white};
  border: 1px solid ${props => props.border};
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`

const Tags = ({ pathContext }) => {
  const { posts, tagName } = pathContext

  if (posts) {
    return (
      <Container>
        <div>
          <span>Posts about: {tagName}</span>
        </div>
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
