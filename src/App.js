import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'
import styled, { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'

import { reset } from './theme/globalStyle'
import { siteMeta, nameContent } from './siteMeta'

import Nav from './components/Nav'

import {
  BlogThemeContext,
  BlogThemeProvider
} from './contexts/BlogThemeContext'

reset()

const AppStyles = styled.div`
  background-color: ${props => props.theme.background};
  background-image: url("${props => props.background}");
  background-attachment: fixed;
  /*space between first post and nav bar*/
  padding-top: 2.7rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    '. . . h h h h h h . . .'
    '. . . m m m m m m . . .'
    '. . . f f f f f f . . .';
`

const ContentWrapper = styled.div`
  grid-area: m;
`

const NavWrapper = styled.div`
  grid-area: n;
`

const App = () => (
  <Router>
    <BlogThemeProvider>
      <BlogThemeContext.Consumer>
        {({ theme, background }) => (
          <ThemeProvider theme={theme}>
            <AppStyles background={background}>
              <Helmet title={nameContent} meta={siteMeta} />
              <Nav />
              <ContentWrapper className="content">
                <Routes />
              </ContentWrapper>
            </AppStyles>
          </ThemeProvider>
        )}
      </BlogThemeContext.Consumer>
    </BlogThemeProvider>
  </Router>
)

export default hot(module)(App)
