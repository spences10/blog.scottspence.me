import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

import { BlogThemeContext } from './BlogThemeContext'

const PageContainer = styled.div`
  background-color: ${props => props.theme.background};
  background-image: url("${props => props.background}");
  background-attachment: fixed;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    'h h h h h h h h h h h h'
    '. . . m m m m m m . . .'
    'f f f f f f f f f f f f';
`

const GlobalLayout = ({ children }) => {
  return (
    <BlogThemeContext.Consumer>
      {({ background }) => (
        <PageContainer background={background}>
          {children}
        </PageContainer>
      )}
    </BlogThemeContext.Consumer>
  )
}

// GlobalLayout.propTypes = {}

export default GlobalLayout
