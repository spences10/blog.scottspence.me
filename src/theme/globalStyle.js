import { injectGlobal, css } from 'styled-components'
import { HERO } from './constants'

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

export const reset = () =>
  injectGlobal`

    @import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto|VT323|Source+Sans+Pro');

    *, *:before, *:after {
      box-sizing: border-box;
    }

    body {
      padding: 0;
      margin: 0;
      font-family: Roboto, sans-serif;
      /* font-size: 0.75rem; */
      line-height: 1.3125;
      background-color: #dfdbe5;
      background-image: url("${HERO}");
      background-attachment: fixed;
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
      list-style-type: none;
    }
  `
