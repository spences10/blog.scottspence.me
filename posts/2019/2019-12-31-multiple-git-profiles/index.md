---
path: '/multiple-git-profiles'
date: '2019-01-24'
title: 'Setting up multiple Git providers'
tags:
  [
    'information',
    'learning',
    'guide',
    'wsl',
    'bash on windows',
    'n',
    'node',
    'git',
  ]
published: true
---

Ove the past couple of week now I have set up several development
machines at work and have two git accounts, GitHib and Bitbucket

```bash
# cat ~/.ssh/config
# Bitbucket (default)
  Host bb
  HostName bitbucket.org
  User git
  IdentityFile ~/.ssh/id_rsa

# Github (secondary)
  Host gh
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_spences10GitHub
```
