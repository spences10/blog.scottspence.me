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

export const StyledP = styled.p`
  iframe {
  }
  code {
    font-family: dm;
    background-color: #fafafa;
    /* background-color: ${({ theme }) => theme.background}; */
  }
`;
