---
path: "/moving-from-gatsby-to-react-static/"
date: "2018-12-31"
title: "Moving From Gatsby to React Static"
tags: ['ramble', '!dev', 'habits']
excerpt: ""
published: false
---

So moving from Gatsby to React Static there are a few things that were
nicely packaged up for you as plugins for Gatsby, it's a bit different
in React Static, let's go over some of the features I think I'm going
to have to implement here:

- Markdown - check
- Previous/next post - check
- Related Tags in post - sort of
- Code formatting - check
- Offline PWA - nop!
- favicons - check
- Google analytics - check

Other additional options I'm going to consider:

- Using purify CSS

Markdown syntax highlighting FUCKING painful! `react-smackdown` seems
to have it covered though, use the `@beta` tag though

Previous/next navigation was done via `static.config.js` with adding
some additional properties to the \getData\ function:

```js
getData: () => ({
  prevPath: allPosts[index - 1] ? allPosts[index - 1].slug : '',
  prevIsPublished: allPosts[index - 1]
    ? allPosts[index - 1].isPublished
    : '',
  nextPath: allPosts[index + 1] ? allPosts[index + 1].slug : '',
  nextIsPublished: allPosts[index + 1]
    ? allPosts[index + 1].isPublished
    : '',
  post
})
```

A more elegant way of doing it via Tanner:

```
{
  previousPost: {
    title: '...',
    slug: '...',
    isPublished: '...',
  },
  nextPost: {
    title: '...',
    slug: '...',
    isPublished: '...',
  }
}
```

For favicons I followed this:
https://serverless-stack.com/chapters/add-app-favicons.html

I had to add in React Helmet

Dev hot reloading add "react-hot-loader/babel" to .babelrc

```json
{
  "extends": "react-static/.babelrc",
  "plugins": [
    "babel-plugin-styled-components",
    "react-hot-loader/babel"
  ]
}
```

Offline support for PWA:

So, I found this:
https://github.com/nozzle/react-static/blob/d4ad4644d4f1ac465e64fae2da28f6d1e155847f/src/static/webpack/webpack.config.prod.js#L95-L102

which in turn lead to this:
https://github.com/nozzle/react-static/issues/488

which in turn lead to this:
https://github.com/jeffposnick/create-react-pwa/tree/master

which in turn lead to this:
https://github.com/GoogleChromeLabs/sw-precache so now I'm trying to
work out how to make a service worker

Still no clearer on where to go with PWA support.

For Google Analytics there's an example here for using Google
Analytics with React Static:
https://github.com/talves/react-static-autotrack-example

<!-- Links -->
