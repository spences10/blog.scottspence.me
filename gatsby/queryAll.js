// queryAll is used for the Gatsby queries
// construct your queries from the Gatsby
// GraphIQL explorer
'use strict'

module.exports = `
  {
    allAssets {
      edges {
        node {
          id
          url
        }
      }
    }
    allAuthors {
      edges {
        node {
          id
          name
          avatar {
            id
            url
          }
        }
      }
    }
    allPosts {
      edges {
        node {
          id
          slug
          title
          dateAndTime
          authors {
            id
          }
          content
          coverImage {
            id
            url
          }
          tags
        }
      }
    }
  }
`
