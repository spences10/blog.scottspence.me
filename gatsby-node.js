const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(
    'src/templates/blogPostTemplate.js'
  )

  // returns promise that will start with this graphql query
  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___date] }
        filter: { frontmatter: { published: { eq: true } } }
        limit: 1000
      ) {
        edges {
          node {
            html
            id
            frontmatter {
              date
              path
              title
              excerpt
              tags
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    createTagPages(createPage, posts)

    // Create pages for each markdown file.
    const posts = result.data.allMarkdownRemark.edges
    const postsPerPage = 2
    const numPages = Math.ceil(posts.length / postsPerPage)

    // posts.forEach(({ node }, index) => {
    Array.from({ length: numPages }).forEach(({ node }, index) => {
      const prev = index === 0 ? null : posts[index - 1].node
      const next =
        index === posts.length - 1 ? null : posts[index + 1].node
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {
          prev,
          next,
          limit: postsPerPage,
          skip: i * postsPerPage
        }
      })
    })

    return posts
  })
}

const createTagPages = (createPage, posts) => {
  const allTagsTemplate = path.resolve('src/templates/allTags.js')
  const singleTagTemplate = path.resolve('src/templates/singleTag.js')

  const postsByTag = {}

  posts.forEach(({ node }) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        if (!postsByTag[tag]) {
          postsByTag[tag] = []
        }

        postsByTag[tag].push(node)
      })
    }
  })

  const tags = Object.keys(postsByTag)

  createPage({
    path: '/tags',
    component: allTagsTemplate,
    context: {
      tags: tags.sort()
    }
  })

  tags.forEach(tagName => {
    const posts = postsByTag[tagName]

    createPage({
      path: `/tags/${tagName}`,
      component: singleTagTemplate,
      context: {
        posts,
        tagName
      }
    })
  })
}
