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
    color: ${props => props.theme.fontDark};
    font-weight: bold;
  }

  .content {
    padding: 1rem;
  }

  img {
    max-width: 100%;
  }
`

const Nav = styled.nav`
  width: 100%;
  background: ${props => props.theme.primary};

  a {
    color: ${props => props.theme.fontDark};
    padding: 1rem;
    display: inline-block;
  }
  position: fixed;
`

const App = () => (
  <Router>
    <BlogThemeProvider>
      <BlogThemeContext.Consumer>
        {({ theme, background }) => (
          <ThemeProvider theme={theme}>
            <AppStyles>
              <Nav>
                <Link exact to="/">
                  Home
                </Link>
                <Link to="/about">About</Link>
              </Nav>
              <div className="content">
                <Routes />
              </div>
            </AppStyles>
          </ThemeProvider>
        )}
      </BlogThemeContext.Consumer>
    </BlogThemeProvider>
  </Router>
)

export default hot(module)(App)
