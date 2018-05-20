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
touch src/BlogThemeContext.js
```

There we go 👍

Now to scaffold out the context component, I have made a [VS Code
snippet] for my own personal use which is the basic structure for the
`Context` which is in two parts, a `Provider` and a `Consumer`

Let's create the `Context` and the `Consumer` in this component.

**Using the snippet it should look something like this:**

###### `src/layouts/components/BlogThemeContext.js`

```js
import React from 'react'
// Context is made up of two things
// Provider - Single as close to top level as possible
// Consumer - Multiple have multiple consumers
export const BlogThemeContext = React.createContext()

export class BlogThemeProvider extends React.Component {
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
      <BlogThemeContext.Provider
        value={{
          ...this.state,
          functionHere: this.functionHere
        }}>
        {this.props.children}
      </BlogThemeContext.Provider>
    )
  }
}
```

Now let's add the `ThemeContext.js` provider at the top level of our
app so that the state and functions of the provider can are accessible
from the rest of the app.

This is what it looks like before adding the context provider

###### `src/layouts/index.js`

```js
const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <PageContainer>
      <Helmet title={nameContent} meta={siteMeta} />
      <Header />
      <Main>{children()}</Main>
      <Footer />
    </PageContainer>
  </ThemeProvider>
)
```

Now we already have the styled-components `ThemeProvider`

<!-- Links -->

[made a snippet]: https://github.com/spences10/settings/blob/35ba1ca3e9871c3ea6344ca2274ebbd327a18bed/globalVs.code-snippets#L74-L112
[how to use it]: https://www.youtube.com/watch?v=yzQ_XulhQFw
[@leighchalliday]: https://twitter.com/leighchalliday
[personal site]: https://scottspence.me
[here]: # 'this site, 👀'
[things]: # 'things being using the styled components `ThemeProvider`'
[vs code snippet]: https://github.com/spences10/settings/blob/71dc76fb8e11c176f4517431be57c021fb72411a/globalVs.code-snippets#L74-L111
