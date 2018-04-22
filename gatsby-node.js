const path = require('path')
const queryAll = require('./gatsby/queryAll.js')

exports.onCreateNode = ({ node }) => {
  console.log('onCreateNode:', node.internal.type)
}

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    const pageDetailTemplate = path.resolve(
      './src/templates/blog-post.js'
    )

    resolve(
      graphql(queryAll).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // console.log('=====================')
        // console.log('result', result.data.allPosts.edges)
        // console.log('=====================')

        const pages = result.data.allPosts.edges

        // console.log('====================')
        // console.log(pages)
        // console.log('====================')

        pages.map(({ node: page }) => {
          const path = `/${page.slug}`
          console.log('=====================')
          console.log(path)
          console.log('=====================')
          createPage({
            path,
            component: pageDetailTemplate,
            context: {
              slug: page.slug
            }
          })
        })
      })
    )
  })
}
