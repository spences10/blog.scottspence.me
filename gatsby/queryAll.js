'use strict'

module.exports = `
  {
    allAssets {
      id
      url
    }
    allAuthors {
      name
      avatar {
        id
        url
        fileName
        mimeType
        height
        width
      }
      isPublished
      id
      bibliography
    }
    allPosts {
      id
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
`
