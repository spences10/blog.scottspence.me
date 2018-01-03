import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { StyledH1, media } from '../../theme/globalStyle'
// import PageNav from './PageNav.js'

const StyledFooter = styled.div`
  z-index: 1;
  position: fixed;
  bottom: 0;
  width: 100%;
  grid-area: f;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-template-areas: '. . . f f f f f f . . .';
  ${media.giant`
    grid-template-areas:
      '. . f f f f f f f f . .';
    /* background: goldenrod; */
  `};
  ${media.desktop`
    grid-template-areas:
      '. . f f f f f f f f. .';
    /* background: dodgerblue; */
  `};
  ${media.tablet`
  grid-template-columns: repeat(9, 1fr);
  grid-template-areas:
      '. f f f f f f f .';
    /* background: mediumseagreen; */
  `};
  ${media.phone`
  grid-template-columns: repeat(9, 1fr);
  grid-template-areas:
      'f f f f f f f f';
    /* background: palevioletred; */
  `};

  background-color: ${({ theme }) => theme.white};
  border-top: 1px solid ${({ theme }) => theme.primary.light};
`

const BrandTitle = StyledH1.extend`
  grid-area: f;
  color: ${({ theme }) => theme.primary.light};
  /* top right bottom left */
  margin: 0rem 0.5rem 0rem 0.5rem;
  padding: 0rem 0.5rem 0rem 0.5rem;
  font-family: Source Sans Pro;
  font-weight: bold;
  ${media.giant`
    font-size: 2rem;
  `};
  ${media.desktop`
    font-size: 2rem;
  `};
  ${media.tablet`
    font-size: 2rem;
  `};
  ${media.phone`
    font-size: 2rem;
  `};
`

const BrandLink = styled(Link)`
  color: inherit;
  &:visited,
  &:active {
    color: inherit;
  }
  &:hover {
    color: ${({ theme }) => theme.secondary.red};
  }
`

const Footer = () => (
  <StyledFooter>
    <BrandTitle>
      <BrandLink to="/">blog.scottspence.me</BrandLink>
    </BrandTitle>
    {/* <PageNav header={true} /> */}
  </StyledFooter>
)

export default Footer
