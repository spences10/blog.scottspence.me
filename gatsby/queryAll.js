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
`
