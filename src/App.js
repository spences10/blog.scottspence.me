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

const AppStyles = styled.div``

const Nav = styled.nav`
  top: 0;
  width: 100%;
  position: fixed;
  background: ${props => props.theme.primary};
  a {
    color: ${props => props.theme.fontDark};
    padding: 1rem;
    display: inline-block;
  }
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
