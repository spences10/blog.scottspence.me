import React from 'react'
// import Link from 'gatsby'
import Helmet from 'react-helmet'

const Template = ({ data }) => {
  const { markdownRemark: post } = data
  const { frontmatter, html } = post
  const { title, date } = frontmatter

  return (
    <React.Fragment>
      <Helmet title={`${title} - blog.scottspence.me`} />
      <div>
        <h1>{title}</h1>
        <h3>{date}</h3>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </React.Fragment>
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
