import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import TagsContainer from '../layouts/components/TagsContainer'

import { StyledH1, StyledP, StyledLi, StyledUl } from '../theme/globalStyle'

const PostTitle = StyledH1.extend`
  margin: 0.25rem 0.5rem 0.25rem 0.5rem;
  font-family: Source Sans Pro;
  color: ${({ theme }) => theme.primary.light};
  font-weight: bold;
  font-size: 1rem;
`

const PostLink = styled(Link)`
  color: inherit;
  &:visited,
  &:active {
    color: inherit;
  }
  &:hover {
    color: ${({ theme }) => theme.secondary.red};
  }
`

const PostDate = StyledP.extend`
  margin: 0rem 1rem 0rem 1rem;
  padding: 0rem;
  font-size: 0.75rem;
  font-weight: bold;
  font-size: 0.5rem;
`

// top right bottom left
const PostExcerpt = StyledP.extend`
  margin: 0.25rem 1rem 0.25rem 1rem;
  padding: 0rem;
`

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div>
      {posts.map(({ node: post }) => {
        const { frontmatter } = post

        return (
          <div>
            <PostTitle>
              <PostLink to={frontmatter.path}>{frontmatter.title}</PostLink>
            </PostTitle>
            <PostDate>{frontmatter.date}</PostDate>
            <PostExcerpt>{post.excerpt}</PostExcerpt>
            <TagsContainer tags={post.frontmatter.tags} title="no" />
          </div>
        )
      })}
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
            path
            tags
            excerpt
          }
        }
      }
    }
  }
`

export default IndexPage
