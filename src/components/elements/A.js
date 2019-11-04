import React from 'react';
import styled from 'styled-components';

export const StyledATag = styled.a`
  border-bottom: 2px solid ${({ theme }) => theme.primary};
  background-image: linear-gradient(
    120deg,
    ${({ theme }) => theme.primary} 0%,
    ${({ theme }) => theme.primary} 100%
  );
  background-repeat: no-repeat;
  background-size: 100% 0em;
  background-position: 0 100%;
  transition: background-size 0.125s ease-in;
  &:hover {
    border-color: ${({ theme }) => theme.primary};
    color: black;
    background-size: 100% 100%;
  }
  text-decoration: none;
`;

export const AnchorTag = props => (
  <StyledATag {...props}></StyledATag>
);
