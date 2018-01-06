import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

// top right bottom left
const Container = styled.div`
  margin: 2rem 1rem 0rem 1rem;
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
          {posts.map(post => {
            return (
              <li>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </li>
            )
          })}
        </ul>
      </Container>
    )
  }
}

export default Tags
