import React from 'react'
import styled from 'styled-components'

import rSLogo from '../reactStatic.png'
import gCSMLogo from '../powered_by_graphcms-1.svg'

const FooterWrapper = styled.div`
  z-index: 1;
  bottom: 0;
  width: 100%;
  /* position: fixed; sticky */
  grid-area: f;
  display: grid;
  background: ${props => props.theme.primary};
  color: ${props => props.theme.fontDark};
`

const Footer = props => {
  return (
    <FooterWrapper>
      <img
        src={rSLogo}
        height="2rem;"
        className="App-logo"
        alt="logo"
      />
      <img src={gCSMLogo} className="App-logo" alt="logo" />
    </FooterWrapper>
  )
}

export default Footer
