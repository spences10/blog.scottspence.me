import styled from 'styled-components'
import { Link } from 'gatsby'

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

export const ButtonSmall = styled(Button)`
  padding: 0.1rem 2rem;
  margin: 0.2rem;
`

export const ButtonBig = styled(Button)`
  padding: 0.75rem 2rem;
  margin: 0.5rem;
`

export const HappyButton = styled(ButtonBig)`
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

export const Wrapper = styled.div``

export const PostWrapper = styled.div`
  margin: 0.5rem;
  padding: 1rem 1.5rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px;
  background: white;
  line-height: 1.5;
  font-family: ${({ theme }) => theme.fontBody};
  color: ${({ theme }) => theme.fontLight};
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

export const PostTitle = styled.div`
  font-family: ${({ theme }) => theme.fontHeader};
  font-weight: 700;
  font-size: 2rem;
  color: ${({ theme }) => theme.fontLight};
  margin: 0rem;
  padding: 0rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`

export const PostedDate = styled.p`
  margin: 0.05rem;
  color: ${({ theme }) => theme.fontLight};
`

export const LinksWrapper = styled.div`
  display: grid;
  grid-template-areas: 'prev next';
`

export const LinkWrapper = styled.div`
  display: grid;
  justify-items: ${props => props.justify};
`

export const PrevNextButton = styled(HappyButton)`
  margin: 0.5rem 0rem;
  padding: 0.5rem;
  grid-area: ${props => props.area};
`
