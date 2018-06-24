import React from 'react'
/*eslint-disable */
export const slugIt = text => {
  if (!text) return
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

// https://github.com/wesbos/dump

export const Dump = props => (
  <div
    style={{
      fontSize: 20,
      border: '1px solid #efefef',
      padding: 10,
      background: 'white'
    }}>
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
