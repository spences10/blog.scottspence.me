import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import GlobalLayout from '../components/GlobalLayout'

import { Wrapper } from '../components/Shared'
import {
  BlogThemeContext,
  BlogThemeProvider
} from '../components/BlogThemeContext'

/**
 * other themes
 * dark
 * funky
 * okaidia
 * coy
 * solarizedlight
 * tomorrow
 * twilight
 * prism.css = default
 */
require('prismjs/themes/prism-solarizedlight.css')

const Template = ({ data, pageContext }) => {
  const { markdownRemark: post } = data
  const { frontmatter, html } = post
  const { title, date } = frontmatter
  const { prev, next } = pageContext

  return (
    <BlogThemeProvider>
      <BlogThemeContext.Consumer>
        {({ background }) => (
          <GlobalLayout background={background}>
            <Header area={'h'} />
            <Wrapper area={'m'}>
              <Helmet title={`${title} - blog.scottspence.me`} />
              <div>
                <h1>{title}</h1>
                <h3>{date}</h3>
                <div dangerouslySetInnerHTML={{ __html: html }} />
                <p>
                  {prev && (
                    <Link to={prev.frontmatter.path}>
                      Previous: {prev.frontmatter.title}
                    </Link>
                  )}
                </p>
                <p>
                  {next && (
                    <Link to={next.frontmatter.path}>
                      Next: {next.frontmatter.title}
                    </Link>
                  )}
                </p>
              </div>
            </Wrapper>
          </GlobalLayout>
        )}
      </BlogThemeContext.Consumer>
    </BlogThemeProvider>
  )
}

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

export default Template
