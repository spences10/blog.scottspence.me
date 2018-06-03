import styled from 'styled-components'

// import { media } from '../theme/globalStyle'

export const PageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    '. . . h h h h h h . . .'
    '. . . m m m m m m . . .'
    '. . . f f f f f f . . .';
`

export const Wrapper = styled.div`
  grid-area: ${props => props.area};
  background-color: ${({ theme }) => theme.primary};
`
