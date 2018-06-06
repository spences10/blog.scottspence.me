import React from 'react'
import { Router, Link } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'

injectGlobal`
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
    list-style-type: none;
  }
`

const AppStyles = styled.div`
  a {
    text-decoration: none;
    color: #108db8;
    font-weight: bold;
  }

  nav {
    width: 100%;
    background: #108db8;

    a {
      color: white;
      padding: 1rem;
      display: inline-block;
    }
  }

  .content {
    padding: 1rem;
  }

  img {
    max-width: 100%;
  }
`

const App = () => (
  <Router>
    <AppStyles>
      <nav>
        <Link exact to="/">
          Home
        </Link>
        <Link to="/about">About</Link>
      </nav>
      <div className="content">
        <Routes />
      </div>
    </AppStyles>
  </Router>
)

export default hot(module)(App)
