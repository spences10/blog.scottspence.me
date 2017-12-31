import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'

import { theme, media } from '../theme/globalStyle'

import Header from './components/Header'

require('prismjs/themes/prism-solarizedlight.css')

const PageContainer = styled.div`
  display: grid;
  width: 100%;
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
    background: goldenrod;
  `};
  ${media.desktop`
    grid-template-areas:
      '. . h h h h h h h h . .'
      '. . m m m m m m m m . .'
      '. . f f f f f f f f . .';
    background: dodgerblue;
  `};
  ${media.tablet`
  grid-template-columns: repeat(9, 1fr);
  grid-template-areas:
      '. h h h h h h h .'
      '. m m m m m m m .'
      '. f f f f f f f .';
    background: mediumseagreen;
  `};
  ${media.phone`
  grid-template-columns: repeat(9, 1fr);
  grid-template-areas:
      'h h h h h h h h h'
      'm m m m m m m m m'
      'f f f f f f f f f';
    background: palevioletred;
  `};
`

// min-height is just for the purpose of nice looking page
const Main = styled.div`
  grid-area: m;
  /* min-height: 800px; */
  /* padding: 1.75rem; */
  /* margin-top: 2.5rem; */
  /* margin-left: 0.5rem; */
  /* margin-right: 0.5rem; */
  /* padding-top: 0rem; */
`

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <PageContainer>
      <Helmet
        title="Scott Spence blog"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' }
        ]}
      />
      <Header />
      <Main>{children()}</Main>
    </PageContainer>
  </ThemeProvider>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
