// const path = require('path')

// const createTagPages = (createPage, posts) => {
//   const tagPageTemplate = path.resolve('src/templates/tags.js')
//   const allTagsTemplate = path.resolve('src/templates/allTags.js')

//   const postsByTags = {}

//   posts.forEach(({ node }) => {
//     if (node.frontmatter.tags) {
//       node.frontmatter.tags.forEach(tag => {
//         if (!postsByTags[tag]) {
//           postsByTags[tag] = []
//         }
//         postsByTags[tag].push(node)
//       })
//     }
//   })

//   const tags = Object.keys(postsByTags)

//   createPage({
//     path: `/tags`,
//     component: allTagsTemplate,
//     context: {
//       tags: tags.sort()
//     }
//   })

//   tags.forEach(tagName => {
//     const posts = postsByTags[tagName]

//     createPage({
//       path: `/tags/${tagName}`,
//       component: tagPageTemplate,
//       context: {
//         posts,
//         tagName
//       }
//     })
//   })
// }

// exports.createPages = ({ actions, graphql }) => {
//   const { createPage } = actions
//   const blogPostTemplate = path.resolve('src/templates/blogPost.js')

//   // returns promise that will start with this graphql query
//   return graphql(`
//     {
//       allMarkdownRemark(
//         sort: { order: ASC, fields: [frontmatter___date] }
//         filter: { frontmatter: { published: { eq: true } } }
//         limit: 1000
//       ) {
//         edges {
//           node {
//             html
//             id
//             frontmatter {
//               date
//               path
//               title
//               excerpt
//               tags
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     if (result.errors) {
//       return Promise.reject(result.errors)
//     }

//     const posts = result.data.allMarkdownRemark.edges

//     createTagPages(createPage, posts)

//     // Create pages for each markdown file.
//     posts.forEach(({ node }, index) => {
//       createPage({
//         path: node.frontmatter.path,
//         component: blogPostTemplate,
//         context: {
//           prev: index === 0 ? null : posts[index - 1].node,
//           next:
//             index === posts.length - 1 ? null : posts[index + 1].node
//         }
//       })
//     })

//     return posts
//   })
// }
