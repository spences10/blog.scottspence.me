import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0.25rem;
  padding: 0.25rem;
`

const Header = ({ siteTitle }) => (
  <Wrapper>
    <h1 style={{ margin: 0 }}>
      <StyledLink to="/">{siteTitle}</StyledLink>
    </h1>
  </Wrapper>
)

export default Header
