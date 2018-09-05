---
path: '/react-context-api-getting-started'
date: '2018-12-31'
title: 'Using the React Context API  -  getting started'
tags:
  [
    'information',
    'learning',
    'guide',
    'getting started',
    'react',
    'api',
  ]
published: false
---

Let's use the React Context API to change theme in an app!

![](https://thepracticaldev.s3.amazonaws.com/i/zmp2k4r128poj1gsws61.gif)

## But first, some **context**! 🤣

Ok terrible puns aside let's have a look at what the React Context API
is for and what it does. There's a great one liner from the [React
docs]...

> Context provides a way to pass data through the component tree
> without having to pass props down manually at every level.

Or in other words, you can use the React Context API to avoid [prop
drilling] if you need more detail on the concept then please do check
out the links provided.

I've previously gone over implementing the React Context API in [my
Gatsby blog] which I documented as I did it; you can see [how that
went here].

> ### Explain the Context API to me.
>
> A great resource on explaining the API can be found from
> [@leighchalliday] with a [great usecase] on the subject.

## What we're doing...

For this post we're going to extend the example we created for
[styled-components getting started] as it has the majority of the code
we'll need to get started with the React Context API.

We're going to extend that example to manage the theme state of the
example application.

So in summary:

- Scaffold out basic CreateReact App
- Use `styled-components` 💅 for styling
- Add themes to switch between with the React Context API
- Use the React Context API!

## What we'll need...

All we'll be needing is an internet connection! Because we're going to
do all of this in the awesome [CodeSandbox]!

If you have a GitHub account or not, CodeSandbox will let you get
started [coding straight away]!

So let's go over theming the basic create react app again, this time
instead of adding state into to the component we will use the React
Context API to manage the state for us. There will be people that will
argue that this is a bit overkill for a theme switch but it is given
as an example of [when to use the Context API] in the React
documentation so I will let you decide on the validity of that point.
For this example, I hope it will give you a clearer picture of how to
use the Context API it in an application.

## Let's start

### Dependencies

[Open a React CodeSandbox] and add `styled-components` as a
dependency:

