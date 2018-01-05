---
path: "/wsl-setup/"
date: "2018-01-04"
title: "WSL setup"
tags: ['information', 'guide', 'wsl', 'bash on windows']
published: false
---

I nuked my laptop the other day as I was having issues with bash on Windows.
Related partly to using [nvm][slowbash] with WSL and something else that I'm
sure I'll figure out eventually but as of right now I'm still not entirely
certain what it was that was causing the slowness.

So I have had to set up my development environment again from scratch, luckily
for me I keep all my settings and config information in a GitHub
[repo][settingsrepo]

Here's how I set up Windows Subsystem Linux for my development environment.

This is my opinionated view on my setup and usage of WSL.

So, after installing [WSL][wslmsstore] from the Microsoft Store and adding your
default user fist thing is to update and upgrade all the things.

```sh
sudo apt update
sudo apt -y upgrade
```

If you've not used any Linux distributions before the `-y` in the upgrade
statement is to default the answer to yes for any prompts that are displayed in
the terminal.

![upgrade image](./upgrade-yes.png)

You wont have these messages 👆

### Install node

Installing node via the instructions given on the nodejs.org site doesn't give
the correct permissions for me, so when trying to `npm install` anything I get
errors, I found using `nvm` helps:

```sh
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh | bash
nvm install node
node -v
npm -v
```

If you find the startup time of bash [taking too long][slowbash] then take a
look at [using n][usen] instead, I haven't got to this part yet but if I do find
it quicker then I'll post an update/instructions.

### Build tools

To compile and install native addons from npm you may also need to install build
tools, I need this for Gatsby images which uses `sharp` which in turn uses
`node-gyp`:

```sh
sudo apt-get install -y build-essential
```

### Install fish 🐟

Fish is now my go to shell purely for the auto complete/intellisense 👌 there's
also some nice themes you can get for it too.

```sh
sudo apt -y install fish
sudo apt -y upgrade
sudo apt -y autoremove
```

### Install Oh My Fish | OMF

Oh My Fish is like a package manager for Fish enabling the instal of packages
and themes.

```sh
curl -L https://get.oh-my.fish | fish
```

### Install OMF theme

```sh
omf install clearance
```

### The start of the beginning

Ok, so that is a basic setup for WSL

### Move your dotfiles

If you have all your dotfiles backed up in a GitHub repo then now is a good time
to add them to your WSL folder, the last times I did this I manually set the
permissions after moving the files but have since discovered `rsync`

![bash files permissions](./bash-dotfiles.png)

<!-- links -->

[slowbash]: https://github.com/Microsoft/WSL/issues/776
[wslmsstore]: https://www.microsoft.com/store/productId/9NBLGGH4MSV6
[usen]: https://github.com/Microsoft/WSL/issues/776#issuecomment-266112578
[settingsrepo]: https://github.com/spences10/settings
