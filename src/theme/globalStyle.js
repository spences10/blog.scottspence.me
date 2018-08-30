// https://www.styled-components.com/docs/api#injectglobal
import { injectGlobal } from 'styled-components'

export const reset = () =>
  injectGlobal`
  
    @import url('https://fonts.googleapis.com/css?family=Nunito:400,700|Poppins:400,700|Trirong:400,700|Rubik:400,700|Eczar:400,700|Taviraj:400,700');
    @import url('https://fonts-for-the-font-god.netlify.com/dank-mono.css?family=dm');
    
    p[class*='language-'],
    code[class*='language-'],
    pre[class*='language-'] {
      font-family: dm, Consolas, Courier, monospace;
    }
    *, *:before, *:after {
      box-sizing: border-box;
    }
    /* use for debugging only!! */
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
    /* code {
      font-family: dm;
      color: rgb(101, 123, 131);
      background-color: rgb(253, 246, 227);
    } */
  `
