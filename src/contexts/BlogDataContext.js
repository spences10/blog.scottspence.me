import React from 'react'
import { request } from 'graphql-request'
// Context is made up of two things
// Provider - Single as close to top level as possible
// Consumer - Multiple have multiple consumers

export const BlogDataContext = React.createContext()

const GRAPHCMS_API = process.env.API_URL

const query = `
  {
    allPosts (orderBy:dateAndTime_DESC) {
      isPublished
      slug
      dateAndTime
      updatedAt
      title
      content
    }
    allAuthors {
      id
      name
      avatar {
        handle
      }
      bibliography
    }
    allTags {
      name
      blogPosts {
        title
        slug
        isPublished
      }
    }
  }
`

export class BlogDataProvider extends React.Component {
  state = {
    allPosts: {},
    allAuthors: {},
    allTags: {}
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const { allPosts, allAuthors, allTags } = await request(
      GRAPHCMS_API,
      query
    )

    this.setState({
      allPosts,
      allAuthors,
      allTags
    })
  }

  render() {
    return (
      <BlogDataContext.Provider
        value={{
          ...this.state
        }}
      >
        {this.props.children}
      </BlogDataContext.Provider>
    )
  }
}
