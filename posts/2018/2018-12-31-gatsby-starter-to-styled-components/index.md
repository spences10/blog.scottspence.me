---
path: '/gatsby-starter-to-styled-components'
date: '2018-12-31'
title: 'Convert the Gatsby default starter to styled-components'
tags:
  ['information', 'learning', 'guide', 'gatsby', 'getting started']
published: true
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

## 4. Rest

[codesandbox]: https://codesandbox.io
[new codesandbox]: https://codesandbox.io/s/
[example code]: https://codesandbox.io/s/yp3z16yw11
