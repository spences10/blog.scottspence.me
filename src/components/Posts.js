import React from 'react'
// import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Wrapper = styled.div`
  grid-area: ${props => props.area};
`
const PostWrapper = styled.div`
  margin: 1rem;
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.border};
`

const Posts = ({ posts }) => {
  return (
    <Wrapper area={'m'}>
      {posts.map(({ node: post }, index) => {
        const { frontmatter } = post
        return (
          <PostWrapper key={index}>
            <h2>
              <Link to={frontmatter.path}>{frontmatter.title}</Link>
            </h2>
            <p>{frontmatter.date}</p>
            <p>{post.excerpt}</p>
          </PostWrapper>
        )
      })}
    </Wrapper>
  )
}

// Posts.propTypes = {}

export default Posts
