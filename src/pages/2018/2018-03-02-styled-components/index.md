---
path: "/styled-components-getting-started"
date: "2018-03-02"
title: "styled-components 💅 getting started"
tags: ['information', 'guide', 'styled-components', 'CSS-in-JS']
published: true
---

Up until around November last year I didn't like styling anything at
all with CSS, it was a chore rather than something I enjoyed doing.

Customary gif of Perter Griffin messing around with the venetian
blinds. I'm not going to add it, everyone is sick of seeing it I'm
sure 😁.

That was until I used styled-components with my team on the Chingu
build to learn project we worked on, Marina in particular was such an
inspiration for me watching how components were styled and really gave
me the confidence to start using CSS-inJS.

I want to share what I have learned so far by going through styling a
basic react application.

☝️ so, to be clear, this is what I have learned so far and this will
probably change as a learn more.

There's some basic CSS concepts in this post that I was not aware of
before starting out with styled-components that I presume are assumed
in styling web pages.

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

## Use ThemeProvider

**ThemeSelect.js**

```js
import React from 'react'
import styled from 'styled-components'

const Select = styled.select`
  margin: 2rem 0.5rem;
  padding: 0rem 0.5rem;

  width: 50%;
  text-align: center;

  font-family: Roboto;
  font-size: 1rem;

  border: 1px dashed ${props => props.theme.light};
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

**App.js**

```js
import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import logo from './logo.svg'

import { theme1, theme2 } from './theme/globalStyle'
import ThemeSelect from './components/ThemeSelect'

const AppWrapper = styled.div`
  text-align: center;
`

const AppHeader = styled.div`
  height: 12rem;
  padding: 1rem;
  color: #000;
  background-color: #fafafa;
  color: ${props => props.theme.dark};
  background-color: ${props => props.theme.primary};
`

const AppTitle = styled.h1``

const AppLogo = styled.img`
  animation: App-logo-spin infinite 120s linear;
  height: 80px;
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  &:hover {
    animation: App-logo-spin infinite 1s linear;
  }
`

const AppIntro = styled.p`
  /* color: ${props => props.theme.dark}; */
  font-size: large;
`

const EmojiWrapper = styled.span.attrs({
  role: 'img'
})``

const CodeWrapper = styled.code`
  font-size: 1.5rem;
`

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
            To get started, edit <code>src/App.js</code> and save to
            reload.
          </AppIntro>
          <ThemeSelect handleThemeChange={this.handleThemeChange} />
        </AppWrapper>
      </ThemeProvider>
    )
  }
}

export default App
```

Transcript from DM convo about this article

**Me:**

I'm thinking about how to put this styled components post together

For a beginner Like me, there's a few bits which I've learned

I don't want to be giving people the wrong information

**Phill:**

Hiya :) I can review your post if you’d like? Or do you need some more
ideas too to pull it together?

**Me:**

Well, I don't have anything down yet but from doing a couple of sites
now I use the following:

A global style module that has the theme object in there and media
queries and predefined h1-h6 LIs ULs and P

Then pass props to the components for the theme

Use the theme provider

Anything else??

Phil:

Sounds good :)

So a more styled theming targeted article if I get this correctly?

**Me:**

Yeah, was that not what you wanted?

Phil:

Oh that is definitely one of the things 👌

**Me:**

So, am I missing something?

Just got to say I hated styling things in CSS until I started using
styled-components

or CSS-in-JS

Not given anything else a go really, well apart from the Zeit one they
have

Phil:

No I think that’d be a great guide ✨

I’d just love to have some guides on the order of styled components in
the component tree too

**Me:**

Whats that then?

Component tree?

**Phill:**

So I’ve seen a couple of patterns that can greatly break what styled
components is good at

**Me:**

The format I'm taking for the last three sites now is use theme and
injectGlobal

**Phill:**

let’s say you have a const Form = () => <A>...</A> Where the children
are styled Then wrapping it like styled(Form) is an anti pattern since
st that point the classname becomes exposed and the styles of the
elements in the Form might be mixed which breaks encapsulation

**Me:**

I have in some instances predefined headings and p's

this time around I'm not

Because I found that I was always overriding what I had predefined
anyway

I'm thinking this time around if I see the same pattern then I guess
i'll farm it off to the globalStyle module

**Phill:**

Yea but then you could write styled(A) and use that instead and that’d
be fine, but styled(Form) targets a “structural component” (or even a
container; who knows)

**Me:**

I've not done anything with forms yet

**Phill:**

So that’s a pattern I’ve seen a couple of times but it spreads your
styles across multiple levels where you can’t refactor and follow them
anymore

**Me:**

Ah ok, well I guess I'm learning as I go, but that's the sort of thing
I want to avoid

**Phill:**

It’s just an example name; not forms specifically

**Me:**

Phil!

I'm sorry, I do apologise, I didn't see this:

```philp
Then wrapping it like styled(Form) is an anti pattern since st that point
the classname becomes exposed and the styles of the elements in the
Form might be mixed which breaks encapsulation
```

**Phill:**

😉 So when I need a variant that’s like A in the example I’d do three
things:

**Me:**

I guess you're always going to have the possibility of that happening

**Phill:**

* is it a generic change that’s common? => introduce a prop in A that
  switches it around

* is it specific but kind of common? => move the styled(A) variant to
  where A is and export it there

* and lastly: move the variant to where it’s used (where Form is in
  the example)

So there’s really no need for styled(Form) and it also encourages
descendant selectors which are :(

**Me:**

Awesome!!

These are great points! But when you are piecing something together
for the first time this sort of thing isn't immediately obvious, well,
for me anyway

**Phill:**

It’s not unfortunately 😅 So that’s why an article on it would be
awesome 😎

**Me:**

I have always used DRY, never knew it was called DRY before starting
to learn webdev but it irks me to have stuff repeated everywhere

**Phill:**

Yea this practice is not that obvious unfortunately

https://twitter.com/_philpl/status/953029683830054915

This might be the shortest explanation of what you’d do if you do
styled(Form)

Or like Erik puts it “there’s no element to style”

Or like in our example, there is no _single_ element to style

I hope this gives you some ideas for the article 😬

**Me:**

Yes!

There's loads to put in there thanks Phil, I'm pulling what we've
discussed here [thanks for taking the time to discuss it with me by
the way] and what I have learned over the last month now and I'll add
as a go along with styling my portfolio site as well

Max and yourself aren't in any hurry to have the information are you?

<!-- Links -->

[create react app]: https://github.com/facebook/create-react-app#create-react-app-
[`npx`]: https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b
