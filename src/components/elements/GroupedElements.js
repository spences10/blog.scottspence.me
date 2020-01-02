import React from 'react';
import styled from 'styled-components';
import 'victormono';

export const StyledInlineCode = styled.code`
  font-family: 'Victor Mono', 'Courier New', Courier, monospace;
  background-color: #fafafa;
  /* background-color: ${({ theme }) => theme.background}; */
`;

export const InlineCode = ({ children }) => (
  <StyledInlineCode>{children}</StyledInlineCode>
);

const StyledParagraph = styled.p`
  iframe {
  }
  word-break: break-word;
`;

export const Paragraph = ({ children }) => (
  <StyledParagraph>{children}</StyledParagraph>
);
