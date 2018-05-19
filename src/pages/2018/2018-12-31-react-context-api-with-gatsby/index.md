---
path: "/react-context-api-with-gatsby"
date: "2018-12-31"
title: "Use the React Context API with Gatsby"
tags: ['information', 'learning', 'guide', 'gatsby', 'api']
excerpt: ""
published: false
---

Using the React Context API the other day, I [made a snippet] to
scaffold out a component for it.

Here is a great explanation of [how to use it] from [@leighchalliday],
thank you Leigh 🙏 It's a great use case which helped me understand
how to use it.

After doing this in a CRA project I decided to use it on one of my
Gatsby projects. With Gatsby the layout is slightly different where
you can have multiple layouts for differing sections of your app, so
this lends well for passing context.

One thing you need to do with Gatsby if you want to use the React 16.3
in Gatsby and that's to use `gatsby-plugin-react-next` as Gatsby uses
16.2 I believe.

Another thing you may need to do is to
`npm i react@latest react-dom@latest` then uninstall them, this may be
because I was trying to use it in an old project, I've had to do this
on two projects now as I was getting `createContext` is not a function
errors until I did this.

So lets go through one of my favourites right now and add theming
support to a gatsby site and use the React context API.

How I did this without the React Context API was add the
`styled-components` `ThemeProvider` at the `index.js` page of a React
then you can access the theme via props from any child component of
the `<App>` component. In Gatsby it's a bit different.

I have already done this for my [personal site] and now I'm going to
do it [here] so lets go through it together.

### Lets make a component!

Ok, so everything in React is a component, that's why I like it so
much - so lets make a `SomethingContext.js` component, as I want to do
the [things] with the styled-components 💅

Lets start by giving it an imaginative name:

```js
touch src/ThemeContext.js
```

There we go 👍

Now to scaffold out the context component, I have made a [VS Code
snippet] for my own personal use which is the basic structure for the
`Context` and the `Provider`

<!-- Links -->

[made a snippet]: https://github.com/spences10/settings/blob/35ba1ca3e9871c3ea6344ca2274ebbd327a18bed/globalVs.code-snippets#L74-L112
[how to use it]: https://www.youtube.com/watch?v=yzQ_XulhQFw
[@leighchalliday]: https://twitter.com/leighchalliday
[personal site]: https://scottspence.me
[here]: # 'this site, 👀'
[things]: # 'things being using the styled components `ThemeProvider`'
[vs code snippet]: https://github.com/spences10/settings/blob/71dc76fb8e11c176f4517431be57c021fb72411a/globalVs.code-snippets#L74-L111
