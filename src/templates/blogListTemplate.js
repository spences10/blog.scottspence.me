import React from 'react'
// import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
// import { Dump } from '../utils/helpers'

import { HappyButton } from '../components/Shared'

const Wrapper = styled.div``

const PostWrapper = styled.div`
  margin: 0.5rem;
  padding: 1rem 1.5rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px;
  background: white;
  line-height: 1.5;
  font-family: ${({ theme }) => theme.fontBody};
  color: ${({ theme }) => theme.fontLight};
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const PostTitle = styled.div`
  font-family: ${({ theme }) => theme.fontHeader};
  font-weight: 700;
  font-size: 2rem;
  color: ${({ theme }) => theme.fontLight};
  margin: 0rem;
  padding: 0rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`

const PostedDate = styled.p`
  margin: 0.05rem;
  color: ${({ theme }) => theme.fontLight};
`

const LinksWrapper = styled.div`
  display: grid;
  grid-template-areas: 'prev next';
`

const LinkWrapper = styled.div`
  display: grid;
  justify-items: ${props => props.justify};
`

const PrevNextButton = styled(HappyButton)`
  margin: 0.5rem 0rem;
  padding: 0.5rem;
  grid-area: ${props => props.area};
`

const BlogListLayout = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges
  const { prevList, nextList } = pageContext
  return (
    <Layout>
      <Wrapper>
        {posts.map(({ node }, index) => (
          <PostWrapper key={index}>
            <StyledLink to={node.frontmatter.path}>
              <PostTitle>{node.frontmatter.title}</PostTitle>
              <PostedDate>{node.frontmatter.date}</PostedDate>
              <p>{node.excerpt}</p>
            </StyledLink>
          </PostWrapper>
        ))}
      </Wrapper>
      <LinksWrapper>
        <LinkWrapper justify={'start'}>
          {prevList === false ? null : (
            <div>
              {prevList && (
                <Link to={prevList}>
                  <PrevNextButton area={'prev'}>
                    {prevList}
                  </PrevNextButton>
                </Link>
              )}
            </div>
          )}
        </LinkWrapper>
        <LinkWrapper justify={'end'}>
          {nextList === false ? null : (
            <div>
              {nextList && (
                <Link to={nextList}>
                  <PrevNextButton area={'next'}>
                    {nextList}
                  </PrevNextButton>
                </Link>
              )}
            </div>
          )}
        </LinkWrapper>
      </LinksWrapper>
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
      filter: { frontmatter: { published: { eq: true } } }
      limit: $limit
      skip: $skip
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
