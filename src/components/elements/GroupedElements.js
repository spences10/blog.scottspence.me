import React from 'react';
import styled from 'styled-components';

export const StyledInlineCode = styled.code`
  font-family: dm;
  background-color: #fafafa;
  /* background-color: ${({ theme }) => theme.background}; */
`;

export const InlineCode = ({ children }) => (
  <StyledInlineCode>{children}</StyledInlineCode>
);

const StyledParagraph = styled.p`
  iframe {
  }
`;

export const Paragraph = ({ children }) => (
  <StyledParagraph>{children}</StyledParagraph>
);
