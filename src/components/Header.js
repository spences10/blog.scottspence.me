import React from 'react'
// import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { Wrapper } from './Shared'

import { nameContent } from '../theme/constants'

const BrandLink = styled(Link)`
  color: inherit;
  &:visited,
  &:active {
    color: inherit;
  }
  &:hover {
    color: ${({ theme }) => theme.primaryAccent};
  }
`

const Header = () => {
  return (
    <Wrapper area={'h'}>
      <BrandLink to="/">
        <h1>{nameContent}</h1>
      </BrandLink>
    </Wrapper>
  )
}

// Header.propTypes = {}

export default Header
