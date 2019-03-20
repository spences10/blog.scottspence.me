import React from 'react';
import TweetEmbed from 'react-tweet-embed';

export const Tweet = ({ id }) => (
  <div
    style={{
      display: 'flex',
      width: 'auto',
      height: 'auto',
      justifyContent: 'center',
      padding: '1rem 0'
    }}>
    <TweetEmbed id={id} />
  </div>
)
