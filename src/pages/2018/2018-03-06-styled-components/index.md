---
path: "/styled-components-getting-started"
date: "2018-03-06"
title: "styled-components 💅 getting started"
tags: ['information', 'guide', 'styled-components', 'CSS-in-JS']
published: false
---

Up until around November last year I didn't like styling anything at
all with CSS, it was a chore rather than something I enjoyed doing.

Customary gif of Perter Griffin messing around with the venetian
blinds. I'm not going to add it, everyone is sick of seeing it I'm
sure 😁.

That was until I used styled-components with my team on the Chingu
build to learn project we worked on, Marina in particular was such an
inspiration for me watching how components were styled and really gave
me the confidence to start using CSS-in-JS.

I want to share what I have learned so far by going through styling a
basic react application.

☝️ so, to be clear, this is what I have learned so far and this will
probably change as a learn more.

There's some basic CSS concepts in this post that I was not aware of
before starting out with styled-components that I presume are assumed
in styling web pages.

### Install styled-components

Ok lets bootstrap the basic react application you get when using
[Create React App] with [`npx`], if you have Create React App
installed globally then you can use the command without `npx`.

```sh
npx create-react-app style-with-styled-components
```

`cd` into the project via the terminal and install styled-components

```sh
style-with-styled-components/
# or
# cd style-with-styled-components/ if you don't use fish shell
npm i styled-components
```

Ok, we have the basic app we can style, thankfully Dan has kindly
provided the starting styles for us so let's begin my using them with
styled-components

We can start with the `App.js` file and it's accompanying `App.css`
file. Let's take a look at the `App.js` first:

```js
import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to
          reload.
        </p>
      </div>
    )
  }
}

export default App
```

The five `className`'s in there `App`, `App-header`, `App-logo`,
`App-title` and `App-intro` we're going to replace with our
styled-components, so let's make a component for each of the classes
and copy pasta the CSS in from `App.css`

The way the CRA CSS is assumes that you will have a corresponding CSS
file for each component, which can help with maintaining the CSS and
lends to the React idea of having all your files separated into their
component parts.

So let's do one component first to get an idea of where we're going
with this.

First, import `styled` into the `App.js` module:

```js
import styled from 'styled-components'
```

Now lets look at **`<AppWrapper className="App">`**, it's the top
level div for this component and is what I like to call the wrapper
for the component. So lets give it an imaginative name `AppWrapper`.
Referring to the `App.css` there is `text-align: center;` which
belongs to this, so:

```js
const AppWrapper = styled.div`
  text-align: center;
`
```

So here we have defined the `AppWrapper` const as a `styled.div`
followed by back ticks `` inside of the back ticks we can write any
regular CSS with the exact same syntax.

Now that we have our `AppWrapper` we can replace the top level div on
the `App.js` component.

```js
import React, { Component } from 'react'
import styled from 'styled-components'

import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to
          reload.
        </p>
      </AppWrapper>
    )
  }
}

export default App
```

### styled-components all the things

So let's do that for the remaining four CSS classes, and take a look:

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
  animation: ${rotate360} infinite 120s linear;
  height: 80px;
`

const AppHeader = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`

const AppTitle = styled.h1`
  font-size: 1.3em;
`

const AppIntro = styled.p`
  font-size: large;
`
```

So first off we've created a variable for the React svg [animation],
you'll need to import the `keyframes` helper from styled-components
like: `import styled, { keyframes } from 'styled-components'` this can
now be used throughout the component and we can add an on `hover` to
the component as well to illustrate using `hover` in a component.

```js
const AppLogo = styled.img`
  animation: ${rotate360} infinite 120s linear;
  height: 80px;
  &:hover {
    animation: ${rotate360} infinite 1.5s linear;
  }
`
```

Ok, our app shouldn't look any different as we haven't added in our
styled-components to the app `render()` method, so let's do that now.
Let's also change the intro text. You can add a wrapper for the
`<code>` tags something like:

```js
const CodeWrapper = styled.code`
  font-size: 1.3rem;
`
```

But if you prefer you can nest selectors within the component, like:

```js
const AppIntro = styled.p`
  color: ${props => props.theme.dark};
  font-size: large;
  code {
    font-size: 1.3rem;
  }
`
```

Let have a look at the `render()` method now...

```js
render() {
  return (
    <AppWrapper>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <AppTitle>Welcome to React</AppTitle>
      </AppHeader>
      <AppIntro>
        Bootstrapped with <code>create-react-app</code>.
      </AppIntro>
      <AppIntro>
        Components styled with <code>styled-components</code>{' '}
        <EmojiWrapper aria-label="nail polish">💅</EmojiWrapper>
      </AppIntro>
    </AppWrapper>
  )
}
```

Now all the classes originally used in `App.js` have been replaced so
there's no need for the `import './App.css'` mapping, remove that
aaaaand! Still no change!! 😁 Cool, we have now replaced all the css
with styled-components, now we can take a look at `injectGlobal`.

Lets take a look at how the `App.js` file should look before we move
on:

```js
import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

