---
path: "/react-context-api-with-gatsby"
date: "2018-12-31"
title: "Use the React Context API with Gatsby"
tags: ['information', 'learning', 'guide', 'gatsby', 'api']
excerpt: ""
published: false
---

Using the React Context API today, I [made a snippet] to scaffold out
a component for it.

Here is a great explanation of [how to use it] here from
[@leighchalliday], thank you Leigh 🙏

After doing this in a CRA project I decided to use it on one of my
Gatsby projects. With Gatsby

One thing you need to do with Gatsby if you want to use the React 16.3
in Gatsby and that's to use `gatsby-plugin-react-next` as Gatsby uses
16.2 I believe.

Another thing you may need to do is to
`npm i react@latest react-dom@latest` then uninstall them, this may be
because I was trying to use it in an old project, I've had to do this
on two projects now as I was getting `createContext` is not a function
errors until I did this.

<!-- Links -->

[made a snippet]: https://github.com/spences10/settings/blob/35ba1ca3e9871c3ea6344ca2274ebbd327a18bed/globalVs.code-snippets#L74-L112
[how to use it]: https://www.youtube.com/watch?v=yzQ_XulhQFw
[@leighchalliday]: https://twitter.com/leighchalliday
