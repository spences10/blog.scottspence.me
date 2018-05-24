import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { StyledH1, media } from '../../theme/globalStyle'
// import PageNav from './PageNav.js'

const StyledHeader = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  width: 100%;
  grid-area: b;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-template-areas: '. . . b b b c p a . . .';
  ${media.giant`
    grid-template-areas:
      '. . b b b b b c p a . .';
    /* background: goldenrod; */
  `};
  ${media.desktop`
    grid-template-areas:
      '. . b b b b b c p a . .';
    /* background: dodgerblue; */
  `};
  ${media.tablet`
  grid-template-columns: repeat(9, 1fr);
  grid-template-areas:
      '. b b b b c p a .';
    /* background: mediumseagreen; */
  `};
  ${media.phone`
  grid-template-columns: repeat(9, 1fr);
  grid-template-areas:
      'b b b b b b c p a';
    /* background: palevioletred; */
  `};
  background-color: ${({ theme }) => theme.primary};
  border-bottom: 1px solid ${({ theme }) => theme.boarder};
  box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 5px;
`

const BrandTitle = StyledH1.extend`
  grid-area: b;
  color: ${({ theme }) => theme.fontLight};
  /* top right bottom left */
  margin: 0rem 0.5rem 0rem 0.5rem;
  padding: 0rem 0.5rem 0rem 0.5rem;
  font-family: ${props => props.theme.fontHeader};
  font-weight: bold;
  /* font-size: 1rem; */
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
`

// const Contact = styled.div`
//   grid-area: c;
//   text-transform: uppercase;
// `
// const Portfolio = styled.div`
//   grid-area: p;
//   text-transform: uppercase;
// `
// const About = styled.div`
//   grid-area: a;
//   text-transform: uppercase;
// `

const BrandLink = styled(Link)`
  color: inherit;
  &:visited,
  &:active {
    color: inherit;
  }
  &:hover {
    color: ${({ theme }) => theme.primaryAccent};
  }
`

const Header = () => (
  <StyledHeader>
    <BrandTitle>
      <BrandLink to="/">blog.scottspence.me</BrandLink>
    </BrandTitle>
    {/* <Contact>contact</Contact> */}
    {/* <Portfolio>portfolio</Portfolio> */}
    {/* <About>about</About> */}
  </StyledHeader>
)

export default Header
