---
path: "/javascript-snippets"
date: "2018-12-31"
title: "JS snippets from Twitter"
tags: ['information', 'learning', 'javascript', 'snippets']
excerpt: ""
published: false
---

This is a dump of all the snippets I have collected over the last 18
months or so, that I'm going to document here so it's probably going
to be a mess but it's mainly for my reference so 😛

Straight from Wes himself.

🔥 The Array `.some()` Method is super handy for checking if at least
one item in an array meets what you are looking for

```js
const user = {
  name: 'Scott',
  permissions: ['USER', 'CREATE_ITEM']
}

// check if the user is either admin or can delete in item
const canDelete = user.permissions.some(p =>
  ['ADMIN', 'DELETE_ITEM'].includes(p)
)
// canDelete is false

// check if a user is either admin or can create in item
const canCreate = user.permissions.some(p =>
  ['ADMIN', 'CREATE_ITEM'].includes(p)
)
// canDelete is true
```

On the same note `.every()` is great for checking every item in an
array meets what you are looking for.

```js
const people = [
  { name: 'Scott', age: 42 },
  { name: 'Sue', age: 26 },
  { name: 'Orla', age: 9 }
]

const canEveryoneDrink = people.every(p => p.age >= 18)
// false

const canSomeoneDrink = people.some(p => p.age >= 18)
// true

const howManyDrinkers = people.filter(p => p.age >= 18).length
// 2
```
