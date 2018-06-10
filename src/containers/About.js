import React from 'react'
import { withRouteData } from 'react-static'
import styled from 'styled-components'

const PageWrapper = styled.div`
  grid-area: m;
`

export default withRouteData(({ allAuthors }) => (
  <PageWrapper>
    {allAuthors.map(author => (
      <div className="about-author" key={author.id}>
        <div className="about-header">
          <img
            className="about-avatar"
            alt={author.name}
            src={`https://media.graphcms.com/resize=w:100,h:100,fit:crop/${
              author.avatar.handle
            }`}
          />
          <h1>Hello! My name is {author.name}</h1>
        </div>
        <p>{author.bibliography}</p>
      </div>
    ))}
  </PageWrapper>
))
