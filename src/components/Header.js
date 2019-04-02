import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { media } from '../theme/globalStyle'

const HeaderWrapper = styled.header`
  z-index: 1;
  top: 0;
  width: 100%;
  position: sticky;
  display: grid;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.fontDark};
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
      'b b b b b b b b b';
    /* background: mediumseagreen; */
  `};
  ${media.phone`
    grid-template-columns: repeat(9, 1fr);
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
  color: ${props => props.theme.fontLight};
  margin: 0.25rem;
  padding: 0.25rem;
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <LinksWrapper area={'b'}>
      <StyledLink to="/">{siteTitle}</StyledLink>
    </LinksWrapper>
  </HeaderWrapper>
)

export default Header
