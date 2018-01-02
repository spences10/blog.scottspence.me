import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import { StyledH3, StyledP, StyledLi } from '../../theme/globalStyle'

const PostTags = StyledLi.extend`
  margin: 0rem 0rem 0rem 1rem;
  padding: 0rem;
  font-size: 0.75rem;
  font-weight: bold;
  display: inline-block;
  background: ${({ theme }) => theme.primary.light};
`

const TagLink = styled(Link)`
  color: inherit;
  &:visited,
  &:active {
    color: inherit;
  }
  &:hover {
    color: ${({ theme }) => theme.secondary.red};
  }
`

export const Tag = props => {
  return (
    <PostTags>
      <TagLink to={`/tags/${props.tag}`}>{props.tag}</TagLink>
    </PostTags>
  )
}

export default Tag