import logo from './logo.svg'

const AppWrapper = styled.div`
  text-align: center;
`

const rotate360 = keyframes`
  from { 
    transform: rotate(0deg); 
  }
  to { 
    transform: rotate(360deg); 
  }
`

const AppLogo = styled.img`
  animation: ${rotate360} infinite 120s linear;
  height: 80px;
  &:hover {
    animation: ${rotate360} infinite 1.5s linear;
  }
`

const AppHeader = styled.div`
  background-color: #222;
  height: 12rem;
  padding: 1rem;
  color: white;
`

const AppTitle = styled.h1`
  font-weight: 900;
`

const AppIntro = styled.p`
  font-size: large;
  code {
    font-size: 1.3rem;
  }
`

const EmojiWrapper = styled.span.attrs({
  role: 'img'
})``

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <AppHeader>
          <AppLogo src={logo} alt="logo" />
          <AppTitle>Welcome to React</AppTitle>
        </AppHeader>
        <AppIntro>
          Bootstrapped with <code>create-react-app</code>.
        </AppIntro>
        <AppIntro>
          Components styled with <code>styled-components</code>{' '}
          <EmojiWrapper aria-label="nail polish">💅</EmojiWrapper>
        </AppIntro>
      </AppWrapper>
    )
  }
}

export default App
```

### Style the body with `injectGlobal`

For styling the body of our react app we currently have the
`index.css` file that is being imported into the mounting point of our
app in the `index.js` file.

To style the body we can use [`injectGlobal`] from styled-components
which adds the styles directly to the stylesheet.

To do this you bring in the `injectGlobal` named export from
styled-components and add your styles between the back ticks.

```js
body {
  padding: 0;
  margin: 0;
  font-family: sans-serif;
}
```

Let's add a `theme` folder in `src` directory and add a
`globalStyle.js` file where we can keep all our styles we want to use
throughout the app.

In `src/theme/globalStyle.js` we'll need to import the `injectGlobal`
named export from styled-components:

```js
import { injectGlobal } from 'styled-components'

injectGlobal`

  body {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
  }
`
```

Ok, now we're adding the body style to the stylesheet directly so
there is no need for the `index.css` file mapping that is in
`index.js` it should look like this now:

```js
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
```

We should still have our nice `sans-serif` font going on, but let's
add in some nice Roboto for the body and Montserrat for the heading in
our `globalStyle.js` module. We can import Google fonts with an
`@import` in `injectGlobal` and apply Roboto to the body:

```js
injectGlobal`

  @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');

  body {
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
  }
`
```

Cool now we can add our imported font for or app header, and there's
the option if we want all our `<h1>`'s to use the same font we can add
that to the `injectGlobal` in our `globalStyles.js` module.

```js
injectGlobal`

  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,900|Roboto');

  body {
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
  }

  h1 {
    font-family: Montserrat;
  }
`
```

Then we can adjust the weight on the `AppTitle` component:

```js
const AppTitle = styled.h1`
  font-weight: 900;
`
```

To add the additional styles for fonts like Montserrat and Roboto you
can specify them in the `@import url()` you'll notice that Montserrat
has `:400,900` after it that is specifying the styles regular (400)
and black (900), you can import as many as you like from Google fonts
(CDN) but the more you import the longer it will take to load them, if
you have a lot of fonts and styles you want in your app then consider
adding them to a folder in the project, like:

```js
import Montserrat from './fonts/Montserrat-Regular.ttf'

injectGlobal`
  @font-face {
    font-family: Montserrat;
    src: url(${Montserrat});
  }
`
```

## Use `ThemeProvider`

Now say we want to have several components in our app that use a CSS
colour property `color: #6e27c5` instead of hard coding it through the
app for every component that uses it we can use the styled-components
`ThemeProvider`.

For this we will need to import the `ThemeProvider` named export from
styled-components, then define a `theme` object where our colour is
going to live:

```js
export const theme = {
  primary: '#6e27c5'
}
```

