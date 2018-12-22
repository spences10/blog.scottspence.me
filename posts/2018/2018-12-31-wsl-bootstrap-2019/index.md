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
published: false
---

This is the refresh on my guide from the start of the year on setting
up a web development environment on a windows machine.

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
