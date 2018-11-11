import React from 'react'
// import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const BlogListLayout = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.frontmatter.path
        return <div key={node.frontmatter.path}>{title}</div>
      })}
    </Layout>
  )
}

// BlogListLayout.propTypes = {
//   props: PropTypes.props
// }

export default BlogListLayout

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`
