import React from 'react'
import { Link } from 'react-static'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

import { siteUrl } from '../siteMeta'
import { media } from '../theme/globalStyle'

const NavWrapper = styled.nav`
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
  grid-template-areas: '. . . b b b b b a . . .';
  ${media.giant`
    grid-template-areas:
      '. . b b b b b b b a . .';
    /* background: goldenrod; */
  `};
  ${media.desktop`
    grid-template-areas:
      '. . b b b b b b b a . .';
    /* background: dodgerblue; */
  `};
  ${media.tablet`
    grid-template-columns: repeat(9, 1fr);
    grid-template-areas:
        '. b b b b b b a .';
    /* background: mediumseagreen; */
  `};
  ${media.phone`
    grid-template-columns: repeat(9, 1fr);
    grid-template-areas:
        'b b b b b b b b a';
    /* background: palevioletred; */
  `};
`

const LinksWrapper = styled.div`
  font-size: 2rem;
  font-weight: 700;
  font-family: ${props => props.theme.fontHeader};
  grid-area: ${props => props.area};
`

const StyledLink = styled(Link)`
  margin: 0.25rem;
  padding: 0.25rem;
`

const Nav = props => {
  return (
    <NavWrapper>
      <LinksWrapper area={'b'}>
        <StyledLink exact to="/">
          {siteUrl.substring(8)}
        </StyledLink>
      </LinksWrapper>
      <LinksWrapper area={'a'}>
        <StyledLink area={'a'} to="/about">
          about
        </StyledLink>
      </LinksWrapper>
    </NavWrapper>
  )
}

// Nav.propTypes = {}

export default Nav
