import { injectGlobal, css } from 'styled-components'
import { HERO } from './constants'

export const theme = {
  text: '#333',
  white: '#fff',
  primary: {
    dark: '#453463',
    light: '#755f9f'
  },
  secondary: {
    green: '#8ac3a9',
    yellow: '#fcdeb6',
    red: '#ff8463'
  },
  shades: {
    dark: 'rgba(69, 52, 99, 0.5)',
    offWhite: 'rgb(244, 254, 254)'
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
