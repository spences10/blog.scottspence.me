import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import { ButtonBig } from '../layouts/components/Button'
import TagsContainer from '../layouts/components/TagsContainer'
import { media, theme } from '../theme/globalStyle'

import { StyledH1, StyledH3, StyledP } from '../theme/globalStyle'

const Title = StyledH1.extend`
  padding: 0.5rem 1rem 0.5rem 1rem;
  margin: 0.5rem 0rem 0rem 0rem;
  font-family: Source Sans Pro;
  font-size: 1.5em;
  color: ${({ theme }) => theme.secondary.red};
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`
// top right bottom left
const TitleDate = StyledH3.extend`
  margin: 0rem 0rem 0rem 0rem;
  padding: 0rem 1rem 0rem 1rem;
  font-family: Source Sans Pro;
  /* font-size: 0.65rem; */
  color: ${({ theme }) => theme.shades.dark};
`

const ContentWrapper = styled.div`
  padding: 0.5rem;
  margin: 0.5rem;
  padding-top: 0rem;
  padding-bottom: 0.5rem;
  /* font-size: 0.65rem; */
  ${media.giant`
    /* font-size: 1rem; */
  `};
  ${media.desktop`
    /* font-size: 1rem; */
  `};
  ${media.tablet`
    /* font-size: 1rem; */
  `};
  ${media.phone`
    /* font-size: 1rem; */
  `};
  /* background: red; */
`

const NavWrapper = ContentWrapper.extend`
  padding: 0.5rem;
  display: grid;
  grid-template-areas: 'main main';
`

const NavP = StyledP.extend`
  margin: 0.25rem;
  padding: 0.25rem;
  /* font-size: 0.5rem; */
  font-weight: bold;
  border: 1px solid ${props => props.border};
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  transition: all 0.1s;
  &:hover {
    transform: translateY(1px);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  }
`

const PostWrapper = ContentWrapper.extend`
  background: ${({ theme }) => theme.white};
  border: 1px solid ${props => props.border};
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`

const ButtonWrapper = styled.div`
  display: grid;
  justify-items: end;
`

const HappyButton = ButtonBig.extend`
  &:hover {
    animation: halftone 1s forwards;
    background: radial-gradient(
          circle,
          ${({ theme }) => theme.primary.light} 0.2em,
          transparent 0.25em
        )
        0 0 / 1.25em 1.25em,
      radial-gradient(
          circle,
          ${({ theme }) => theme.primary.light} 0.2em,
          transparent 0.25em
        )
        6.25em 6.25em / 1.25em 1.25em;
    color: ${({ theme }) => theme.text};
  }
  @keyframes halftone {
    100% {
      background-size: 2.375em 2.375em, 0.1em 0.1em;
    }
  }
`

const Template = ({ data, location, pathContext }) => {
  const { markdownRemark: post } = data
  const { frontmatter, html } = post
  const { title, date, tags } = frontmatter
  const { next, prev } = pathContext

  return (
    <PostWrapper>
      <Helmet title={`${title} - blog.scottspence.me`} />
      <Title>{title}</Title>
      <TitleDate>{date}</TitleDate>

      <ContentWrapper dangerouslySetInnerHTML={{ __html: html }} />

      <TagsContainer
        title={title}
        tags={post.frontmatter.tags}
        name={`${title}-${date}`}
      />
      <ButtonWrapper>
        <Link to="/">
          <HappyButton
            color={theme.primary.light}
            border={theme.primary.light}>
            back to index
          </HappyButton>
        </Link>
      </ButtonWrapper>
      {/* taking out nav links until I work out how to make the date order work */}
      <NavWrapper>
        <NavP>
          {prev && (
            <Link to={prev.frontmatter.path}>
              {prev.frontmatter.title}
            </Link>
          )}
        </NavP>
        <NavP>
          {next && (
            <Link to={next.frontmatter.path}>
              {next.frontmatter.title}
            </Link>
          )}
        </NavP>
      </NavWrapper>
    </PostWrapper>
  )
}

// graphQL query to get post into Template
export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD MMMM YYYY")
        path
        tags
        title
      }
    }
  }
`

export default Template
