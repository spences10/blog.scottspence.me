const { URL } = require('url')

function shouldTransform(string) {
  return getUrl(string) !== null
}

function getUrl(string) {
  if (!string.includes('https://repl.it/')) {
    return null
  }
  if (!string.startsWith('http')) {
    string = `https://${string}`
  }
  let url
  try {
    url = new URL(string)
  } catch (error) {
    return null
  }
  if (!url.host.endsWith('repl.it')) {
    return null
  }
  return url
}

function getReplItHTML(string) {
  return `
  <iframe 
    height="400px" 
    width="100%" 
    src="${string}?lite=true" 
    scrolling="no" 
    frameborder="no" 
    allowtransparency="true" 
    allowfullscreen="true" 
    sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals">
  </iframe>
  `
}

module.exports = getReplItHTML
module.exports.shouldTransform = shouldTransform
