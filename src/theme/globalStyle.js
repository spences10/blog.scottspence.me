import { injectGlobal, css } from 'styled-components'
import { fontFace } from './fonts'

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
    fontHeader: 'Lato, sans-serif',
    fontBody: 'Merriweather, sans, sans-serif'
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
    fontHeader: 'Roboto, sans, sans-serif',
    fontBody: 'Nunito, sans-serif'
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

injectGlobal`
  ${fontFace('Lato', 'lato-v14-latin-700', 'bold')}
  ${fontFace('Merriweather', 'merriweather-v19-latin-regular')}
  ${fontFace('Nunito', 'nunito-v9-latin-700', 'bold')}
  ${fontFace('Poppins', 'poppins-v5-latin-regular')}
  ${fontFace('Roboto', 'roboto-v18-latin-700', 'bold')}
  ${fontFace('Nunito', 'nunito-v9-latin-regular')}

  code[class*='language-'],
  pre[class*='language-'] {
    font-family: 'Dank Mono', Consolas, Courier, monospace;
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
    font-family: ${props => props.theme.fontBody};
    /* font-size: 0.75rem; */
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
  }

`