I'm going to add the theme object to my `globalStyle.js` module with
the rest of the styles.

To make the theme object available throughout the app component we'll
wrap our app component in the `ThemeProvider` and import our awesome
theme for use in the `ThemeProvider`:

```js
import React, { Component } from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'

import logo from './logo.svg'

import { theme } from './theme/globalStyle'

// our styled-components

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        {/* all children can access the theme object */}
      </ThemeProvider>
    )
  }
}

export default App
```

Now the `theme` properties can be used as props in our
styled-components, let's change the `background-color:` in the
`AppHeader` component, whilst we're at it let's add a `dark: #222`
property to our `theme` object and use that for the `color:` property:

```js
const AppHeader = styled.div`
  height: 12rem;
  padding: 1rem;
  color: ${props => props.theme.dark};
  background-color: ${props => props.theme.primary};
`
```

Now we can change our app theme globally 👍

### Can you change `theme`?

This is what I was thinking and it turns out you can, there's a great
[Stack Overflow answer] from Max on it.

It got me thinking if you can switch between themes rather than define
them for different sections like in the SO answer.

I started off by defining two themes in the `globalStyles.js` module:

```js
export const theme1 = {
  primary: '#ff0198',
  secondary: '#01c1d6',
  danger: '#eb238e',
  light: '#f4f4f4',
  dark: '#222'
}

export const theme2 = {
  primary: '#6e27c5',
  secondary: '#ffb617',
  danger: '#f16623',
  light: '#f4f4f4',
  dark: '#222'
}
```

Now we need a way to switch between the two `theme` objects, lets use
a select box for them, let's create a components folder and in there
make a `ThemeSelect.js` component, we can worry about refactoring the
`App,js` component when I'm not here 🙃:

**ThemeSelect.js**

```jsx
import React from 'react'
import styled from 'styled-components'

const Select = styled.select`
  margin: 2rem 0.5rem;
  padding: 0rem 0.5rem;

  font-family: Roboto;
  font-size: 1rem;

  border: 1px solid ${props => props.theme.light};
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
  background: ${props => props.theme.light};
  border-radius: 2px;
`

export const SelectOpt = styled.option`
  font-family: Roboto;
  font-size: 1rem;
`

class ThemeSelect extends React.Component {
  render() {
    return (
      <div>
        <Select onChange={e => this.props.handleThemeChange(e)}>
          <SelectOpt value="theme1">Theme 1</SelectOpt>
          <SelectOpt value="theme2">Theme 2</SelectOpt>
        </Select>
      </div>
    )
  }
}

export default ThemeSelect
```

You've probably noticed the
`onChange={e => this.props.handleThemeChange(e)` event, we're going to
add that method to the `App.js` component along with some state to
manage what theme is selected.

**App.js**

```jsx
import React, { Component } from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'

import logo from './logo.svg'

import { theme1, theme2 } from './theme/globalStyle'
import ThemeSelect from './components/ThemeSelect'

// our lovely styled-components here

class App extends Component {
  state = {
    theme: theme1
  }
  handleThemeChange = e => {
    let theme = e.target.value
    theme === 'theme1' ? (theme = theme1) : (theme = theme2)
    this.setState({ theme })
  }
  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <AppWrapper>
          <AppHeader>
            <AppLogo src={logo} alt="logo" />
            <AppTitle>Welcome to React</AppTitle>
          </AppHeader>
          <AppIntro>
            Bootstrapped with <code>create-react-app</code>.
          </AppIntro>
          <AppIntro>
            Components styled with <code>styled-components</code>{' '}
            <EmojiWrapper aria-label="nail polish">💅</EmojiWrapper>
          </AppIntro>
          <ThemeSelect handleThemeChange={this.handleThemeChange} />
        </AppWrapper>
      </ThemeProvider>
    )
  }
}

export default App
```

To summarise what we have done with `App.js` here is, add some state
to default to `theme1` where the two themes are imported as named
exports of the `globalStyle.js` module.

Add a method to handle the change of the `ThemeSelect.js` component
`handleThemeChange` this is where we can switch between the two
`theme` objects.

### Extending styled-components

So far our app hasn't got many styled-components that are similar but
what if we were to add some buttons...

<!-- Links -->

[create react app]: https://github.com/facebook/create-react-app#create-react-app-
[`npx`]: https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b
[animation]: https://www.styled-components.com/docs/basics#animations
[`injectglobal`]: https://www.styled-components.com/docs/api#injectglobal
[stack overflow answer]: https://stackoverflow.com/a/42899979/1138354
