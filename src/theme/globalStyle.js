// https://www.styled-components.com/docs/api#injectglobal
import { createGlobalStyle, css } from 'styled-components';

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
    fontBody: 'Poppins, sans-serif',
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
    fontBody: 'Rubik, sans-serif',
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
    fontBody: 'Taviraj, sans-serif',
  },
};

const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 376,
};

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce(
  (accumulator, label) => {
    // use em in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    const emSize = sizes[label] / 16;
    accumulator[label] = (...args) => css`
      @media (max-width: ${emSize}em) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {}
);

const fonts = () => {
  const list = [
    'Nunito:400,700|',
    'Poppins:400,700|',
    'Trirong:400,700|',
    'Rubik:400,700|',
    'Eczar:400,700|',
    'Taviraj:400,700|',
  ];
  return list.join('');
};

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=${fonts()}');
    @import url('https://fonts-for-the-font-god.netlify.com/dank-mono.css?family=dm');
    
    /* use for debugging only!! */
    /* * {
      outline: 1px solid red !important;
    } */
    *, *:before, *:after {
      box-sizing: border-box;
    }
    body {
      padding: 0;
      margin: 0;
      line-height: 1.6125;
      overflow-x: initial;
    }
    ul {
      margin: 0 auto;
      .task-list-item {
        list-style-type: none;
      }
    }
    img {
      max-width: 100%;
      max-height: 100%;
    }
    .embedVideoIframe {
      width: 100%;
    }
  `;
