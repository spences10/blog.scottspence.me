---
path: "/react-context-api-with-gatsby"
date: "2018-12-31"
title: "Use the React Context API with Gatsby"
tags: ['information', 'learning', 'guide', 'gatsby', 'api']
excerpt: ""
published: false
---

I'm a bit late to the party using the new [React Context API], I did
get to use it the other day at work, I also [made a snippet] to
scaffold out a component for it.

I had followed a couple of guides explaining how to use it and neither
of them as good as this great explanation of [how to use it] from
[@leighchalliday], thank you Leigh 🙏 It's a great use case which
helped me understand how to use it.

So, after doing this in a CRA project I decided to use it on one of my
Gatsby projects. With Gatsby the layout is slightly different where
you can have multiple layouts for differing sections of your app, so
this lends well for passing context.

One thing to bear in mind is that this is for my specific use case so
I'll apologise upfront now if any of this is confusing, I'm trying to
get this documented to help me understand it too 👍

With Gatsby if you want to use the React 16.3 then you will need to
`npm install gatsby-plugin-react-next` as Gatsby uses 16.2 I believe.

Another thing you may need to do is:

```sh
npm i react react-dom
npm un react react-dom
```

This may be because I was trying to use it in an old project, I've had
to do this on three projects now as I was getting `createContext` is
not a function errors until I did this.

One other thing you may want to consider if it appears nothing is
working try using the `npm ci` command. This is the npm 6+ version of
deleting your `node_modules` folder and reinstalling. 🤓

So let's go through one of my favourite use cases at the moment and
add theming support to a Gatsby site and use the React context API to
manage the theme.

You can see how theme a React app without the React Context API in my
[styled-components 💅 getting started] post.

For illustration I'll go over it here now, you add the `ThemeProvider`
at the highest level in the application structure so that all
descendants/children of the app can access it.

I have already done this for my [personal site] and now I'm going to
do it [here] so let's go through it together.

### Let's make a component!

Ok, so everything in React is a component, that's why I like it so
much - so let's make a `SomethingContext.js` component, as I want to
do the [things] with the styled-components 💅

Let's start by giving it an imaginative name:

```js
touch src/layouts/components/BlogThemeContext.js
```

There we go 👍

Ok, the 'things' I want to do with the Context API are:

1.  change the styled-components `ThemeProvider`
2.  rotate the site hero patterns

Now to scaffold out the context component, I have already mentioned
the [VS Code snippet] for my own personal use which is the basic
structure for the `Context` which is in two parts, a `Provider` and a
`Consumer`

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

So the `props` for the `<BlogThemeContext.Provider` is the state and
the methods contained in `BlogThemeContext`

Now let's add the `BlogThemeProvider` at the top level of our app so
that the state and functions of the provider can are accessible for
the children of the `layout/index.js`.

This is what it looks like before adding the context provider, you'll
notice that the styled-components `ThemeProvider` is a top level
component here.

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

Now we already have the styled-components `ThemeProvider` which
receives a `theme` object, and we want to manage the theme in our
context provider. So let's import the existing theme from the
`globalStyle` module into `BlogThemeContext` and add `theme` to the
state of the `BlogThemeProvider`:

```js
import React from 'react'
import PropTypes from 'prop-types'

import { theme } from '../../theme/globalStyle'

// Context is made up of two things
// Provider - Single as close to top level as possible
// Consumer - Multiple have multiple consumers
export const BlogThemeContext = React.createContext()

export class BlogThemeProvider extends React.Component {
  state = {
    theme
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

BlogThemeProvider.propTypes = {
  children: PropTypes.any
}
```

While we're here let's also add the function to handle the theme
changing by replacing the dummy `functionHere` function in the snippet
and bring in the themes we want to switch between.

```js
import React from 'react'
import PropTypes from 'prop-types'

import { theme1, theme2 } from '../../theme/globalStyle'

export const BlogThemeContext = React.createContext()

export class BlogThemeProvider extends React.Component {
  state = {
    theme
  }

  handleThemeChange = e => {
    let theme = e.target.value
    theme === 'theme1' ? (theme = theme1) : (theme = theme2)
    this.setState({ theme })
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
```

So, now, let's use it, right? The way to use is much like with the
styled-component `ThemeProvider`, import your `<ThemeSelectProvider>`
then you can use the `<ThemeSelectContext.Consumer>` to access the
functions and state of the `BlogThemeContext` via the
`<ThemeSelectProvider>`

The child of a consumer is a function, so rather than have your app
being returned like you would with a normal React component like this:

```js
<Wrapper>
  <Child />
</Wrapper>
```

So you need to embed a function like this:

```js
<Wrapper>{() => <Child />}</Wrapper>
```

So you're returning the (in this example, `<Child />`) app as the
result of the `<Context.Consumer>` function, here we can also get any
of the properties or state from the Context, in my use case here I
want to get the `theme` prop out of the Context provider `value`
(`<BlogThemeProvider>`).

```js
const TemplateWrapper = ({ children }) => (
  <BlogThemeProvider>
    <BlogThemeContext.Consumer>
      {({ theme }) => (
        <ThemeProvider theme={theme}>
          <PageContainer>
            <Helmet title={nameContent} meta={siteMeta} />
            <Header />
            <Main>{children()}</Main>
            <Footer />
          </PageContainer>
        </ThemeProvider>
      )}
    </BlogThemeContext.Consumer>
  </BlogThemeProvider>
)
```

I also have a template `src/template/blog-posts.js` which Gatsby uses
to generate this post you're reading now, so it's the same, I wrap the
app in the return function for the context consumer, before it looked
like this:

```js
const Template = ({ data, pathContext }) => {
  const { markdownRemark: post } = data
  const { frontmatter, html } = post
  const { title, date } = frontmatter
  const { next, prev } = pathContext

  return (
    <PostWrapper border={({ theme }) => theme.primary.light}>
      <Helmet title={`${title} - blog.scottspence.me`} />
      <Title>{title}</Title>
      <TitleDate>{date}</TitleDate>
      ....
```

Now it looks like this:

```js
const Template = ({ data, pathContext }) => {
  const { markdownRemark: post } = data
  const { frontmatter, html } = post
  const { title, date } = frontmatter
  const { next, prev } = pathContext

  return (
    <BlogThemeProvider>
      <BlogThemeContext.Consumer>
        {({ theme }) => (
          <PostWrapper border={({ theme }) => theme.primary.light}>
            <Helmet title={`${title} - blog.scottspence.me`} />
            <Title>{title}</Title>
            <TitleDate>{date}</TitleDate>
            ....
```

<!-- Links -->

[react context api]: https://reactjs.org/docs/context.html
[made a snippet]: https://github.com/spences10/settings/blob/35ba1ca3e9871c3ea6344ca2274ebbd327a18bed/globalVs.code-snippets#L74-L112
[how to use it]: https://www.youtube.com/watch?v=yzQ_XulhQFw
[@leighchalliday]: https://twitter.com/leighchalliday
[styled-components 💅 getting started]: https://scottspence.me/styled-components-getting-started
[personal site]: https://scottspence.me
[here]: # 'this site, 👀'
[things]: # 'things being using the styled components `ThemeProvider`'
[vs code snippet]: https://github.com/spences10/settings/blob/71dc76fb8e11c176f4517431be57c021fb72411a/globalVs.code-snippets#L74-L111
