// import React from 'react'
// import Link from 'gatsby-link'
// import Helmet from 'react-helmet'
// import styled from 'styled-components'

// import Header from '../components/Header'
// import GlobalLayout from '../components/GlobalLayout'

// import {
//   BlogThemeContext,
//   BlogThemeProvider
// } from '../components/BlogThemeContext'

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

// const Wrapper = styled.div`
//   grid-area: m;
//   /* display: grid;
//    grid-template-columns: repeat(12, 1fr);
//    grid-template-rows: auto;
//    grid-template-areas:
//      'h h h h h h h h h h h h'
//      '. . . m m m m m m . . .'
//      'f f f f f f f f f f f f'; */
// `

// const Template = ({ data, pageContext }) => {
//   const { markdownRemark: post } = data
//   const { frontmatter, html } = post
//   const { title, date } = frontmatter
//   const { prev, next } = pageContext

//   return (
//     <BlogThemeProvider>
//       <BlogThemeContext.Consumer>
//         {({ background }) => (
//           <GlobalLayout background={background}>
//             <Wrapper>
//               <Helmet title={`${title} - blog.scottspence.me`} />
//               <div>
//                 <h1>{title}</h1>
//                 <h3>{date}</h3>
//                 <div dangerouslySetInnerHTML={{ __html: html }} />
//                 <p>
//                   {prev && (
//                     <Link to={prev.frontmatter.path}>
//                       Previous: {prev.frontmatter.title}
//                     </Link>
//                   )}
//                 </p>
//                 <p>
//                   {next && (
//                     <Link to={next.frontmatter.path}>
//                       Next: {next.frontmatter.title}
//                     </Link>
//                   )}
//                 </p>
//               </div>
//             </Wrapper>
//           </GlobalLayout>
//         )}
//       </BlogThemeContext.Consumer>
//     </BlogThemeProvider>
//   )
// }

// export const pageQuery = graphql`
//   query BlogPostByPath($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       frontmatter {
//         date(formatString: "YYYY MMMM Do")
//         path
//         tags
//         title
//       }
//     }
//   }
// `

// export default Template
