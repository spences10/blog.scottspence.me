import React from 'react'
// Context is made up of two things
// Provider - Single as close to top level as possible
// Consumer - Multiple have multiple consumers
export const ThemeContext = React.createContext()

export class ThemeProvider extends React.Component {
  state = {
    item1: 1,
    item2: 2
  }

  // add function here
  functionHere = () => {
    this.setState({
      item1: 2,
      item2: 3
    })
  }
  render() {
    return (
      <ThemeContext.Provider
        value={{
          ...this.state,
          functionHere: this.functionHere
        }}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}
