const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(
    'src/templates/blogPostTemplate.js'
  )
  const blogListTemplate = path.resolve(
    'src/templates/blogListTemplate.js'
  )

  // build the blog pages from querying allMarkdownRemark
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

    // get all posts
    const posts = result.data.allMarkdownRemark.edges
    // number of posts per page
    const postsPerPage = 5
    // work out how many pages needed
    const numPages = Math.ceil(posts.length / postsPerPage)
    createTagPages(createPage, posts)

    Array.from({ length: numPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? `/page/1` : `/page/${index + 1}`,
        component: blogListTemplate,
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage
        }
      })
    })

    // Create pages for each markdown file.
    posts.forEach(({ node }, index) => {
      const prev = index === 0 ? null : posts[index - 1].node
      const next =
        index === posts.length - 1 ? null : posts[index + 1].node
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {
          prev,
          next
        }
      })
    })
    // create redirects
    // makeBlogRedirects({ actions })

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

const makeBlogRedirects = ({ createRedirect }) => {
  /**
   * janky ass way to do this, I'm going to add in pagination
   * to the blog retrospectively so paths currently are from
   * the home page "scottspence.me/wsl-setup" I'm now going
   * to be adding in pagination so will be more like this
   * "scottspence.me/page-2/wsl-setup" so here I'm going to
   * add in batch redirects for everything as it is currently
   *
   * */

  //  https://github.com/gatsbyjs/gatsby/blob/master/examples/using-redirects/README.md
  let redirectBatch = [
    { f: `/`, t: `/` },
    { f: `/`, t: `/` },
    { f: `/`, t: `/` },
    { f: `/`, t: `/` },
    { f: `/`, t: `/` },
    { f: `/`, t: `/` },
    { f: `/`, t: `/` },
    { f: `/`, t: `/` },
    { f: `/`, t: `/` },
    { f: `/`, t: `/` },
    { f: `/`, t: `/` },
    { f: `/`, t: `/` },
    { f: `/`, t: `/` },
    { f: `/`, t: `/` },
    { f: `/`, t: `/` },
    { f: `/`, t: `/` },
    { f: `/`, t: `/` },
    { f: `/`, t: `/` }
  ]

  redirectBatch.forEach(({ f, t }) => {
    createRedirect({
      fromPath: f,
      redirectInBrowser: true,
      toPath: t
    })
    console.log('\nRedirecting:\n' + f + '\nTo:\n' + t + '\n')
  })
}
