import React from 'react'
import Link from 'gatsby-link'

const AllTags = ({ pathContext }) => {
  const { tags } = pathContext

  if (tags) {
    return (
      <div>
        <ul>
          {tags.map(tag => {
            return (
              <li>
                <Link to={`/tags/${tag}`}>{tag}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default AllTags
