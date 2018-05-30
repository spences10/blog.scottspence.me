import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <React.Fragment>
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
