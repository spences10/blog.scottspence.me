import React from 'react'
import { css } from 'react-emotion'
import { Link, graphql } from 'gatsby'
// import { rhythm } from '../utils/typography'
import Layout from '../components/Layout'

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              className={css`
                text-decoration: none;
                color: inherit;
              `}>
              <h3
              // className={css`
              //   margin-bottom: ${rhythm(1 / 4)};
              // `}
              >
                {node.frontmatter.title}{' '}
                <span
                  className={css`
                    color: #bbb;
                  `}>
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY MMMM Do")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
