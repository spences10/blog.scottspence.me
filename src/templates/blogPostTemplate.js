import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import { Markdown } from 'react-smackdown'

import { loadLanguages } from 'reprism'
import bash from 'reprism/lib/languages/bash'
import json from 'reprism/lib/languages/json'
import yaml from 'reprism/lib/languages/yaml'
import 'react-smackdown/themes/smackdown-light.css'

loadLanguages(json, yaml, bash)

export default ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { prev, next } = pageContext
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <Markdown source={post.html} />
        {/* <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
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
