import React from 'react'
// import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'

const PostsWrapper = styled.div`
  grid-area: m;
`

const Posts = ({ posts }) => {
  return (
    <PostsWrapper>
      {posts.map(({ node: post }, index) => {
        const { frontmatter } = post
        return (
          <div key={index}>
            <h2>
              <Link to={frontmatter.path}>{frontmatter.title}</Link>
            </h2>
            <p>{frontmatter.date}</p>
            <p>{post.excerpt}</p>
          </div>
        )
      })}
    </PostsWrapper>
  )
}

// Posts.propTypes = {}

export default Posts
