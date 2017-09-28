import React from 'react'

export default ({ data }) => (
  <div>
    <h1>About me</h1>
    <p>
      Hi my name is Scott, I’m an Analyst Developer with the main skills of VBA and SQL, I want to change this so have
      decided to self educate myself on other general programming languages and web development.
    </p>
    <p>
      If you're interested this blog details various notes on my experiences with programming and technology and the odd
      rant.
    </p>
    <h2>What I'm doing now</h2>
    <li>Working as an (Analyst Developer) IT contractor</li>
    <li>Currently working in a three man development team on a GitHub community project</li>
    <li>Exercising three times a week with heavy compound lifts</li>
    <p>
      Updated 20170928 - <a href='http://nownownow.com/about'>Why now?</a>{' '}
    </p>
  </div>
)

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