![](https://thepracticaldev.s3.amazonaws.com/i/d49drafvtvz3ws2br9vs.gif)

### File structure

Another area for [bikeshedding] is file structure, in this scenario
we're adding folders for `components`, `contexts` and the `theme`
please feel free to structure your files how you see fit, this is how
we're going to do it for this example ❤️

Add the directories into the `src` folder so we can add in some
components, the file structure should look something like this:

```bash
context-demo/
├─ public/
├─ src/
│  └─ components
│  └─ contexts
│  └─ theme
└─ package.json
```

## Scaffold out basic Create React App

Ok, so, what we're going to do is add in an `App.js` component to the
`components` folder then use that in the `src/index.js` file.

The `App.js` component can be a [stateless functional component] as
for this example as we're going to be handling state with the Context
API.

Here you can see my sketchy typing as I create the directories and add
in the `App.js` component.

![](https://thepracticaldev.s3.amazonaws.com/i/oyxpggt00q754iv1azp0.gif)

We can then remove the `style.css` file and reference in
`src/index.js` as we're going to be styling with `styled-components`
💅 and then use our `App.js` component:

![](https://thepracticaldev.s3.amazonaws.com/i/yyne3q36jc0zca2ld89u.gif)

Ok, so the reason why I have abstracted the `App.js` component out of
the `src/index.js` file is so that when we come to using the Context
API we can add it to the highest level in our app.

### What about the rest?

So this isn't really the Create React App as we're using CodeSandbox
instead, I have gone over the basic styling used in the
[styled-components getting started] post so it's time to refer to that
to mimic the styles we need.

That means what we're going to do, rather than go into depth on the
styling of each of the component parts that make up the basic Create
React App appearance, we're going to re-use components.

The Create React App boilerplate code has one file that we go over
styling in the [styled-components getting started] post which is the
`App.js` file, the others are left or deleted, the basic style of
`App.js` is:

**`App.css`**

```css
.App {
  text-align: center;
}

.App-logo {
  animation: App-logo-spin infinite 20s linear;
  height: 80px;
}

.App-header {
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
}

.App-title {
  font-size: 1.5em;
}

.App-intro {
  font-size: large;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

## Use styled components for styling

Now we're going to recreate the styles from the `App.css` file with
`styled-components`, let's list them out here and go through them:

```bash
AppWrapper
AppHeader
AppTitle
rotate360
AppLogo
# We're adding our own styles for
AppIntro
Underline
StyledHyperLink
Button
```

`AppWrapper` is the top level wrapper which in a larger component
could be used for layout with CSS Grid or Flexbox, in our case we're
going to align the text centre.

![](https://thepracticaldev.s3.amazonaws.com/i/uc08zkkf4ay1hq8pkt3w.gif)

Straight forward enough, right? Now the majority of the rest of the
components will use the `styled-components` [`ThemeProvider`] which is
what we're going to pass our theme to from the Context API.

## Add themes to switch between with the React Context API

Ok, we need to define some themes to pass to the `ThemeProvider`,
we're going to define several theme aspects we want to change, these
are going to be:

```js
primary // colour
secondary // colour
danger // colour
fontHeader // font
fontBody // font
```

Create a file to contain the theme object in the `theme` directory and
call it `globalStyle.js` and add in the following:

```js
import { injectGlobal } from 'styled-components'

export const themes = {
  theme1: {
    primary: '#ff0198',
    secondary: '#01c1d6',
    danger: '#e50000',
    fontHeader: 'Old Standard TT, sans, sans-serif',
    fontBody: 'Nunito, sans-serif'
  },

  theme2: {
    primary: '#6e27c5',
    secondary: '#ffb617',
    danger: '#ff1919',
    fontHeader: 'Enriqueta, sans-serif',
    fontBody: 'Exo 2, sans, sans-serif'
  },

  theme3: {
    primary: '#f16623',
    secondary: '#2e2e86',
    danger: '#cc0000',
    fontHeader: 'Kaushan Script, sans, sans-serif',
    fontBody: 'Headland One, sans-serif'
  }
}

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Old+Standard+TT:400,700|Enriqueta:400,700|Exo+2:400,700|Kaushan+Script:400,700|Headland+One:400,700|Nunito:400,700');

  body {
    padding: 0;
    margin: 0;
  }
`
```

![](https://thepracticaldev.s3.amazonaws.com/i/qnxbteccbaw92jbwsq9c.gif)

Ok, so nothing really happening there apart from setting up the styles
for use later.

You will notice that `injectGlobal` is being used here, this is where
we're setting the fonts for use throughout the app, `injectGlobal`
[should be used once] in an app to set global styles like this.

Onwards! Let us now focus on getting the basic app styles into the
`App.js` component. We can now start using the `ThemeProvider` in
`App.js`. To do this, for now, to get some visual feedback we're going
to apply one of the themes from the `themes` object in
`globalStyle.js` this is so, as we are adding in components we can see
the theme being applied.

We can do this now with the `AppHeader` which is a styled div:

```js
const AppHeader = styled.div`
  height: 12rem;
  padding: 1rem;
  color: ${({ theme }) => theme.dark};
  background-color: ${({ theme }) => theme.primary};
`
```

You will notice here that we're beginning to use the
`styled-components`, `theme` props but, if we paste this code in now
there won't be any change until the `ThemeProvider` is passed the
`theme` object so we're going to wrap `App.js` with the
`ThemeProvider` component so that any component encapsulated by the
`ThemeProvider` is able to receive `theme` props.

![](https://thepracticaldev.s3.amazonaws.com/i/nuyaw29uoex6qcluf8va.gif)

`AppTitle` is going to be a h1 so:

```js
const AppTitle = styled.h1`
  font-family: ${({ theme }) => theme.fontHeader};
`
```

For the spinning React logo we can use the asset used previously in
the [styled-components getting started example]

We can add it in with the imports at the top of the `App.js` component
and add it into the `AppLogo` styled component as an `img` tag:

```js
const logo =
  'https://user-images.githubusercontent.com/234708/37256552-32635a02-2554-11e8-8fe3-8ab5bd969d8e.png'
```

The `keyframes` helper will need to be imported alongside the
`themeProvider` for the animation on the react logo.

```js
const rotate360 = keyframes`
  from { 
    transform: rotate(0deg); 
  }
  to { 
    transform: rotate(360deg); 
  }
`

const AppLogo = styled.img`
  animation: ${rotate360} infinite 5s linear;
  height: 80px;
  &:hover {
    animation: ${rotate360} infinite 1s linear;
  }
`
```

![](https://thepracticaldev.s3.amazonaws.com/i/pxe3fb5zqvprvtjthq5b.gif)

### Shared components

Shared components are covered in the [styled-components getting
started] guide if you need more information, for this example we're
going to bring in the final couple of components as shared ones for
the `StyledHyperLink` and `Button` in `src/Shared.js` add the
following:

**`src/Shared.js`**

```js
import styled, { css } from 'styled-components'

export const Button = styled.button`
  padding: 0.5rem 1rem;
  margin: 0.5rem 1rem;
  color: ${({ theme }) => theme.primary};
  font-size: 1rem;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  border: 2px solid ${props => props.border};
  background-color: Transparent;
  text-transform: uppercase;
  border-radius: 4px;
  transition: all 0.1s;
  &:hover {
    transform: translateY(1px);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  }
  ${props =>
    props.primary &&
    css`
      background: ${({ theme }) => theme.primary};
      border: 2px solid ${({ theme }) => theme.primary};
      color: white;
    `};
  ${props =>
    props.danger &&
    css`
      background: ${({ theme }) => theme.danger};
      border: 2px solid ${({ theme }) => theme.danger};
      color: white;
    `};
  &:hover {
    transform: translateY(2px);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  }
`

export const StyledHyperLink = styled.a`
  cursor: pointer;
  &:visited,
  &:active {
    color: ${({ theme }) => theme.primary};
  }
  &:hover {
    color: ${({ theme }) => theme.secondary};
  }
  color: ${({ theme }) => theme.primary};
`
```

Then import the components like any other:

![](https://thepracticaldev.s3.amazonaws.com/i/ipi1kdmy83ieiw6sppog.gif)

The last three components for now, `AppIntro`, `Underline` and
`StyledHyperLink`:

```js
const AppIntro = styled.p`
  color: ${({ theme }) => theme.dark};
  font-size: large;
  code {
    font-size: 1.3rem;
  }
  font-family: ${({ theme }) => theme.fontBody};
`

const Underline = styled.span`
  border-bottom: 4px solid ${({ theme }) => theme.secondary};
`

const StyledHyperLink = SHL.extend`
  text-decoration: none;
  font-family: ${({ theme }) => theme.fontBody};
  color: ${({ theme }) => theme.fontDark};
`
```

## Use the React Context API

<!-- Links -->

[how that went here]:
  https://blog.scottspence.me/react-context-api-with-gatsby
[styled-components getting started]:
  https://blog.scottspence.me/styled-components-getting-started
[example]: https://codesandbox.io/s/7wwr706nz0
[react docs]: https://reactjs.org/docs/context.html
[prop drilling]:
  https://blog.kentcdodds.com/prop-drilling-bb62e02cb691
[my gatsby blog]: https://blog.scottspence.me
[@leighchalliday]: https://twitter.com/leighchalliday
[great usecase]: https://www.youtube.com/watch?v=yzQ_XulhQFw
[codesandbox]: https://codesandbox.io
[coding straight away]: https://codesandbox.io/s/new
[open a react codesandbox]: https://codesandbox.io/s/new
[when to use the context api]:
  https://reactjs.org/docs/context.html#when-to-use-context
[bikeshedding]: https://en.wiktionary.org/wiki/bikeshedding
[styled-components getting started]:
  https://medium.com/styled-components/styled-components-getting-started-c9818acbcbbd
[styled-components getting started example]:
  https://codesandbox.io/s/x26q7l9vyq
[`themeprovider`]:
  https://www.styled-components.com/docs/advanced#theming
[stateless functional component]:
  https://reactjs.org/docs/state-and-lifecycle.html#the-data-flows-down
[should be used once]: https://stackoverflow.com/a/42899789/1138354
