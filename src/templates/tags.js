import React from 'react'
import Link from 'gatsby-link'

const Tags = ({ pageContext }) => {
  const { posts, tagName } = pageContext
  if (posts) {
    return (
      <React.Fragment>
        <span>Posts about {tagName}:</span>

        <ul>
          {posts.map(post => {
            return (
              <li>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </li>
            )
          })}
        </ul>
      </React.Fragment>
    )
  }
}

export default Tags
