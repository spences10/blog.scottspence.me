import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// import faker from 'faker'

import { StyledH1, StyledUl, StyledLi, StyledP } from '../../theme/globalStyle'
import { ButtonBig } from './Button'

const StyledMainHero = styled.div`
  min-height: 50px;
  max-height: 100px;
  grid-column: 2 / span 10;
`

const HeroTitle = StyledH1.extend`
  font-size: 4rem;
  color: ${({ theme }) => theme.secondary.yellow};
  span {
    color: ${({ theme }) => theme.primary.light};
  }
`

const Hero = props => (
  <StyledMainHero>
    <HeroTitle>
      <span>{props.title}</span>
    </HeroTitle>
  </StyledMainHero>
)

Hero.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string
}

export default Hero
