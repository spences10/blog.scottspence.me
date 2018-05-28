---
path: "/travis-ci-with-now"
date: "2018-01-12:17:08:004Z"
title: "Making a CI pipeline with Travis CI"
tags: ['information', 'guide', 'travis-ci', 'now', 'zeit']
published: true
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
    secure: lmfinghash
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
