import React from 'react'
import Link from 'gatsby-link'

import TagsContainer from '../layouts/components/TagsContainer'

const AllTags = ({ pathContext }) => {
  const { tags } = pathContext

  if (tags) {
    return (
      <div>
        {/* <ul> */}
        <TagsContainer tags={tags} />
        {/* {tags.map(tag => {
            return (
              <li>
                <Link to={`/tags/${tag}`}>{tag}</Link>
              </li>
            )
          })} */}
        {/* </ul> */}
      </div>
    )
  }
}

export default AllTags
