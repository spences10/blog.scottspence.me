import PropTypes from 'prop-types';
import React from 'react';
import { themes } from '../theme/globalStyle';
import { HERO } from '../theme/heroPatterns';

// Context is made up of two things
// Provider - Single as close to top level as possible
// Consumer - Multiple have multiple consumers
export const BlogThemeContext = React.createContext();

export class BlogThemeProvider extends React.Component {
  state = {
    theme: themes['theme1'],
    background: HERO[0],
  };

  handleThemeChange = e => {
    const key = e.target.value;
    const theme = themes[key];
    this.setState({ theme });
  };

  componentDidMount() {
    // this.interval = setInterval(() => {
    //   const keys = Object.keys(HERO)
    //   const background =
    //     HERO[keys[(keys.length * Math.random()) << 0]]
    //   this.setState({ background })
    // }, 30 * 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <BlogThemeContext.Provider
        value={{
          ...this.state,
          handleThemeChange: this.handleThemeChange,
        }}>
        {this.props.children}
      </BlogThemeContext.Provider>
    );
  }
}

BlogThemeProvider.propTypes = {
  children: PropTypes.any,
};
