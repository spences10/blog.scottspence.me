import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

import ThemeSelect from '../components/ThemeSelect'

const Wrapper = styled.div`
  z-index: 1;
  position: fixed;
  bottom: 0;
  width: 100%;
  grid-area: f;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-template-areas: '. . . . . . . . . . t t';
`

const ThemePosition = styled.div`
  grid-area: t;
`

const Footer = props => {
  return (
    <Wrapper>
      <ThemePosition>
        <ThemeSelect />
      </ThemePosition>
    </Wrapper>
  )
}

// Footer.propTypes = {}

export default Footer
