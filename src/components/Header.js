import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

const ComponentWrapper = styled.div`
  grid-area: h;
`
const Header = ({ siteTitle }) => {
  return (
    <ComponentWrapper>
      <h1>{siteTitle}</h1>
    </ComponentWrapper>
  )
}

// Header.propTypes = {}

export default Header
