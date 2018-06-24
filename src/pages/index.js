import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Markdown from 'react-markdown'

// import TagsContainer from '../layouts/components/TagsContainer'

import { StyledH1, StyledP } from '../theme/globalStyle'
<<<<<<< HEAD
import { excerpt } from '../utils/helpers'
=======
// import { slugIt } from '../utils/helpers'
>>>>>>> development

const PostWrapper = styled.div`
  margin: 1rem;
  padding: 0.15rem 0rem 0.15rem 0rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  &:hover {
    transform: translateY(0.2px);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  }
  background: ${({ theme }) => theme.foreground};
  font-family: ${props => props.theme.fontBody};
  box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 5px;
`

const PostTitle = StyledH1.extend`
  margin: 0.25rem 0.5rem 0.25rem 0.5rem;
  padding: 0.5rem 0.25rem 0.5rem 0.25rem;
  font-family: ${props => props.theme.fontHeader};
  color: ${({ theme }) => theme.fontLight};
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
  color: ${props => props.theme.fontDark};
  &:visited,
  &:active {
    color: inherit;
  }
  &:hover {
    color: ${({ theme }) => theme.primaryAccent};
    background: ${({ theme }) => theme.primary};
    border-radius: 4px;
    transition: color 0.2s ease-out, background 0.2s ease-in;
  }
`

const PostDate = StyledP.extend`
  margin: 0rem 1rem 0rem 1rem;
  padding: 0rem;
  /* font-size: 0.75rem; */
  font-weight: bold;
  color: ${props => props.theme.fontLight};
`

// top right bottom left
const PostExcerpt = StyledP.extend`
  margin: 0.25rem 1rem 0.25rem 1rem;
  padding: 0rem;
`

const IndexPage = ({ data }) => {
  const { edges: post } = data.allPosts
  return (
    <div>
      {post.map(({ node: post }, index) => {
        // console.log('====================')
        // console.log(post)
        // console.log('====================')
        return (
          <PostWrapper key={index}>
            <PostTitle>
              <PostLink to={post.slug}>{post.title}</PostLink>
            </PostTitle>
            <PostDate>{post.dateAndTime.toString()}</PostDate>
            <PostExcerpt>
              <Markdown
                source={excerpt(post.content, 250)}
                escapeHtml={false}
              />
            </PostExcerpt>
          </PostWrapper>
        )
      })}
    </div>
  )
}

/* eslint-disable */
export const query = graphql`
  query IndexQuery {
    allPosts {
      edges {
        node {
          id
<<<<<<< HEAD
          slug
          title
          dateAndTime(formatString: "Do MMMM YYYY")
          tags
          authors {
            id
=======
          frontmatter {
            title
            date(formatString: "YYYY MMMM Do")
            path
            tags
            excerpt
>>>>>>> development
          }
          content
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
