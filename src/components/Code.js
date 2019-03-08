import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'
import React from 'react'
import {
  LiveEditor,
  LiveError,
  LivePreview,
  LiveProvider
} from 'react-live'
import styled from 'styled-components'
// import { Dump } from '../utils/helpers'

const StyledPre = styled.pre`
  overflow-x: auto;
  padding: 0.5rem;
  border-radius: 3px;
`

const Code = ({ codeString, language, ...props }) => {
  if (props['react-live']) {
    return (
      <LiveProvider code={codeString} noInline={true}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    )
  }
  return (
    <>
      <Highlight
        {...defaultProps}
        code={codeString}
        language={language}
        theme={theme}>
        {({
          className,
          style,
          tokens,
          getLineProps,
          getTokenProps
        }) => (
          <StyledPre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </StyledPre>
        )}
      </Highlight>
    </>
  )
}

export default Code
