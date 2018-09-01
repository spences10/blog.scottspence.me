import styled from 'styled-components'

export const Button = styled.button`
  color: ${props => props.color};
  font-size: 1rem;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  border: 1px solid ${props => props.border};
  background-color: Transparent;
  text-transform: uppercase;
  border-radius: 4px;
  transition: all 0.1s;
  &:hover {
    transform: translateY(1px);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  }
`

export const ButtonSmall = Button.extend`
  padding: 0.1rem 2rem;
  margin: 0.2rem;
`

export const ButtonBig = Button.extend`
  padding: 0.75rem 2rem;
  margin: 0.5rem;
`

export const HappyButton = ButtonBig.extend`
  text-transform: capitalize;
  background-color: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 5px;
  color: ${({ theme }) => theme.fontDark};
  padding: 0.1rem 0.1rem;
  margin: 0.2rem 0.2rem;
  &:hover {
    animation: halftone 1s forwards;
    background: radial-gradient(
          circle,
          ${({ theme }) => theme.secondary} 0.2em,
          transparent 0.25em
        )
        0 0 / 1.25em 1.25em,
      radial-gradient(
          circle,
          ${({ theme }) => theme.secondary} 0.2em,
          transparent 0.25em
        )
        6.25em 6.25em / 1.25em 1.25em;
    color: ${({ theme }) => theme.primaryAccent};
  }
  @keyframes halftone {
    100% {
      background-size: 2.375em 2.375em, 0.1em 0.1em;
    }
  }
`

export const StyledHyperLink = styled.a`
  cursor: pointer;
  &:visited,
  &:active {
    color: ${props => props.theme.primary};
  }
  &:hover {
    color: ${props => props.theme.secondary};
  }
  color: ${props => props.theme.primary};
`
