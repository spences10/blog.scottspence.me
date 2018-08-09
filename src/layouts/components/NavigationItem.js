import Link from 'gatsby-link'
import React from 'react'
import PropTypes from 'prop-types'

const NavigationItem = ({ depth, href, value }) => (
  <dd className={`depth-${depth}`}>
    <Link to={href}>{value}</Link>
  </dd>
)

NavigationItem.defaultProps = {
  depth: 0
}

NavigationItem.propTypes = {
  depth: PropTypes.any,
  href: PropTypes.any,
  value: PropTypes.any
}

export default NavigationItem
