import React from 'react'
import g from 'glamorous'
import { css } from 'glamor'
import Link from 'gatsby-link'

import { rhythm } from '../utils/typography'

const linkStyle = css({ float: `right` })

export default ({ children }) => (
  <g.Div margin={`0 auto`} maxWidth={700} padding={rhythm(2)} paddingTop={rhythm(1.5)}>
    <Link to={`/`}>
      <g.H3 marginBottom={rhythm(2)} display={`inline-block`} fontStyle={`normal`}>
        Pandas Eating Lots
      </g.H3>
    </Link>
    <Link className={linkStyle} to={`/about/`}>
      About
    </Link>
    {children()}
  </g.Div>
)
