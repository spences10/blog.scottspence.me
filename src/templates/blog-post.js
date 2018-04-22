import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import { ButtonSmall } from '../layouts/components/Button'
import TagsContainer from '../layouts/components/TagsContainer'
import { media, theme } from '../theme/globalStyle'

import { StyledH1, StyledH3 } from '../theme/globalStyle'

const Title = StyledH1.extend`
  padding: 0.5rem 1rem 0.5rem 1rem;
  margin: 0.5rem 0rem 0rem 0rem;
  font-family: Source Sans Pro;
  font-size: 1.5em;
  color: ${({ theme }) => theme.secondary.red};
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`
// top right bottom left
const TitleDate = StyledH3.extend`
  margin: 0rem 0rem 0rem 0rem;
  padding: 0rem 1rem 0rem 1rem;
  font-family: Source Sans Pro;
  /* font-size: 0.65rem; */
  color: ${({ theme }) => theme.shades.dark};
`

const ContentWrapper = styled.div`
  padding: 0.5rem;
  margin: 0.5rem;
  padding-top: 0rem;
  padding-bottom: 0.5rem;
  /* font-size: 0.65rem; */
  ${media.giant`
    /* font-size: 1rem; */
  `};
  ${media.desktop`
    /* font-size: 1rem; */
  `};
  ${media.tablet`
    /* font-size: 1rem; */
  `};
  ${media.phone`
    /* font-size: 1rem; */
  `};
  /* background: red; */
`

const NavWrapper = ContentWrapper.extend`
  padding: 0.5rem;
  display: grid;
  grid-template-areas: 'main main';
  justify-content: space-between;

  padding: 0.2rem 0.3rem;
  margin: 0.2rem 0.3rem;
`

const PostWrapper = ContentWrapper.extend`
  background: ${({ theme }) => theme.white};
  border: 1px solid ${props => props.border};
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`

const ButtonWrapper = styled.div`
  display: grid;
  justify-items: end;
`

const HappyButton = ButtonSmall.extend`
  text-transform: capitalize;

  padding: 0.1rem 0.1rem;
  margin: 0.2rem 0.2rem;

  &:hover {
    animation: halftone 1s forwards;
    background: radial-gradient(
          circle,
          ${({ theme }) => theme.primary.light} 0.2em,
          transparent 0.25em
        )
        0 0 / 1.25em 1.25em,
      radial-gradient(
          circle,
          ${({ theme }) => theme.primary.light} 0.2em,
          transparent 0.25em
        )
        6.25em 6.25em / 1.25em 1.25em;
    color: ${({ theme }) => theme.secondary.red};
  }
  @keyframes halftone {
    100% {
      background-size: 2.375em 2.375em, 0.1em 0.1em;
    }
  }
`

class Template extends React.Component {
  render() {
    const post = this.props.data.post
    console.log('====================')
    console.log(post)
    console.log('====================')
    return (
      <ContentWrapper>
        {/* <h1>{post.pageTitle}</h1>
        <div>{post.pageDescription}</div>
        {console.log(post.headerImage.url)}
        <HeaderImage src={post.headerImage.url} />
        <Dump props={post} />
        <Link to="/">Go back to the homepage</Link> */}
      </ContentWrapper>
    )
  }
}

export default Template

// graphQL query to get post into Template
export const PageDetailPageQuery = graphql`
  query getPostById($slug: String!) {
    posts(slug: { eq: $slug }) {
      id
      tags
      slug
      coverImage {
        id
        url
      }
      authors {
        id
      }
      content
      title
      dateAndTime
    }
  }
`

Template.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  pathContext: PropTypes.object.isRequired
}

// export default Template
