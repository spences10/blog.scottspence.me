import React from 'react'
import Link from 'gatsby-link'

import { StyledH1, StyledP, StyledLi, StyledUl } from '../theme/globalStyle'

const PostTitle = StyledH1.extend`
  font-family: Source Sans Pro;
`

const PostDate = StyledP.extend`
  margin: 0rem 1rem 0rem 1rem;
  padding: 0rem;
  font-size: 0.75rem;
  font-weight: bold;
`

const PostExcerpt = StyledP.extend`
  margin: 1rem;
  padding: 0rem;
`
// top right bottom left
const TagsList = StyledUl.extend`
  margin: 0rem 0rem 0rem 0rem;
  padding: 0rem;
  font-size: 0.75rem;
  font-weight: bold;
  list-style: none;
`

const PostTags = StyledLi.extend`
  margin: 0rem 0rem 0rem 1rem;
  padding: 0rem;
  font-size: 0.75rem;
  font-weight: bold;
  display: inline;
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
              <Link to={frontmatter.path}>{frontmatter.title}</Link>
            </PostTitle>
            <PostDate>{frontmatter.date}</PostDate>
            <PostExcerpt>{frontmatter.excerpt}</PostExcerpt>
            <TagsList>
              {post.frontmatter.tags.map(tag => {
                return (
                  <PostTags>
                    <Link to={`/tags/${tag}`}>{tag}</Link>
                  </PostTags>
                )
              })}
            </TagsList>
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
