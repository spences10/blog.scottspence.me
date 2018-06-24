const path = require('path')
const queryAll = require('./gatsby/queryAll.js')

<<<<<<< HEAD
exports.onCreateNode = ({ node }) => {
  console.log('onCreateNode:', node.internal.type)
=======
const createTagPages = (createPage, posts) => {
  const tagPageTemplate = path.resolve('src/templates/tags.js')
  const allTagsTemplate = path.resolve('src/templates/all-tags.js')

  const postsByTags = {}

  posts.forEach(({ node }) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        if (!postsByTags[tag]) {
          postsByTags[tag] = []
        }

        postsByTags[tag].push(node)
      })
    }
  })

  const tags = Object.keys(postsByTags)

  createPage({
    path: '/tags',
    component: allTagsTemplate,
    context: {
      tags: tags.sort()
    }
  })

  tags.forEach(tagName => {
    const posts = postsByTags[tagName]

    createPage({
      path: '/tags/${tagName}',
      component: tagPageTemplate,
      context: {
        posts,
        tagName
      }
    })
  })
>>>>>>> development
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
