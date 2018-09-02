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
published: true
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
> A great resource on explaining the can be found here from
> [@leighchalliday] with a [great usecase] on the subject.

## What we're doing...

For this post we're going to extend the example we created for
[styled-components getting started] as it has the majority of the code
we'll need to get started with the React Context API.

We're going to extend that example to manage the theme state of the
example application.

So in summary:

- Scaffold out basic CreateReact App
- Use styled components for styling
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

Add the directories into the `src` folder and we can add in some
components, the file structure should look something like this:

```text
context-demo/
├─ public/
├─ src/
│  └─ components
│  └─ contexts
│  └─ theme
└─ package.json
```

Ok, so, what we're going to do is

First off, create a context component

The great thing with react is everything is a component, so let's
create a context component for the Theme select

## Scaffold out basic CreateReact App

## Use styled components for styling

## Add themes to switch between with the React Context API

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
