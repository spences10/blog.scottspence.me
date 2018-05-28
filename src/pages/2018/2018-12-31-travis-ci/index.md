---
path: "/travis-ci-with-now"
date: "2018-01-12:17:08:004Z"
title: "Making a CI pipeline with Travis CI"
tags: ['information', 'guide', 'travis-ci', 'now', 'zeit']
published: false
---

I thought I'd set up this blog with some sort of build pipeline, the
intention was to have a good Continuous Integration pipeline so that
if there were any issues when building the site that I wouldn't push a
broken build. No one wants to see that 😿

### What I'm using

* Zeit's now

* Gatsby

* Travis DUH!

### How the set-up works

I have my GitHub project set up with two branches `master` and
`development`, changes are made on feature branch of `development`
then pushed up to `master` once I'm happy the change is ok to go to
production.

Using Zeit's now you can define a different url for each of your
environments. I have a `.now.sh` url for `development` and a
sub-domain of my `scottspence.me` domain for `master`/production.

### The set-up

There are a few parts

#### the flow

Issue is "Add self hosted Fonts #75" I'll make a branch from git and
give it a name to reflect the issue number
`dev/75/add-self-hosted-fonts` I'll make my changes locally then push
to the `development` branch.

My `travis.yml` looks like this:

```yml
sudo: false

language: node_js

cache:
  directories:
    - node_modules

notifications:
  email: false

node_js:
  - '9'

before_script:
  - npm prune

script:
  - npm i -g now@canary
  - npm run clean
  - npm run build
  - npm run deploy

after_script:
  - if [ "$TRAVIS_BRANCH" = "development" ]; then npm run alias:dev; fi
  - if [ "$TRAVIS_BRANCH" = "master" ]; then npm run alias:prod; fi
  - if [ "$TRAVIS_BRANCH" = "master" ]; then npm run release; fi
  - npm run cleanup

env:
global:
    secure: nMoB9l5p/xPngrLkFdEjki7GuSLrxbn0ZzV+PX0UFJc/Q/fYL5wIRUcY5PdIpdOKToub/KwJf6uk0ecfwc+3ttJh2+PYk+Yrzkl3+wudj0lQX8ahXcGpfQjWegH+milp4m6XUrV8GEBCQmROLzxatk6tp1J3yQ/WoogyFBXspUwT5oNi37WzIC3kPD1JSN+Nx1XmHSQDClxsJBpLbrG9OZjex6BG5n7+QnJYtlqMCeRpWxv7RKS87JzONhs7y1DpWA4e428QOyBhK3QOPBJ2ZTMgkykzn2wvu1f78lqzsEn/aaDI7QD8tsVLFgVfatgiUzk/AXvKF02L1tTMeHtIYp2hYGT4A0196RmZl+G5WW8/LdkmaXge/wMM5QZ2zvhAroWyCuhH3fEwRA8YdfoPyMM9pVWRZUaaxVnusW0XakQRezQwsmuBJXDTXwFkxINWENoOqzQ1ppZTN0bM22AyiOiNVMn1rRNh/YQ21Gcyb4hkUl8mM5ZHPhdLBsu3/IDts00LoU2IgYzEZbcmXvgr9b/9Sxeifbnk7Ut/trb3CyPWMC/ZGc1px71qKGMvwU8nL+TlPszEvQ03OJ23+mufapEIkOZSiVtwGU0Vl1hfor8yPGSl0notsKCa73biqXIcQiAy9gpevau9KJXtpOf1MJnogWpuOX83Vga3C3Y/eww=
```

My `package.json` looks like this:

```json
  "now": {
    "name": "scottblog"
  },
  "scripts": {
    "clean": "rm -rf .cache/ && rm -rf scottblog/ && rm -rf public/",
    "build": "gatsby build && mv public scottblog",
    "deploy:now": "npm run clean && npm run build && now scottblog/",
    "dev": "npm run clean && gatsby develop",
    "format": "pretty-quick",
    "precommit": "pretty-quick --staged",
    "deploy": "now scottblog/ --token $NOW_TOKEN",
    "alias:dev": "now alias blog-scottspence.now.sh --token $NOW_TOKEN",
    "alias:prod": "now alias blog.scottspence.me --token $NOW_TOKEN",
    "cleanup": "now rm scottblog --safe --yes --token $NOW_TOKEN",
    "release": "release-it"
  },
```

https://zeit.co/docs/examples/travis
