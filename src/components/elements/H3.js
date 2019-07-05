import styled from 'styled-components';

export const StyledH3 = styled.h3`
  font-family: ${props => props.theme.fontBody};
  color: ${props => props.theme.fontDark};
  a {
    float: left;
    padding-right: 4px;
    margin-left: -20px;
  }
  svg {
    visibility: hidden;
  }
  &:hover {
    a {
      svg {
        visibility: visible;
      }
    }
  }
`;
