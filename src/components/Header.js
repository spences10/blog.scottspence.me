import React from 'react'
// import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { Wrapper as HW } from './Shared'

import { nameContent } from '../theme/constants'

const Wrapper = HW.extend`
  z-index: 1;
  position: fixed;
  top: 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-template-areas: '. . . b b b b b b . . .';
`

const Branding = styled.div`
  grid-area: b;
`

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
      <Branding>
        <BrandLink to={'/'}>
          <h1>{nameContent}</h1>
        </BrandLink>
      </Branding>
    </Wrapper>
  )
}

// Header.propTypes = {}

export default Header
