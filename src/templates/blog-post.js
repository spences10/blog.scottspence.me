import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Hero from '../layouts/components/Hero'

import { StyledH1, StyledH3, StyledP } from '../theme/globalStyle'

const Title = StyledH1.extend`
  padding-left: 0rem;
  padding-right: 0rem;
  margin-left: 0rem;
  margin-right: 0rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-family: Source Sans Pro;
  font-size: 2rem;
`

const TitleDate = StyledH3.extend`
  padding-left: 0rem;
  padding-right: 0rem;
  margin-left: 0rem;
  margin-right: 0rem;
  padding-top: 0rem;
  padding-bottom: 0.5rem;
  font-family: Source Sans Pro;
  font-size: 1rem;
`

const ContentWrapper = styled.div`
  padding: 0rem;
  margin: 0.5rem;
  padding-top: 0rem;
  padding-bottom: 0.5rem;
  /* background: red; */
`

const NavWrapper = ContentWrapper.extend`
  padding-left: 1rem;
  display: grid;
  grid-template-areas: 'main main';
`

const NavP = StyledP.extend`
  padding-left: 0rem;
`

const Template = ({ data, location, pathContext }) => {
  const { markdownRemark: post } = data
  const { frontmatter, html } = post
  const { title, date } = frontmatter
  const { next, prev } = pathContext

  return (
    <div>
      <Helmet title={`${title} - blog.scottspence.me`} />
      <Title>{title}</Title>
      <TitleDate>{date}</TitleDate>

      <div dangerouslySetInnerHTML={{ __html: html }} />

      <NavWrapper>
        <NavP>
          {prev && (
            <Link to={prev.frontmatter.path}>
              Previous: {prev.frontmatter.title}
            </Link>
          )}
        </NavP>
        <NavP>
          {next && (
            <Link to={next.frontmatter.path}>
              Next: {next.frontmatter.title}
            </Link>
          )}
        </NavP>
      </NavWrapper>
    </div>
  )
}

// graphQL query to get post into Template
export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        path
        tags
        excerpt
      }
    }
  }
`

export default Template
