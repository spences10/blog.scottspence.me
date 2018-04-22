// configQuery is used for the GraphCMS queries
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
