import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'

export default ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { prev, next } = pageContext
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <div>
        {prev === false ? null : (
          <div>
            {prev && (
              <Link to={prev.frontmatter.path}>
                <button>{prev.frontmatter.title}</button>
              </Link>
            )}
          </div>
        )}
        {next === false ? null : (
          <div>
            {next && (
              <Link to={next.frontmatter.path}>
                <button>{next.frontmatter.title}</button>
              </Link>
            )}
          </div>
        )}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        path
        date(formatString: "YYYY MMMM Do")
        published
      }
    }
  }
`
