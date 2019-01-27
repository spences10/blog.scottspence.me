---
path: '/multiple-git-profiles'
date: '2019-01-27'
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

Over the past couple of weeks now I have set up several development
machines at work and have had to also use two git accounts, GitHib and
Bitbucket.

To connect to both I use SSH as a preference, I have been using SSH in
place of HTTPS for quite some time now, if you want to connect
repeatedly without having to provide user name and password details
then SSH is a good option.

If you are unfamiliar with using SSH to authenticate with git then
take a look at my cheat sheets repository ([ss10.me/cheat-sheets])
there are several sections covering SSH, notably:

- [How to Authenticate with GitHub Using SSH]
- [Use multiple SSH Keys] (what this post is covering)
- [Re Use SSH Keys from one Machine to Another]

I have come across this set-up a few times now and implemented it for
myself.

You'll need to create a `config` file in the `.ssh` folder in your
home directory (Windows, Ubuntu or both if you use a [WSL set-up])
check with:

```bash
ll ~/.ssh/
```

This will list out the contents of the folder, if you get
`No such file or directory` then you don't have SSH configured.

Take a look at the

For this example let's presume that we have already created our SSH
keys for Bitbucket and GitHub and authenticated with both Bitbucket
and GitHub.

Next create a `config` file

```bash
# cat ~/.ssh/config
# Bitbucket (default)
  Host bb
  HostName bitbucket.org
  User git
  IdentityFile ~/.ssh/id_default

# Github (secondary)
  Host gh
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_secondary
```

Check current permissions with `stat`:

```bash
# stat -c "%a %n" ~/.ssh/*
644 /home/scott/.ssh/config
700 /home/scott/.ssh/id_default
700 /home/scott/.ssh/id_default.pub
700 /home/scott/.ssh/id_secondary
700 /home/scott/.ssh/id_secondary.pub
```

Copy the `rsa` keys from OneDrive to respective locations and add
permissions as above.

```bash
chmod 700 ~/.ssh/id_default.pub
# etc...
```

<!-- Links -->

[ss10.me/cheat-sheets]: https://github.com/spences10/cheat-sheets
[how to authenticate with github using ssh]:
  https://github.com/spences10/cheat-sheets/blob/master/git.md#how-to-authenticate-with-github-using-ssh
[use multiple ssh keys]:
  https://github.com/spences10/cheat-sheets/blob/master/git.md#use-multiple-ssh-keys
[re use ssh keys from one machine to another]:
  https://github.com/spences10/cheat-sheets/blob/master/git.md#re-use-ssh-keys-from-one-machine-to-another
[wsl set-up]: https://blog.scottspence.me/wsl-bootstrap-2019
