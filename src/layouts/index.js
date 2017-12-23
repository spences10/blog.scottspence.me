import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'

import './index.css'

import { theme } from '../theme/globalStyle'
import Header from './components/Header'

// const Header = () => (
//   <div
//     style={{
//       background: 'rebeccapurple',
//       marginBottom: '1.45rem'
//     }}
//   >
//     <div
//       style={{
//         margin: '0 auto',
//         maxWidth: 960,
//         padding: '1.45rem 1.0875rem'
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: 'white',
//             textDecoration: 'none'
//           }}
//         >
//           Scott Spence
//         </Link>
//       </h1>
//     </div>
//   </div>
// )

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    'hd hd hd hd hd hd hd hd hd hd hd hd'
    'main main main main main main main main main main main main'
    'ft ft ft ft ft ft ft ft ft ft ft ft';
`

// min-height is just for the purpose of nice looking page
const Main = styled.div`
  grid-area: main;
  grid-template-columns: repeat(5, 1fr);
  min-height: 800px;
  margin-top: 4.625rem;
`

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <PageContainer>
      <Helmet
        title="Scott Spence blog"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' }
        ]}
      />
      <Header />
      <Main>{children()}</Main>
    </PageContainer>
  </ThemeProvider>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
