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
`

const PostTitle = StyledH1.extend`
  margin: 0.25rem 0.5rem 0.25rem 0.5rem;
  padding: 0.5rem 0.25rem 0.5rem 0.25rem;
  font-family: Source Sans Pro;
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
  const { edges: post } = data.allPosts
  return (
    <div>
      {post.map(({ node: post }, index) => {
        console.log('====================')
        console.log(post)
        console.log('====================')
        return (
          <PostWrapper key={index}>
            <PostTitle>
              <PostLink to={post.slug}>{post.title}</PostLink>
            </PostTitle>
            <PostDate>{post.dateAndTime.toString()}</PostDate>
            <PostExcerpt>{post.content}</PostExcerpt>
          </PostWrapper>
        )
      })}
    </div>
  )
  // posts.map(({ node: posts }, index) => {
  //   console.log('====================')
  //   console.log(posts.title)
  //   console.log('====================')
  //   return (
  //     <PostWrapper key={index}>
  //       <PostTitle>
  //         <PostLink to={posts.slug}>{posts.title}</PostLink>
  //       </PostTitle>
  //     </PostWrapper>
  //   )
  // })
}

// {posts.map(({ node: post }, index) => {
//   console.log('====================')
//   console.log()
//   console.log('====================')
//   // {
//   //   console.log('====================')
//   //   console.log(`pages index post=${post}`)
//   //   console.log(`pages index index=${index}`)
//   //   console.log('====================')
//   // }
//   return (
//     <PostWrapper key={index}>
//       <PostTitle>
//         <PostLink to={frontmatter.path} key={index}>
//           {frontmatter.title}
//         </PostLink>
//       </PostTitle>
//       <PostDate>{frontmatter.date}</PostDate>
//       <PostExcerpt>{post.excerpt}</PostExcerpt>
//       {/* <TagsContainer
//         name={slugIt(frontmatter.title)}
//         tags={post.frontmatter.tags}
//         title="no"
//       /> */}
//     </PostWrapper>
//   )
// })}

export const query = graphql`
  query IndexQuery {
    allPosts {
      edges {
        node {
          id
          slug
          title
          dateAndTime(formatString: "Do MMMM YYYY")
          tags
          authors {
            id
          }
          content
        }
      }
    }
  }
`

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default IndexPage
