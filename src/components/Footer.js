import React from 'react'
import styled from 'styled-components'

import ThemeSelect from '../components/ThemeSelect'

import { media } from '../theme/globalStyle'

import rSLogo from '../reactStatic.png'
import gCSMLogo from '../powered_by_graphcms-1.svg'

const FooterWrapper = styled.div`
  z-index: 1;
  bottom: 0;
  /* width: 100%; */
  /* position: fixed; sticky */
  height: 10rem;
  grid-area: f;
  display: grid;
  background: ${props => props.theme.primary};
  color: ${props => props.theme.fontDark};

  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    '. . . t . . . . g . . .'
    '. . . . . . . . r . . .';
  ${media.giant`
    grid-template-areas:
      '. . . t . . . . g . . .'
      '. . . . . . . . r . . .';
    /* background: goldenrod; */
  `};
  ${media.desktop`
    grid-template-areas:
      '. . t . . . . . g g . .'
      '. . . . . . . . r r . .';
    /* background: dodgerblue; */
  `};
  ${media.tablet`
    grid-template-columns: repeat(9, 1fr);
    grid-template-areas:
        '. t . . . . . g .'
        '. . . . . . . r .';
    /* background: mediumseagreen; */
  `};
  ${media.phone`
    grid-template-columns: repeat(9, 1fr);
    grid-template-areas:
        't . . . . . . . g'
        '. . . . . . . . r';
    /* background: palevioletred; */
  `};
`

const ImageWrapper = styled.div`
  margin: 0.25rem;
  padding: 0.25rem;
  grid-area: ${props => props.area};
`

const Footer = props => {
  return (
    <FooterWrapper>
      <ThemeSelect />
      <ImageWrapper area={'r'}>
        <img src={rSLogo} className="App-logo" alt="logo" />
      </ImageWrapper>
      <ImageWrapper area={'g'}>
        <img src={gCSMLogo} className="App-logo" alt="logo" />
      </ImageWrapper>
    </FooterWrapper>
  )
}

export default Footer
