import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'gatsby-link'

import { StyledLi } from '../../theme/globalStyle'
import { slugIt } from '../../utils/helpers'

// top right bottom left
const PostTags = StyledLi.extend`
  margin: 0.15rem;
  padding: 0.15rem;
  /* font-size: 0.6rem; */
  font-weight: bold;
  display: inline-block;
  background: ${({ theme }) => theme.primary.light};
  transform: skew(-2deg); /* INVERSE SKEW */
  transition-delay: 0.2s;
  &:hover {
    transition-delay: 0.2s;
    transform: skew(2deg); /* SKEW */
  }
  border-radius: 4px;
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
    <PostTags key={`${slugIt(props.name)}-${props.tag}`}>
      <TagLink to={`/tags/${props.tag}`}>{props.tag}</TagLink>
    </PostTags>
  )
}

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired
}

export default Tag
