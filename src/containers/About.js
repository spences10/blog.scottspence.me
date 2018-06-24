import React from 'react'
import { withRouteData, Head } from 'react-static'
import styled from 'styled-components'

import { nameContent } from '../siteMeta'

const PageWrapper = styled.div`
  grid-area: m;
  height: 100vh;
`

const About = ({ allAuthors }) => (
  <PageWrapper>
    <Head title={`About - ${nameContent}`} />
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
)

export default withRouteData(About)
