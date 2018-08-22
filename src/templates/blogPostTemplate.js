import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'
// import { Dump } from '../utils/helpers'
import config from '../../data/siteConfig'
import { siteMeta } from '../../data/siteMeta'

// add prismjs theme
require('prismjs/themes/prism-solarizedlight.css')

const blogPostLayout = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { prev, next } = pageContext
  return (
    <Layout>
      <Helmet
        title={`${post.frontmatter.title} - ${config.siteTitle}`}
        meta={siteMeta}>
        <html lang={config.siteLanguage} />
      </Helmet>
      {/* <Dump props={data} /> */}
      <div>
        <h1>{post.frontmatter.title}</h1>
        {/* <Markdown source={post.html} /> */}
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

export default blogPostLayout

blogPostLayout.propTypes = {
  data: PropTypes.any,
  pageContext: PropTypes.any
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
