import React from 'react'
import Link from 'gatsby-link'

import TagsContainer from '../layouts/components/TagsContainer'

const AllTags = ({ pathContext }) => {
  const { tags } = pathContext

  if (tags) {
    return (
      <div>
        <TagsContainer tags={tags} title="yes" />
      </div>
    )
  }
}

export default AllTags
