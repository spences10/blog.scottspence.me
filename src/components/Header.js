import React from 'react'
// import PropTypes from 'prop-types'
import { Wrapper } from './Shared'

import { nameContent } from '../theme/constants'

const Header = () => {
  return (
    <Wrapper area={'h'}>
      <h1>{nameContent}</h1>
    </Wrapper>
  )
}

// Header.propTypes = {}

export default Header
