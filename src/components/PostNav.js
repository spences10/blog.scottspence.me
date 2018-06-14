import React from 'react'
// import {} from 'react-static'

import { BlogDataContext } from '../contexts/BlogDataContext'
import { Dump } from '../util/helpers'

const PostNav = () => {
  return (
    <BlogDataContext.Consumer>
      {({ allPosts }) => {
        // const { dateAndTime, isPublished, slug, title } = allPosts
        // window.location.href
        // console.log('=====================')
        // console.log(window.location.href)
        // console.log('=====================')
        return (
          <React.Fragment>
            <Dump props={allPosts} />
          </React.Fragment>
        )
      }}
    </BlogDataContext.Consumer>
  )
}

export default PostNav
