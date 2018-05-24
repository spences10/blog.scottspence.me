import React from 'react'
import PropTypes from 'prop-types'

import { theme1, themes } from '../../theme/globalStyle'
import { HERO } from '../../theme/constants'

// Context is made up of two things
// Provider - Single as close to top level as possible
// Consumer - Multiple have multiple consumers
export const BlogThemeContext = React.createContext()

export class BlogThemeProvider extends React.Component {
  state = {
    theme: theme1,
    themes: themes[0],
    background: HERO[0]
  }

  // handleThemeChange = e => {
  //   let theme = e.target.value
  //   theme === 'theme1' ? (theme = theme1) : (theme = theme2)
  //   this.setState({ theme })
  // }

  handleThemeChange = e => {
    const key = e.target.value
    const theme = themes[key]
    this.setState({ theme })
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const keys = Object.keys(HERO)
      const background =
        HERO[keys[(keys.length * Math.random()) << 0]]

      this.setState({ background })
    }, 30 * 1000)
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
