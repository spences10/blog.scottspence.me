import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { StyledH1 } from '../../theme/globalStyle'
// import PageNav from './PageNav.js'

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  grid-area: hd;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-template-areas: '. . brand brand brand brand brand . . . . .';
  background-color: ${({ theme }) => theme.white};
  border-bottom: 1px solid ${({ theme }) => theme.primary.light};
`

const BrandTitle = StyledH1.extend`
  grid-area: brand;
  color: ${({ theme }) => theme.primary.light};
  font-size: 1.6em;
  padding: 0.5rem;
`

const BrandLink = styled(Link)`
  color: inherit;
  &:visited,
  &:active {
    color: inherit;
  }
  &:hover {
    color: ${({ theme }) => theme.secondary.red};
  }
`

const Header = () => (
  <StyledHeader>
    <BrandTitle>
      <BrandLink to="/">scottspence.me</BrandLink>
    </BrandTitle>
    {/* <PageNav header={true} /> */}
  </StyledHeader>
)

export default Header
