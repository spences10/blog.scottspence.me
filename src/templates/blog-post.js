import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Markdown from 'react-markdown'

import TagsContainer from '../layouts/components/TagsContainer'

import {
  BlogThemeContext,
  BlogThemeProvider
} from '../layouts/components/BlogThemeContext'

import { ButtonSmall } from '../layouts/components/Button'
import { StyledH1, StyledH3 } from '../theme/globalStyle'
// import { Dump } from '../utils/helpers'

import { media } from '../theme/globalStyle'

const Title = StyledH1.extend`
  padding: 0.5rem 1rem 0.5rem 1rem;
  margin: 0.5rem 0rem 0rem 0rem;
  font-family: ${props => props.theme.fontHeader};
  font-size: 1.5em;
  color: ${({ theme }) => theme.secondary};
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`
// top right bottom left
const TitleDate = StyledH3.extend`
  margin: 0rem 0rem 0rem 0rem;
  padding: 0rem 1rem 0rem 1rem;
  font-family: ${props => props.theme.fontBody};
  /* font-size: 0.65rem; */
  color: ${({ theme }) => theme.fontLight};
`

const ContentWrapper = styled.div`
  padding: 0.5rem;
  margin: 0.5rem;
  padding-top: 0rem;
  padding-bottom: 0.5rem;
  /* font-size: 0.65rem; */
  ${media.giant`
  `};
  ${media.desktop`
  `};
  ${media.tablet`
  `};
  ${media.phone`
  `};
`

const NavWrapper = ContentWrapper.extend`
  padding: 0.5rem;
  display: grid;
  grid-template-areas: 'main main';
  justify-content: space-between;

  padding: 0.2rem 0.3rem;
  margin: 0.2rem 0.3rem;
`

const PostWrapper = ContentWrapper.extend`
  background: ${({ theme }) => theme.foreground};
  border: 1px solid ${props => props.border};
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  img {
    max-width: 100%;
    max-height: 100%;
  }
<<<<<<< HEAD
=======
  font-family: ${props => props.theme.fontBody};
  color: ${props => props.theme.fontDark};
>>>>>>> development
`

const ButtonWrapper = styled.div`
  display: grid;
  justify-items: end;
`

const HappyButton = ButtonSmall.extend`
  text-transform: capitalize;
  background-color: ${props => props.theme.primary};
  /* border: 1px solid ${props => props.theme.border}; */
  box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 5px;
  color: ${props => props.theme.fontDark};
  padding: 0.1rem 0.1rem;
  margin: 0.2rem 0.2rem;

  &:hover {
    animation: halftone 1s forwards;
    background: radial-gradient(
          circle,
          ${({ theme }) => theme.secondary} 0.2em,
          transparent 0.25em
        )
        0 0 / 1.25em 1.25em,
      radial-gradient(
          circle,
          ${({ theme }) => theme.secondary} 0.2em,
          transparent 0.25em
        )
        6.25em 6.25em / 1.25em 1.25em;
    color: ${({ theme }) => theme.primaryAccent};
  }
  @keyframes halftone {
    100% {
      background-size: 2.375em 2.375em, 0.1em 0.1em;
    }
  }
`

<<<<<<< HEAD
class Template extends React.Component {
  render() {
    const post = this.props.data.posts
    const tags = this.props.data.posts.tags
    console.log('====================')
    console.log(tags)
    console.log('====================')
    return (
      <ContentWrapper>
        <PostWrapper>
          <Title>{post.title}</Title>
          <TitleDate>{post.dateAndTime}</TitleDate>
          <Markdown source={post.content} escapeHtml={false} />
          {/* <TagsContainer>{post.tags}</TagsContainer> */}
        </PostWrapper>
      </ContentWrapper>
    )
  }
=======
const Template = ({ data, pathContext }) => {
  const { markdownRemark: post } = data
  const { frontmatter, html } = post
  const { title, date } = frontmatter
  const { next, prev } = pathContext

  return (
    <BlogThemeProvider>
      <BlogThemeContext.Consumer>
        {({ theme }) => (
          <PostWrapper border={theme.border}>
            <Helmet title={`${title} - blog.scottspence.me`} />
            <Title>{title}</Title>
            <TitleDate>{date}</TitleDate>

            <ContentWrapper
              dangerouslySetInnerHTML={{ __html: html }}
            />

            <TagsContainer
              title={title}
              tags={post.frontmatter.tags}
              name={`${title}-${date}`}
            />
            <NavWrapper>
              {prev === false ? (
                <div />
              ) : (
                <ButtonWrapper>
                  {prev && (
                    <Link to={prev.frontmatter.path}>
                      <HappyButton
                        color={theme.primary}
                        border={theme.primary}>
                        {prev.frontmatter.title}
                      </HappyButton>
                    </Link>
                  )}
                </ButtonWrapper>
              )}
              {next === false ? (
                <div />
              ) : (
                <ButtonWrapper>
                  {next && (
                    <Link to={next.frontmatter.path}>
                      <HappyButton
                        color={theme.primary}
                        border={theme.primary}>
                        {next.frontmatter.title}
                      </HappyButton>
                    </Link>
                  )}
                </ButtonWrapper>
              )}
            </NavWrapper>
          </PostWrapper>
        )}
      </BlogThemeContext.Consumer>
    </BlogThemeProvider>
  )
>>>>>>> development
}

export default Template

// graphQL query to get post into Template
<<<<<<< HEAD
export const PageDetailPageQuery = graphql`
  query getPostById($slug: String!) {
    posts(slug: { eq: $slug }) {
      id
      tags
      slug
      coverImage {
        id
        url
      }
      authors {
        id
=======
/* eslint-disable */
export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "YYYY MMMM Do")
        path
        tags
        title
>>>>>>> development
      }
      content
      title
      dateAndTime(formatString: "Do MMMM YYYY")
    }
  }
`
/* eslint-enable */

Template.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  pathContext: PropTypes.object.isRequired
}

// export default Template
