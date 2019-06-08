import styled from 'styled-components';

const inlineCode = `
  background-color: #fafafa;
  font-family: dm;
`;

export const InlineCode = styled.code`
  ${inlineCode}
`;

export const StyledP = styled.p`
  iframe {
  }
  code {
    ${inlineCode};
  }
`;
