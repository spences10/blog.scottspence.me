import React from 'react'
import { withRouteData } from 'react-static'

export default withRouteData(({ allTags }) => (
  <React.Fragment>
    {allTags.map((tag, index) => (
      <ul key={index}>
        <li>{tag.name}</li>
      </ul>
    ))}
  </React.Fragment>
))
