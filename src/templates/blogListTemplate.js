import React from 'react'
// import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
// import { Dump } from '../utils/helpers'

import {
  Wrapper,
  PostWrapper,
  StyledLink,
  PostTitle,
  PostedDate,
  LinksWrapper as LW,
  LinkWrapper,
  PrevNextButton
} from '../components/Shared'

const LinksWrapper = styled(LW)`
  margin: 0.25rem;
  padding: 0.25rem;
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
                    {prevList.substring(1)}
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
                    {nextList.substring(1)}
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
