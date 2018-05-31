import React from 'react'
import Link from 'gatsby-link'

const AllTags = ({ pageContext }) => {
  const { tags } = pageContext
  return (
    <React.Fragment>
      <ul>
        {tags.map(tag => {
          return (
            <li>
              <Link to={`/tags/${tag}`}>{tag}</Link>
            </li>
          )
        })}
      </ul>
    </React.Fragment>
  )
}

export default AllTags
