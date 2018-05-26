---
path: "/use-your-own-gatsby-api"
date: "2018-05-13"
title: "Use your own API with Gatsby"
tags: ['information', 'learning', 'guide', 'gatsby', 'api']
published: false
---

I wasn't sure on the process of getting your own API data into Gatsby
or if you could do it at all! Turns out you can and it wasn't that
much of a ballache to get set up either.

I wanted to be able to get some JSON data and display that in Gatsby,
specifically this JSON data was in the [JSON Resume Schema] format. I
had a half baked CV I made with React a while ago and decided that I
wanted to make it with Gatsby

When Gatsby builds it pulls the data from where you and then creates
it statically

I made an example here that gets JSON data from an external source and
creates the pages from that

I found a good answer to this question on [Stack Overflow]

<!-- Links -->

[json resume schema]: https://jsonresume.org/schema/
[stack overflow]: https://stackoverflow.com/questions/49299309/gatsbyjs-getting-data-from-restful-api
