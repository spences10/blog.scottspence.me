import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { StyledH1 } from '../../theme/globalStyle'
import { media } from '../../theme/utils'
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
  grid-template-areas: '. . . b b b b b b . . .';
  ${media.giant`
    grid-template-areas:
      '. . . b b b b b b . . .';
    background: dodgerblue;
  `};
  ${media.desktop`
    grid-template-areas:
      '. . b b b b b b b b . .';
    background: dodgerblue;
  `};
  ${media.tablet`
  grid-template-areas:
      '. b b b b b b b b b b .';
    background: mediumseagreen;
  `};
  ${media.phone`
  grid-template-areas:
      'b b b b b b b b b b b b';
    background: palevioletred;
  `};

  background-color: ${({ theme }) => theme.white};
  border-bottom: 1px solid ${({ theme }) => theme.primary.light};
`

const BrandTitle = StyledH1.extend`
  grid-area: b;
  color: ${({ theme }) => theme.primary.light};
  font-size: 1.6em;
  padding: 0.5rem;
  padding-left: 1.75rem;
  margin: 0.5rem;
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

const Header = () => (
  <StyledHeader>
    <BrandTitle>
      <BrandLink to="/">blog.scottspence.me</BrandLink>
    </BrandTitle>
    {/* <PageNav header={true} /> */}
  </StyledHeader>
)

export default Header
