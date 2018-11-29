---
path: '/gatsby-starter-to-styled-components'
date: '2018-12-31'
title: 'Convert the Gatsby default starter to styled-components'
tags:
  ['information', 'learning', 'guide', 'gatsby', 'getting started']
published: false
---

Let's go through getting styled-components working with the Gatsby
default starter.

`youtube: https://www.youtube.com/watch?v=O5sWySCr668`

In this example we're going to use the Gatsby default starter you get
with [CodeSandbox] and add in styled-components, so first up, open a
[new CodeSandbox] and select Gatsby from the SERVER TEMPLATES.

## 1. Dependencies

In the dependencies section of the CodeSandbox editor you'll need to
add the following:

```bash
gatsby-plugin-styled-components
styled-components
babel-plugin-styled-components
```

## 2. Config

Now we need to change `gatsby-config.js` to incorporate the new
dependencies we've just added. It doesn't have any configuration
options so it can just go in as an extra line on the config, in this
case I'm adding it after the `gatsby-plugin-sharp` plugin:

```js
'gatsby-transformer-sharp',
'gatsby-plugin-sharp',
'gatsby-plugin-styled-components',
```

Don't forget the comma at the end 👍

## 3. Global Style

Now that we're ready to rock n' roll with styled-components we need to
remove the currently applied styled in the default starter and apply
our own.

In the `src/components/layout.js` component there's an import for
`layout.css` this is the CSS reset for the starter if we remove the
import from here we'll see the styles for border and font be reset. We
can now delete the `layout.css` file and create out own CSS reset
using the `createGlobalStyle` function from styled-components.

Create a new folder `theme`, in this example it's in `src/theme` and
add a `globalStyle.js` file in there.

This will export a `GlobalStyle` component for us to use throughout
the app.

Let's add in a Google font and reset the `padding` and `margin`, for
visual feedback we're going to add the font directly to the body
element.

```js
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Kodchasan:400,700');
  body {
    padding: 0;
    margin: 0;
    font-family: Kodchasan;
  }
  a {
    text-decoration: none;
  }
  ul {
    margin: 0 auto;
    list-style-type: none;
  }
`
```

## 4. Rest

[codesandbox]: https://codesandbox.io
[new codesandbox]: https://codesandbox.io/s/
[example code]: https://codesandbox.io/s/yp3z16yw11
