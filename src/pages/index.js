import React from 'react'
// import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'

import Header from '../components/Header'
import ThemeSelect from '../components/ThemeSelect'

import { PageContainer } from '../components/Shared'
import {
  BlogThemeContext,
  BlogThemeProvider
} from '../components/BlogThemeContext'

import { siteMeta, nameContent } from '../theme/constants'

import Posts from '../components/Posts'
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

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <BlogThemeProvider>
      <BlogThemeContext.Consumer>
        {({ theme, background }) => (
          <ThemeProvider theme={theme}>
            <PageContainer background={background}>
              <Helmet title={nameContent} meta={siteMeta} />
              <Header />
              <Posts posts={posts} />
              <ThemeSelect />
            </PageContainer>
          </ThemeProvider>
        )}
      </BlogThemeContext.Consumer>
    </BlogThemeProvider>
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
          excerpt(pruneLength: 250)
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

export default IndexPage
