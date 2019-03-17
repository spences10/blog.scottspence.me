import React from 'react'
import ReactPlayer from 'react-player'

export const Player = ({ url }) => (
  <div
    style={{
      display: 'flex',
      width: 'auto',
      height: 'auto',
      justifyContent: 'center',
      padding: '1rem 0'
    }}>
    <ReactPlayer controls={true} url={url} />
  </div>
)
