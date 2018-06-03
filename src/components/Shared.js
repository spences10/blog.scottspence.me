import styled from 'styled-components'

// import { media } from '../theme/globalStyle'

export const PageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    'h h h h h h'
    'm m m m m m';
`
