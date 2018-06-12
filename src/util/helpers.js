import { format } from 'date-fns'
import React from 'react'

export const formatDate = dateIn => {
  return format(dateIn, 'YYYY MMM Do')
}

export const excerpt = (string, length = 250) => {
  if (string.length > length) {
    return `${string.substring(0, length)}...`
  } else {
    return string
  }
}

export const Dump = props => (
  <div
    style={{
      fontSize: 20,
      border: '1px solid #efefef',
      padding: 10,
      background: 'white'
    }}
  >
    {Object.keys(props).map(prop => (
      <pre key={prop}>
        <strong style={{ color: 'white', background: 'red' }}>
          {prop} 💩
        </strong>
        {JSON.stringify(props[prop], '', ' ')}
      </pre>
    ))}
  </div>
)
