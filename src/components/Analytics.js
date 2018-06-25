import React from 'react'
//
let Analytics = {}
if (typeof document !== 'undefined') {
  Analytics = require('react-router-ga').default
}
//
export default ({ children, ...rest }) => {
  if (typeof document !== 'undefined') {
    return <Analytics {...rest}>{children}</Analytics>
  }

  return children
}
