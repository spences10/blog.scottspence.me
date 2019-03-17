import React from 'react'
import ReactPlayer from 'react-player'

export const Player = ({ url }) => (
  <div style={{ width: '100%', height: '100%' }}>
    <ReactPlayer controls={true} url={url} />
  </div>
)
