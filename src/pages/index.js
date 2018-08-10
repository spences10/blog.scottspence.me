import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

// import React from 'react'
// // import Link from 'gatsby-link'
// import Helmet from 'react-helmet'
// import { ThemeProvider } from 'styled-components'

// import GlobalLayout from '../components/GlobalLayout'

// // import { PageContainer } from '../components/Shared'
// import {
//   BlogThemeContext,
//   BlogThemeProvider
// } from '../components/BlogThemeContext'

// import { siteMeta, nameContent } from '../theme/constants'

// import Posts from '../components/Posts'
// /**
//  * other themes
//  * dark
//  * funky
//  * okaidia
//  * coy
//  * solarizedlight
//  * tomorrow
//  * twilight
//  * prism.css = default
//  */
// require('prismjs/themes/prism-solarizedlight.css')

// const IndexPage = ({ data }) => {
//   const { edges: posts } = data.allMarkdownRemark
//   return (
//     <BlogThemeProvider>
//       <BlogThemeContext.Consumer>
//         {({ theme }) => (
//           <ThemeProvider theme={theme}>
//             <GlobalLayout>
//               <Helmet title={nameContent} meta={siteMeta} />
//               <Posts posts={posts} />
//             </GlobalLayout>
//           </ThemeProvider>
//         )}
//       </BlogThemeContext.Consumer>
//     </BlogThemeProvider>
//   )
// }

// export const query = graphql`
//   query IndexQuery {
//     allMarkdownRemark(
//       sort: { order: DESC, fields: [frontmatter___date] }
//       filter: { frontmatter: { published: { eq: true } } }
//     ) {
//       totalCount
//       edges {
//         node {
//           id
//           excerpt(pruneLength: 250)
//           frontmatter {
//             title
//             date(formatString: "YYYY MMMM Do")
//             path
//             tags
//             excerpt
//           }
//         }
//       }
//     }
//   }
// `

// export default IndexPage
