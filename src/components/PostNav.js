import React from 'react'
import { withSiteData } from 'react-static'

import { BlogDataContext } from '../contexts/BlogDataContext'
import { Dump } from '../util/helpers'

const PostNav = () => {
  return (
    <BlogDataContext.Consumer>
      {({ allPosts }) => (
        <React.Fragment>
          <Dump props={allPosts} />
        </React.Fragment>
      )}
    </BlogDataContext.Consumer>
  )
}

export default PostNav
