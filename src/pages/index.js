import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import styled from 'styled-components'

const Wrapper = styled.div``

const PostWrapper = styled.div`
  margin: 0.5rem;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px;
  background: white;
  font-family: ${props => props.theme.fontBody};
  color: ${({ theme }) => theme.fontLight};
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const StyledSpan = styled.span`
  color: #bbb;
`

export default ({ data }) => {
  return (
    <Layout>
      <Wrapper>
        {/* <h4>{data.allMarkdownRemark.totalCount} Posts</h4> */}
        {data.allMarkdownRemark.edges.map(({ node }, index) => (
          <PostWrapper key={index}>
            <StyledLink to={node.frontmatter.path}>
              <h3>
                {node.frontmatter.title}{' '}
                <StyledSpan>— {node.frontmatter.date}</StyledSpan>
              </h3>
              <p>{node.excerpt}</p>
            </StyledLink>
          </PostWrapper>
        ))}
      </Wrapper>
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
          excerpt(pruneLength: 250)
          frontmatter {
            title
            path
            date(formatString: "YYYY MMMM Do")
            published
          }
        }
      }
    }
  }
`
