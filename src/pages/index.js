import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import { PageContainer } from '../components/Shared'
// import Header from '../components/Header'

import { siteMeta, nameContent } from '../theme/constants'

import './index.css'
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
    <PageContainer>
      <Helmet title={nameContent} meta={siteMeta} />
      {/* <Header siteTitle={nameContent} /> */}
      {posts.map(({ node: post }, index) => {
        const { frontmatter } = post
        return (
          <div key={index}>
            <h2>
              <Link to={frontmatter.path}>{frontmatter.title}</Link>
            </h2>
            <p>{frontmatter.date}</p>
            <p>{post.excerpt}</p>
          </div>
        )
      })}
    </PageContainer>
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
