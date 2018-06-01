import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'

import { siteMeta, nameContent } from '../theme/constants'

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <React.Fragment>
      <Helmet title={nameContent} meta={siteMeta} />
      <Header siteTitle={nameContent} />
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
    </React.Fragment>
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
