import React from 'react'
import styled from 'styled-components'
import Tag from './Tag'

import { StyledH1, StyledP } from '../../theme/globalStyle'

const TagsTitle = StyledP.extend`
  margin: 0.25rem 0rem 0.25rem 0rem;
  padding: 0.25rem 0rem 0.25rem 0rem;
  font-size: 0.55rem;
  font-weight: bold;
`

// top right bottom left
const Container = styled.div`
  margin: 1rem 0rem 1rem 0rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  /* border: 1px solid ${props => props.border}; */
`

export const TagsContainer = props => (
  <Container>
    <TagsTitle>Tagged under:</TagsTitle>
    {props.tags.map(tag => <Tag key={tag} tag={tag} />)}
  </Container>
)

export default TagsContainer
