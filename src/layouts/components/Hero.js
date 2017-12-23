import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import faker from 'faker'

import { StyledH1, StyledUl, StyledLi, StyledP } from '../../theme/globalStyle'
import { ButtonBig } from './Button'
import LI from '../../img/list_icon_sm.png'
import BG from '../../img/grad_bg1.jpg'

const StyledMainHero = styled.div`
  min-height: 600px;
  max-height: 750px;
  grid-column: 2 / span 10;
`

const HeroTitle = StyledH1.extend`
  font-size: 4rem;
  color: ${props => props.theme.secondary.yellow};
  span {
    color: ${props => props.theme.primary.light};
  }
`

const HeroUl = StyledUl.extend`
  color: ${props => props.theme.secondary.yellow};
  padding: 0.5rem 1.5rem;
  margin: 0 0 1rem 0;
  list-style: none;
`

const HeroLi = StyledLi.extend`
  font-size: 1.8rem;
  padding: 0.5rem;
  margin: 1rem;
  text-indent: -1.5em;
  &:before {
    content: url(${LI});
    display: inline-block;
    padding: 0.3rem 2rem 0.3rem 0;
    vertical-align: middle;
  }
`

const MainHero = props => (
  <StyledMainHero>
    <HeroTitle>
      Welcome to <span>{props.title}</span>
    </HeroTitle>
    <HeroUl>
      <HeroLi>{faker.company.catchPhrase()}</HeroLi>
      <HeroLi>{faker.company.catchPhrase()}</HeroLi>
      <HeroLi>{faker.company.catchPhrase()}</HeroLi>
      <HeroLi>{faker.company.catchPhrase()}</HeroLi>
    </HeroUl>
  </StyledMainHero>
)

const buttonText = {
  stories: 'add story',
  support: 'add project',
  events: 'add event'
}

const StyledSimpleHero = StyledMainHero.extend`
  min-height: auto;
  height: 260px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
`

const SimpleHeroTitle = HeroTitle.extend`
  grid-column: 1 / span 12;
  color: ${props => props.theme.white};
  text-align: center;
  text-transform: uppercase;
  font-size: 3.4rem;
  padding: 0.5rem 0 0 0;
`

const SimpleHeroP = StyledP.extend`
  grid-column: 1 / span 12;
  color: ${props => props.theme.white};
  padding: 0.5rem 0;
  font-size: 1.4em;
  text-align: center;
`

const ButtonContainer = styled.div`
  grid-column: 6 / span 2;
`

const HeroButton = ButtonBig.extend`
  display: block;
  font-size: 1.6rem;
  margin: 0 auto;
  border-width: 2px;
`

const SimpleHero = props =>
  props.page === 'stories' ||
  props.page === 'support' ||
  props.page === 'events' ? (
    <StyledSimpleHero>
      <SimpleHeroTitle>{props.page}</SimpleHeroTitle>
      <SimpleHeroP>{faker.lorem.sentence()}</SimpleHeroP>
      <ButtonContainer>
        <HeroButton color={props => props.theme.white}>
          {buttonText[`${props.page}`]}
        </HeroButton>
      </ButtonContainer>
    </StyledSimpleHero>
  ) : (
    <StyledSimpleHero>
      <SimpleHeroTitle>{props.page}</SimpleHeroTitle>
      <SimpleHeroP>{faker.lorem.sentence()}</SimpleHeroP>
    </StyledSimpleHero>
  )

const StyledHero = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  background: ${props =>
    props.bg === 'main' ? `url(${BG})` : props => props.theme.secondary.green};
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0.5rem 0;
`

const Hero = props => (
  <StyledHero bg={props.type}>
    {props.type === 'main' ? (
      <MainHero title={props.title} />
    ) : (
      <SimpleHero page={props.type} />
    )}
  </StyledHero>
)

StyledHero.propTypes = {
  bg: PropTypes.string.isRequired
}

Hero.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string
}

MainHero.propTypes = {
  title: PropTypes.string
}

SimpleHero.propTypes = {
  page: PropTypes.string.isRequired,
  theme: PropTypes.object
}

export default Hero
