import React from 'react'
import { Link } from 'react-static'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

import { siteUrl } from '../siteMeta'

const NavWrapper = styled.nav`
  grid-area: n;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-template-areas: '. . . b b b b b b . . .';
  z-index: 1;
  top: 0;
  width: 100%;
  position: fixed;
  display: grid;
  background: ${props => props.theme.primary};
  color: ${props => props.theme.fontDark};
  padding: 1rem;
`

const LinksWrapper = styled.div`
  font-size: 2rem;
  font-weight: 700;
  font-family: ${props => props.theme.fontHeader};
  grid-area: b;
`

const Nav = props => {
  return (
    <NavWrapper>
      <LinksWrapper>
        <Link exact to="/">
          {siteUrl.substring(8)}
        </Link>
        <Link to="/about">About</Link>
      </LinksWrapper>
    </NavWrapper>
  )
}

// Nav.propTypes = {}

export default Nav
