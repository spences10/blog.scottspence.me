import React from 'react'
import ReactDOM from 'react-dom'

// import registerServiceWorker from './registerServiceWorker'

// Your top level component
import App from './App'

// Export your top level component as JSX (for static rendering)
export default App

// Render your app
if (typeof document !== 'undefined') {
  window.addEventListener('load', () => {
    const ga = window.ga
    ga('create', 'UA-87264973-3', 'auto')

    ga('require', 'outboundLinkTracker')
    ga('require', 'urlChangeTracker')
    // Require additional plugins imported in the build:autotrack.

    ga('send', 'pageview')
  })
  const renderMethod = module.hot
    ? ReactDOM.render
    : ReactDOM.hydrate || ReactDOM.render
  const render = Comp => {
    renderMethod(<Comp />, document.getElementById('root'))
  }

  // Render!
  render(App)
}

// registerServiceWorker()
