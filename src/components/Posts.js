import React from 'react'
// import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { Wrapper } from './Shared'

const Posts = ({ posts }) => {
  return (
    <Wrapper area={'m'}>
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
    </Wrapper>
  )
}

// Posts.propTypes = {}

export default Posts
