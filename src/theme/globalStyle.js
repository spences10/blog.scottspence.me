import styled, { injectGlobal, css } from 'styled-components'

const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 376,
}

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})

injectGlobal`

  @import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto|VT323|Source+Sans+Pro');

  *, *:before, *:after {
    box-sizing: border-box;
  }

  html {
    font-size: 2vw;
  }

  @media screen and (min-width: 50em) {
    html {
      font-size: 2vw;
    }
  }

  @media screen and (min-width: 75em) {
    html {
      font-size: 1.5em;
    }
  }
 
  body {
    padding: 0;
    margin: 0;
    font-family: Roboto, Arial, sans-serif;
    font-size: 20px;
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

export const theme = {
  text: '#333',
  white: '#fff',
  primary: {
    dark: '#453463',
    light: '#755f9f',
  },
  secondary: {
    green: '#8ac3a9',
    yellow: '#fcdeb6',
    red: '#ff8463',
  },
  shades: {
    //add shades with progress
  },
}

export const StyledH1 = styled.h1`
  padding: 1.75rem;
  margin: 0.5rem;
  font-family: 'Open Sans';
`

export const StyledH2 = styled.h2`
  padding: 1.75rem;
  margin: 0.5rem;
`

export const StyledH3 = styled.h3`
  padding: 1.75rem;
  margin: 0.5rem;
`

export const StyledH4 = styled.h4`
  padding: 1.75rem;
  margin: 0.5rem;
`

export const StyledH5 = styled.h5`
  padding: 1.75rem;
  margin: 0.5rem;
`

export const StyledH6 = styled.h6`
  padding: 1.75rem;
  margin: 0.5rem;
`

export const StyledP = styled.p`
  padding: 1.75rem;
  margin: 0.5rem;
`

export const StyledUl = styled.ul`
  padding: 1.75rem;
  margin: 0.5rem;
`

export const StyledLi = styled.li`
  padding: 1.75rem;
  margin: 0.5rem;
  text-decoration: none;
`

export const StyledA = styled.a`
  padding: 1.75rem;
  margin: 0.5rem;
`
