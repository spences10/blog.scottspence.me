import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'

import { theme, media } from '../theme/globalStyle'
import { siteMeta } from '../constants'

import Header from './components/Header'
import Footer from './components/Footer'

require('prismjs/themes/prism-solarizedlight.css')

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    '. . . h h h h h h . . .'
    '. . . m m m m m m . . .'
    '. . . f f f f f f . . .';
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

const Main = styled.div`
  grid-area: m;
  /* min-height: 800px; */
  /* padding: 1.75rem; */
  /* header and post gap 🤷‍*/
  margin: 2.5rem 0rem 2.5rem 0rem;
  ${media.giant`
    /* background: goldenrod; */
    margin: 2.6rem 0rem 2.6rem 0rem;
  `};
  ${media.desktop`
    /* background: dodgerblue; */
    margin: 2.6rem 0rem 2.6rem 0rem;
  `};
  ${media.tablet`
    /* background: mediumseagreen; */
    margin: 2.6rem 0rem 2.6em 0rem;
  `};
  ${media.phone`
    /* background: palevioletred; */
    margin: 2.7rem 0rem 2.7rem 0rem;
  `};
  /* margin-left: 0.5rem; */
  /* margin-right: 0.5rem; */
  /* padding-top: 0rem; */
`

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <PageContainer>
      <Helmet title="Scott Spence - blog" meta={siteMeta} />
      <Header />
      <Main>{children()}</Main>
      <Footer />
    </PageContainer>
  </ThemeProvider>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
