import React from 'react'
import styled from 'styled-components'
// import Link from 'gatsby-link'

import TagsContainer from '../layouts/components/TagsContainer'

const Container = styled.div`
  margin: 1rem;
  padding: 1rem;
  background: ${({ theme }) => theme.background};
  border: 1px solid ${props => props.border};
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`

const AllTags = ({ pathContext }) => {
  const { tags } = pathContext

  if (tags) {
    return (
      <Container>
        <TagsContainer tags={tags} title="yes" />
      </Container>
    )
  }
}

export default AllTags
