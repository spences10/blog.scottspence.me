import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import { ButtonSmall } from '../layouts/components/Button'
import TagsContainer from '../layouts/components/TagsContainer'
import { media, theme } from '../theme/globalStyle'

import { StyledH1, StyledH3 } from '../theme/globalStyle'

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
  justify-content: space-between;

  padding: 0.2rem 0.3rem;
  margin: 0.2rem 0.3rem;
`

const PostWrapper = ContentWrapper.extend`
  background: ${({ theme }) => theme.white};
  border: 1px solid ${props => props.border};
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`

const ButtonWrapper = styled.div`
  display: grid;
  justify-items: end;
`

const HappyButton = ButtonSmall.extend`
  text-transform: capitalize;

  padding: 0.1rem 0.1rem;
  margin: 0.2rem 0.2rem;

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
    color: ${({ theme }) => theme.secondary.red};
  }
  @keyframes halftone {
    100% {
      background-size: 2.375em 2.375em, 0.1em 0.1em;
    }
  }
`

const Template = ({ data, pathContext }) => {
  const { markdownRemark: post } = data
  const { frontmatter, html } = post
  const { title, date } = frontmatter
  const { next, prev } = pathContext

  return (
    <PostWrapper border={({ theme }) => theme.primary.light}>
      <Helmet title={`${title} - blog.scottspence.me`} />
      <Title>{title}</Title>
      <TitleDate>{date}</TitleDate>

      <ContentWrapper dangerouslySetInnerHTML={{ __html: html }} />

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
                  color={theme.primary.light}
                  border={theme.primary.light}>
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
                  color={theme.primary.light}
                  border={theme.primary.light}>
                  {next.frontmatter.title}
                </HappyButton>
              </Link>
            )}
          </ButtonWrapper>
        )}
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
        date(formatString: "YYYY MMMM Do")
        path
        tags
        title
      }
    }
  }
`

Template.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  pathContext: PropTypes.object.isRequired
}

export default Template
