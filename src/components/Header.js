import React from 'react'
import { Link } from 'react-static'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

import { siteUrl } from '../siteMeta'
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
  margin: 0.25rem;
  padding: 0.25rem;
`

const Header = props => {
  return (
    <HeaderWrapper>
      <LinksWrapper area={'b'}>
        <StyledLink exact to="/">
          {siteUrl.substring(8)}
        </StyledLink>
      </LinksWrapper>
    </HeaderWrapper>
  )
}

export default Header
