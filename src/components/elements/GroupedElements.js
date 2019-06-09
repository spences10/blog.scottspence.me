import styled from 'styled-components';

export const InlineCode = styled.code`
  font-family: dm;
  background-color: ${({ theme }) => theme.background};
`;

export const StyledP = styled.p`
  iframe {
  }
  code {
    font-family: dm;
    background-color: ${({ theme }) => theme.background};
  }
`;
