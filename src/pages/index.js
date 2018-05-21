import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'

// import TagsContainer from '../layouts/components/TagsContainer'

import { StyledH1, StyledP } from '../theme/globalStyle'
// import { slugIt } from '../utils/helpers'

const PostWrapper = styled.div`
  margin: 1rem;
  padding: 0.15rem 0rem 0.15rem 0rem;
  border: 1px solid ${({ theme }) => theme.primary.light};
  border-radius: 4px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  &:hover {
    transform: translateY(0.2px);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  }
  background: ${({ theme }) => theme.white};
  background-attachment: fixed;
  font-family: ${props => props.theme.fontBody};
`

const PostTitle = StyledH1.extend`
  margin: 0.25rem 0.5rem 0.25rem 0.5rem;
  padding: 0.5rem 0.25rem 0.5rem 0.25rem;
  font-family: ${props => props.theme.fontHeader};
  color: ${({ theme }) => theme.primary.light};
  font-weight: bold;
  /* font-size: 1rem; */
  &:hover {
    transform: skew(2deg); /* SKEW */
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }
`

const PostLink = styled(Link)`
  display: inline-block;
  padding: 0rem 0.25rem 0rem 0.25rem;
  color: inherit;
  &:visited,
  &:active {
    color: inherit;
  }
  &:hover {
    color: ${({ theme }) => theme.secondary.red};
    background: ${({ theme }) => theme.primary.light};
    border-radius: 4px;
    transition: color 0.2s ease-out, background 0.2s ease-in;
  }
`

const PostDate = StyledP.extend`
  margin: 0rem 1rem 0rem 1rem;
  padding: 0rem;
  /* font-size: 0.75rem; */
  font-weight: bold;
  /* font-size: 0.5rem; */
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
      {posts.map(({ node: post }, index) => {
        const { frontmatter } = post
        // {
        //   console.log('====================')
        //   console.log(`pages index post=${post}`)
        //   console.log(`pages index index=${index}`)
        //   console.log('====================')
        // }
        return (
          <PostWrapper key={index}>
            <PostTitle>
              <PostLink to={frontmatter.path} key={index}>
                {frontmatter.title}
              </PostLink>
            </PostTitle>
            <PostDate>{frontmatter.date}</PostDate>
            <PostExcerpt>{post.excerpt}</PostExcerpt>
            {/* <TagsContainer
              name={slugIt(frontmatter.title)}
              tags={post.frontmatter.tags}
              title="no"
            /> */}
          </PostWrapper>
        )
      })}
    </div>
  )
}

/* eslint-disable */
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
            date(formatString: "YYYY MMMM Do")
            path
            tags
            excerpt
          }
        }
      }
    }
  }
`
/* eslint-enable */

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default IndexPage
