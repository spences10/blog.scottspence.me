import { injectGlobal, css } from 'styled-components'
// import { HERO } from './constants'
import { fontFace } from './fonts'

import dankYo from '../fonts/dank-mono.css'

export const themes = {
  theme1: {
    primary: '#f2ff49',
    primaryAccent: '#645dd7',
    pink: '#ff0198',
    blue: '#01c1d6',
    branding: '#f7e018',
    secondary: '#ff4242',
    background: '#b1b1cc',
    foreground: '#fefefe',
    border: '#044040',
    fontDark: '#34434b',
    fontLight: '#586368',
    fontWhite: '#ffffff',
    fontHeader: 'Nunito, sans, sans-serif',
    fontBody: 'Poppins, sans-serif'
  },

  theme2: {
    primary: '#9166ff',
    primaryAccent: '#ecd444',
    pink: '#ff0198',
    blue: '#01c1d6',
    branding: '#f7e018',
    secondary: '#eb238e',
    background: '#f9f9fd',
    foreground: '#fefefe',
    border: '#044040',
    fontDark: '#34434b',
    fontLight: '#586368',
    fontWhite: '#ffffff',
    fontHeader: 'Trirong, sans, sans-serif',
    fontBody: 'Rubik, sans-serif'
  },

  theme3: {
    primary: '#ff0198',
    primaryAccent: '#ffb617',
    pink: '#ff0198',
    blue: '#01c1d6',
    branding: '#01c1d6',
    secondary: '#eb238e',
    background: '#e6e6e6',
    foreground: '#f7f0f0',
    border: '#054545',
    fontDark: '#034544',
    fontLight: '#596869',
    fontWhite: '#ffffff',
    fontHeader: 'Eczar, sans, sans-serif',
    fontBody: 'Taviraj, sans-serif'
  }
}

const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 376
}

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce(
  (accumulator, label) => {
    // use em in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    const emSize = sizes[label] / 16
    accumulator[label] = (...args) => css`
      @media (max-width: ${emSize}em) {
        ${css(...args)};
      }
    `
    return accumulator
  },
  {}
)

export const reset = () =>
  injectGlobal`

    ${fontFace('Nunito', 'nunito-v9-latin-700', 'bold')}
    ${fontFace('Poppins', 'poppins-v5-latin-regular')}
    
    ${fontFace('Trirong', 'trirong-v3-latin-700', 'bold')}
    ${fontFace('Rubik', 'rubik-v7-latin-regular')}
    
    ${fontFace('Eczar', 'eczar-v6-latin-700', 'bold')}
    ${fontFace('Taviraj', 'taviraj-v3-latin-regular')}
    
    @font-face {
      font-family: dm;
      src: url(${dankYo}) format('woff');
      font-weight: normal;
    }
    /* @import url('../fonts/dank-mono.css/css?family=dm') format('woff'); */

    p[class*='language-'],
    code[class*='language-'],
    pre[class*='language-'] {
      font-family: dm, Consolas, Courier, monospace;
    }

    *, *:before, *:after {
      box-sizing: border-box;
    }
    /* * {
      outline: 1px solid red !important;
    } */

    body {
      padding: 0;
      margin: 0;
      line-height: 1.3125;
    }
    a {
      text-decoration: none;
    }
    a:active, a:focus {
      outline: 0;
      border: none;
      -moz-outline-style: none
    }
    :focus {
      outline:none;
    }
    
    ::-moz-focus-inner {
      border:0;
    }
    ul {
      margin: 0 auto;
      /* list-style-type: none; */
    }
    img {
      max-width: 100%;
      max-height: 100%;
    }
    blockquote {
      border-left: 5px solid #ccc;
      padding-left: 5px;
      font-style: italic;
    }
  `
