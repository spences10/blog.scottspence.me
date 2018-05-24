import styled, { injectGlobal, css } from 'styled-components'

export const themes = {
  theme1: {
    primary: '#6e27c5',
    primaryAccent: '#eb238e',
    pink: '#ff0198',
    blue: '#01c1d6',
    branding: '#f7e018',
    secondary: '#fcdeb6',
    background: '#f9f9fd',
    foreground: '#fefefe',
    border: '#044040',
    fontDark: '#34434b',
    fontLight: '#586368',
    fontWhite: '#ffffff',
    fontHeader: 'Amaranth, sans-serif',
    fontBody: '"Titillium Web", sans, sans-serif'
  },

  theme2: {
    primary: '#ff0198',
    primaryAccent: '#eb238e',
    pink: '#ff0198',
    blue: '#01c1d6',
    branding: '#01c1d6',
    secondary: '#ffb617',
    background: '#e6e6e6',
    foreground: '#f7f0f0',
    border: '#054545',
    fontDark: '#034544',
    fontLight: '#596869',
    fontWhite: '#ffffff',
    fontHeader: 'Open Sans, sans, sans-serif',
    fontBody: 'Nunito, sans-serif'
  },

  theme3: {
    primary: '#6e27c5',
    primaryAccent: '#eb238e',
    pink: '#ff0198',
    blue: '#01c1d6',
    branding: '#f7e018',
    secondary: '#fcdeb6',
    background: '#f9f9fd',
    foreground: '#fefefe',
    border: '#044040',
    fontDark: '#34434b',
    fontLight: '#586368',
    fontWhite: '#ffffff',
    fontHeader: 'Nunito, sans, sans-serif',
    fontBody: 'Open Sans, sans-serif'
  }
}

export const theme1 = {
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
  },
  fontHeader: 'Amaranth, sans-serif',
  fontBody: '"Titillium Web", sans, sans-serif',
  background: '#dfdbe5'
}

export const theme2 = {
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
  },
  fontHeader: 'Open Sans, sans, sans-serif',
  fontBody: 'Nunito, sans-serif',
  background: '#ffa6b2'
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
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700|Titillium+Web:400,700|Amaranth:400,700|Nunito:400,700');

  *, *:before, *:after {
    box-sizing: border-box;
  }

  /* * {
    outline: 1px solid red !important;
  } */

  html {
    /* font-size: 18px; */
  }

  ${media.giant`
    html {
      /* font-size: 1rem; */
    }
  `};
  ${media.desktop`
    html {
      /* font-size: 1rem; */
    }
  `};
  ${media.tablet`
    html {
      /* font-size: 1rem; */
    }
  `};
  ${media.phone`
    html {
      /* font-size: 1rem; */
    }
  `};

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

export const StyledH1 = styled.h1`
  padding: 0.5rem;
  margin: 0.5rem;
  font-family: ${props => props.theme.fontHeader};
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
