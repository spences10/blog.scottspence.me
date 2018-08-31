import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { media } from '../theme/globalStyle'

const HeaderWrapper = styled.header`
  z-index: 1;
  top: 0;
  width: 100%;
  position: sticky;
  display: grid;
  background: ${props => props.theme.primary};
  color: ${props => props.theme.fontDark};
  /* padding: 1rem; */
  box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 5px;
  grid-area: h;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-template-areas: '. . . b b b b b b . . .';
  ${media.giant`
    grid-template-areas:
      '. . b b b b b b b b . .';
    /* background: goldenrod; */
    `};
  ${media.desktop`
    grid-template-areas:
      '. b b b b b b b b b b .';
    /* background: dodgerblue; */
    `};
  ${media.tablet`
    grid-template-columns: repeat(9, 1fr);
    grid-template-areas:
      '. b b b b b b b .';
    /* background: mediumseagreen; */
  `};
  ${media.phone`
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
        'b b b b b b b b b';
    /* background: palevioletred; */
  `};
`

const LinksWrapper = styled.div`
  font-size: 2rem;
  font-weight: 700;
  grid-area: ${props => props.area};
`

const StyledLink = styled(Link)`
  font-family: ${props => props.theme.fontHeader};
  color: ${props => props.theme.fontDark};
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <LinksWrapper area={'b'}>
      <StyledLink to="/">{siteTitle}</StyledLink>
    </LinksWrapper>
  </HeaderWrapper>
)

export default Header
