import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'
import styled, { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'

import { reset, media } from './theme/globalStyle'
import { siteMeta, nameContent } from './siteMeta'

import Nav from './components/Nav'
import Footer from './components/Footer'

import {
  BlogThemeContext,
  BlogThemeProvider
} from './contexts/BlogThemeContext'

import { BlogDataProvider } from './contexts/BlogDataContext'

import { loadLanguages } from 'reprism'
import bash from 'reprism/lib/languages/bash'
import json from 'reprism/lib/languages/json'
import yml from 'reprism/lib/languages/yaml'
import 'react-smackdown/themes/smackdown-light.css'

loadLanguages(json, yml, bash)

reset()

const AppStyles = styled.div`
  background-color: ${props => props.theme.background};
  background-image: url("${props => props.background}");
  background-attachment: fixed;
  /*space between first post and nav bar*/
  /* padding-top: 2.7rem; */
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    'h h h h h h h h h h h h'
    '. . . m m m m m m . . .'
    'f f f f f f f f f f f f';
  ${media.giant`
    grid-template-areas:
      '. . h h h h h h h h . .'
      '. . m m m m m m m m . .'
      '. . f f f f f f f f . .';
    /* background: goldenrod; */
  `};
  ${media.desktop`
    grid-template-areas:
      '. . h h h h h h h h . .'
      '. . m m m m m m m m . .'
      '. . f f f f f f f f . .';
    /* background: dodgerblue; */
  `};
  ${media.tablet`
    grid-template-columns: repeat(9, 1fr);
    grid-template-areas:
        '. h h h h h h h .'
        '. m m m m m m m .'
        '. f f f f f f f .';
    /* background: mediumseagreen; */
  `};
  ${media.phone`
    grid-template-columns: repeat(9, 1fr);
    grid-template-areas:
        'h h h h h h h h h'
        'm m m m m m m m m'
        'f f f f f f f f f';
    /* background: palevioletred; */
  `};
`

const ContentWrapper = styled.div`
  grid-area: m;
`

const NavWrapper = styled.div`
  /* grid-area: n; */
`

const App = () => (
  <Router>
    <BlogDataProvider>
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
                <Footer />
              </AppStyles>
            </ThemeProvider>
          )}
        </BlogThemeContext.Consumer>
      </BlogThemeProvider>
    </BlogDataProvider>
  </Router>
)

export default hot(module)(App)
