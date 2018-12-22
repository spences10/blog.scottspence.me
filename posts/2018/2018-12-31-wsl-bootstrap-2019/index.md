---
path: '/wsl-bootstrap-2019'
date: '2018-12-31'
title: 'Windows Web-dev bootstrap'
tags:
  [
    'information',
    'learning',
    'guide',
    'wsl',
    'bash on windows',
    'n',
    'node',
  ]
published: true
---

I have been a professional web developer for 10 months now and used
both MacOs and Windows in that time. My preferred one to use is
Windows, for no other reason that I like to have my Ctrl key as the
key to use for copy paste operations and I can use my left pinky
instead of my thumb. Anyway, let's leave the weak reasoning behind as
that's no the purpose of this post.

This is the refresh on my guide from the start of the year on setting
up a web development environment on a windows machine.

If you're still hatin' on Windows then grow up!

Let's see what Ken has to say about it:
https://twitter.com/ken_wheeler/status/1075556283795824640

Initial update:

```sh
sudo apt update && sudo apt -y upgrade && sudo apt autoremove && sudo apt dist-upgrade
```

Didn't take long at all

fish install was latest version

still need `sudo apt install -y build-essential` for make

must say installing and updating dependencies seems really fast

used n to install node

pretty straightforward and fast

antil malware executable needed exclusions added again

Specifically for using gatsby I was getting
`Error: pngquant failed to build, make sure that libpng-dev is installed`
errors so:

```sh
sudo apt install -y libpng-dev
# npm install -g pngquant-bin
```

Seemed to resolve the issue
