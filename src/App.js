import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'
import { reset } from './theme/globalStyle'
import styled, { ThemeProvider } from 'styled-components'

import {
  BlogThemeContext,
  BlogThemeProvider
} from './contexts/BlogThemeContext'

reset()

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
    <BlogThemeProvider>
      <BlogThemeContext.Consumer>
        {({ theme, background }) => (
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
        )}
      </BlogThemeContext.Consumer>
    </BlogThemeProvider>
  </Router>
)

export default hot(module)(App)
