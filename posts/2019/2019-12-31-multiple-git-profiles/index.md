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
    'git',
  ]
published: true
---

Ove the past couple of weeks now I have set up several development
machines at work and have two git accounts, GitHib and Bitbucket.

To connect to both I use SSH, I have been using SSH in place of HTTPS
for quite some time now, if you want to con

Having two Types of accounts can get a bit frustrating

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

Check current permissions with `stat`:

```bash
# stat -c "%a %n" ~/.ssh/*
644 /home/scott/.ssh/config
700 /home/scott/.ssh/id_rsa
700 /home/scott/.ssh/id_rsa.pub
700 /home/scott/.ssh/id_spences10GitHub
700 /home/scott/.ssh/id_spences10GitHub.pub
```

Copy the `rsa` keys from OneDrive to respective locations and add
permissions as above.

```bash
chmod 700 ~/.ssh/id_rsa.pub
# etc...
```
