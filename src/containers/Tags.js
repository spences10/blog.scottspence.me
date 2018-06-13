import React from 'react'
import { withRouteData } from 'react-static'
import styled from 'styled-components'
import { Dump } from '../util/helpers'

const PageWrapper = styled.div`
  height: 100vh;
`

// position: absolute;
// min-height: 100%;
// width: 100%;
// background-size: 15% auto;

export default withRouteData(({ allTags }) => (
  <PageWrapper>
    <Dump props={allTags} />
    {allTags.map((tag, index) => (
      <ul key={index}>
        <li>{tag.name}</li>
      </ul>
    ))}
  </PageWrapper>
))
