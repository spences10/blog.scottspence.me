import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { StyledP, media } from '../../theme/globalStyle'
import { ICONS } from '../../theme/constants'
import Icon from './Icon'

const StyledFooter = styled.div`
  z-index: 1;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.white};
  border-top: 1px solid ${({ theme }) => theme.primary.light};

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-template-areas: '. . . . g t e l . . . .';
  ${media.giant`
  grid-template-columns: repeat(10, 1fr);
  grid-template-areas:
      '. . . g t e l . . .';
    /* background: goldenrod; */
  `};
  ${media.desktop`
  grid-template-columns: repeat(10, 1fr);
  grid-template-areas:
      '. . . g t e l . . .';
    /* background: dodgerblue; */
  `};
  ${media.tablet`
  grid-template-columns: repeat(10, 1fr);
  grid-template-areas:
      '. . . g t e l . . .';
    /* background: mediumseagreen; */
  `};
  ${media.phone`
  grid-template-columns: repeat(6, 1fr);
  grid-template-areas:
      ' . g t e l . ';
    /* background: palevioletred; */
  `};
`

const IconWrapper = styled.div`
  height: 100%;
  color: ${({ theme }) => theme.primary.light};
  grid-area: ${props => props.area};
  /* top right bottom left */
  margin: 0rem 0.5rem 0rem 0.5rem;
  padding: 0rem 0.5rem 0rem 0.5rem;
  font-size: 2rem;
  font-weight: bold;
`

const IconLink = styled.a`
  color: inherit;
  &:visited,
  &:active {
    color: inherit;
  }
  &:hover {
    color: ${({ theme }) => theme.secondary.red};
  }
`

const Footer = () => (
  <StyledFooter>
    <IconWrapper area={'g'}>
      <IconLink
        target="_blank"
        rel="noopener"
        href="https://github.com/spences10"
      >
        <Icon icon={ICONS.GITHUB} size={20} color="#453463" />
      </IconLink>
    </IconWrapper>
    <IconWrapper area={'t'}>
      <IconLink
        target="_blank"
        rel="noopener"
        href="https://twitter.com/ScottDevTweets"
      >
        <Icon
          viewbox="0 0 32 32"
          size={20}
          color="#453463"
          icon={ICONS.TWITTER}
        />
      </IconLink>
    </IconWrapper>
    <IconWrapper area={'e'}>
      <IconLink
        target="_blank"
        rel="noopener"
        href="mailto:spences10apps@gmail.com"
      >
        <Icon
          viewbox="0 0 32 32"
          size={20}
          color="#453463"
          icon={ICONS.EMAIL}
        />
      </IconLink>
    </IconWrapper>
    <IconWrapper area={'l'}>
      <IconLink
        target="_blank"
        rel="noopener"
        href="https://www.linkedin.com/in/linkedinscottspence/"
      >
        <Icon
          viewbox="0 0 32 32"
          size={20}
          color="#453463"
          icon={ICONS.LINKEDIN}
        />
      </IconLink>
    </IconWrapper>
  </StyledFooter>
)

export default Footer
