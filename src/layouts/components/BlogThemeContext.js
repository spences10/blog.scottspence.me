import React from 'react'
import PropTypes from 'prop-types'

import { theme1, theme2 } from '../../theme/globalStyle'

// Context is made up of two things
// Provider - Single as close to top level as possible
// Consumer - Multiple have multiple consumers
export const BlogThemeContext = React.createContext()

export class BlogThemeProvider extends React.Component {
  state = {
    theme: theme1
  }

  handleThemeChange = e => {
    let theme = e.target.value
    theme === 'theme1' ? (theme = theme1) : (theme = theme2)
    this.setState({ theme })
  }
  render() {
    return (
      <BlogThemeContext.Provider
        value={{
          ...this.state,
          handleThemeChange: this.handleThemeChange
        }}>
        {this.props.children}
      </BlogThemeContext.Provider>
    )
  }
}

BlogThemeProvider.propTypes = {
  children: PropTypes.any
}
