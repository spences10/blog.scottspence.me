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

## From scratch to Create React App on Windows

**An opinionated guide on setting up a web development environment on
Windows 10**

I have been a professional web developer for 10 months now and used
both MacOs and Windows in that time. My preferred OS to use is
Windows, for no other reason than I prefer they keyboard layout.

With Windows/Linux I like to have my Ctrl key as the key to use for
copy paste operations and I can use my left pinky instead of my thumb.
Anyway, let's leave the weak reasoning behind as that's not the
purpose of this post!

If you don't have a Windows machine then this post probably isn't for
you, if this is different from what you use, it doesn't make it bad.

Let's see what Ken has to say about it:
https://twitter.com/ken_wheeler/status/1075556283795824640

This is the refresh on [my guide from the start of the year] on
setting up a web development environment on a Windows machine.

This guide will cover installing Ubuntu but you can use some of the
other flavours of Linux available in the Windows store, the Debian
setup will be very similar to the Ubuntu one.

## Objective of this post

To go from a fresh instance of Windows 10 to something you can develop
web apps with.

These instructions are for the **Windows 10 Fall Creators Update and
later.**

What we're going to cover:

<!-- TOC -->

- [From scratch to Create React App on Windows](#from-scratch-to-create-react-app-on-windows)
- [Objective of this post](#objective-of-this-post)
- [Install WSL](#install-wsl)
- [Enable WSL on your machine](#enable-wsl-on-your-machine)
- [update, upgrade and autoremove](#update-upgrade-and-autoremove)
- [Install Node (with `n`)](#install-node-with-n)
- [Install Visual Studio Code](#install-visual-studio-code)
- [Install Windows Git](#install-windows-git)
- [Install a Terminal (Hyper)](#install-a-terminal-hyper)
- [Install Fish Shell!](#install-fish-shell)
  - [Install Oh My Fish](#install-oh-my-fish)
    - [Fish themes with OMF](#fish-themes-with-omf)
- [Configure](#configure)
  - [Permissions](#permissions)
  - [Use SSH with GitHub](#use-ssh-with-github)
- [Create React App](#create-react-app)
- [Change WSL version](#change-wsl-version)

<!-- /TOC -->

## Install WSL

You can install Ubuntu from [the Microsoft store] which will be the
first half of the install the second will be when ypu open the app.

## Enable WSL on your machine

The [official guidance] covers it very well, but I'm going to add in
the shortcut keys here if you don't want to be clicking around with
the mouse.

Before that however, if you haven't selected PowerShell as your
default Command Prompt you can select it from the Taskbar settings
page located in the Personalisation section in the Settings, I suggest
doing that now:

![lsb_release image](./powershell.gif)

Use Windows key+x, this is the same as right clicking the windows icon
on the desktop, this will open the quick link menu. From here you need
to select the Windows PowerShell (<u>A</u>dmin) option, you can do
this by pressing **a** on the keyboard. So Windows key+x then a, will
open the user account control (Admin) prompt, presuming you have admin
rights on your machine you'll need to click yes to continue.

Copy the code here and paste it into the PowerShell window, Ctrl+v
will work in PowerShell, press enter to execute the command.

```bash
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
```

You will be prompted to restart your machine after this, which you
should do.

> Check the link for a complete list of [windows keyboard shortcuts].

After restarting you can open the Ubuntu program from the start menu
and the second install (of WSL on your system) should happen. Wait for
this to complete then you will be prompted to create a user and a
password for the account. You will need to remember the password
created for the user as you will be prompted for it to use `sudo`
privileges.

## update, upgrade and autoremove

At the time of writing this, the version I have linked of Ubuntu is
18.04.1

The linked app will install the latest stable Ubuntu release on
Windows.

You can check what version of Ubuntu you have installed with:

```bash
lsb_release -a
```

![lsb_release image](./lsb_release.png)

If you want to use a specific LTS version of Ubuntu you can get them
from the Windows Store, here:

- [Ubuntu 16.04 LTS]
- [Ubuntu 18.04 LTS]

Now we're going to go ahead an update and upgrade all the things, the
three commands here will update and upgrade all the pre-installed
software that comes with the Ubuntu install.

The code below is three commands joined together with `&&`. The `-y`
flag is to auto accept the changes that are going to be preformed with
the upgrades. Auto remove will remove unused packages left behind from
upgrades.

Copy the below commands into your Ubuntu terminal, and run the
command:

```bash
sudo apt update && sudo apt -y upgrade && sudo apt autoremove
```

> To go from 16.04 to 18.04 try `do-release-upgrade` in the terminal.

Now that the base has been installed and updated we need to install
the [build-essential] package in order to compile and build other
packages, the following packages we're going to install will all need
it.

```bash
sudo apt install -y build-essential
```

From her on in I'd suggest using two bash windows, one with sudo
enabled the other with standard permissions.

> i.e. open a terminal and don't enter `sudo` in there, instead use
> the terminal that has been granted that permission.

The reason for this is that I have found if you install node as sudo
then each time you want to run an `npm install` command you will need
to grant sudo permissions and it can all get a bit tedious. And you
really shouldn't be installing npm packages with sudo permissions.

## Install Node (with `n`)

Let's get our run-time on! If you use Node.js you will eventually have
situations where you need to be able to switch Node versions, for this
you may have heard to nvm ([Node Version Manager]) which by the way
you can still use in WSL.

The reason for me opting for n over nvm is that in the past I
experienced slow bash startup times whilst using nvm. Take a look at
this [WSL GitHub issue detailing it] and the specific comment for the
[pros of using n].

Ok let's install n, with [n-install], the command doesn't start with
sudo so use it in the bash window you have with no sudo privileges.🧐

```bash
curl -L https://git.io/n-install | bash
```

This will install the latest version of Node for us, follow the prompt
on the terminal screen to reload bash:

```bash
# mine looks like this
. /home/scott/.bashrc
```

Now check the versions of Node and npm we have installed with
`node -v && npm -v` in the terminal.

## Install Visual Studio Code

Install VSCode? What? This post is to set up WSL? Ok, so we're going
to presume that this is going from nothing to being able to web dev,
so we're going to need a text editor, and there's nothing out there at
the moment that comes close to VSCode, if you already have a text
editor installed then skip to the next part.

Install the Windows version of VSCode from the [Download section] once
installed we can enable WSL in the settings, the quickest way to do
this is to open the integrated terminal in VSCode with the shortcut
keys Ctrl+' 👈 that's and apostrophe. You will be prompted to select
your default terminal, select WSL Bash.

![](./vscode-wsl-config.gif)

## Install Windows Git

There's a bit of stumbling block getting [Git support for VSCode],
it's well documented in the various issues mentioned in the linked
issue.

There are workarounds as well with things like [WSLGit] which has it's
own set of issues, this all stems from users (me included) not wanting
to have to install another binary for Git.

I have tried several variants when it comes to using Git with VSCode
and the path of least resistance was biting the bullet and installing
that additional binary, there's an overhead with having to maintain
and configure SSH keys for both Windows and WSL Git but it's a one
time setup.

Until the VSCode team incorporate [WSLGit] into VSCode I think this is
the best option.

Install from [git-scm.com] the link will start downloading the install
binary you can then open it and go through the install, you can keep
clicking next through the install, I have selected a few options that
I would like enabled.

![windows git setup](./install-git.gif)

For now, that is all we need to do, when it comes to authenticating
with with GitHub using SSH we will use the Git Bash command line to
configure the Windows side of things.

## Install a Terminal (Hyper)

Now we have bash on Windows it's time to install a nice Terminal app,
because, let's face it, the standard one is a bit basic.

Enter [Hyper] an electron based terminal app that is super themeable
and configurable.

Download and install hyper for Windows, this will be the bare bones
version, it'll look something like this:

![basic hyper](./basic_hyper.png)

You may notice that, this is the Windows Command prompt too, don't
worry, we're going to configure that right now.

Open up the `.hyper.js` file located in the root of your user folder,
or from Hyper itself use the sortcut key Ctrl+, to pop open the
settings.

If the settings file (`.hyper.js`) opens in Notepad then you can set
the default to be VSCode. In File Explorer (Use Windows key+e to open
it) navigate to the file, it'll be in your User folder, right click
the file and select Properties, then Change for 'Opens with:' and
select VSCode from the list.

![basic hyper](./default-file-type.gif)

Now we can set WSL as the shell path in Hyper, open the `.hyper.js`
settings file and search (Ctrl+f) for bash, we want to add the path to
the WSL shell into the `shell` property defined in the file.

```js
// amend shell path
// WSL Bash
shell: 'C:\\Windows\\System32\\bash.exe',
```

We can also change the appearance of Hyper from here by specifying
font size and font family and also predefined themes, let's quickly
add in the `hyper-adventure-time` theme into the plugins section.

Open another Hyper tab with Ctrl+Shift+t, this will show the bash
terminal for WSL now.

![basic hyper](./hyper-config.gif)

Quick orientation with the Hyper terminal keyboard shortcuts:

- New tab = Ctrl+Shift+t
- Close current tab = Ctrl+Shift+w
- Cycle through tabs right = Ctrl+Shift+right arrow
- Cycle through tabs left = Ctrl+Shift+left arrow

Now I'm going to configure some additional properties for Hyper, and
change the theme to something a bit more subtle.

I purchased Dank Mono, if you want a similar font as OSS check out
[FiraCode].

Here's what I changed:

```js
module.exports = {
  config: {
    fontSize: 18,
    fontFamily: '"Dank Mono",...',
    cursorShape: 'BEAM',
    cursorBlink: true,
    copyOnSelect: true,
    plugins: ['hyper-altair']
  }
}
```

![final hyper config](./hyper-final-config.gif)

## Install Fish Shell!

Ok, time to install the Fish Shell! This is a completely optional
step, I like to use fish for the nice intellisense you get when
navigating file structures, there are also some neat themes you can
get with Oh My Fish

```bash
sudo apt -y install fish
```

![install fish](./install-fish.gif)

### Install Oh My Fish

Now we can install Oh My Fish (OMF) and get a nice terminal theme
going on too, remember we talked about running commands with the
correct permissions? Well this is one of those occasions, open a new
tab first then paste in the following:

```bash
curl -L https://get.oh-my.fish | fish
```

![install fish](./install-omf.gif)

#### Fish themes with OMF

After installing OMF you can pick a theme, here you may notice that
the text doesn't fit in the screen on Hyper, a quick way to reset it
is to maximise the window then back again, I did this with the Windows
key+arrow up to maximise the Windows key+arrow down to restore it.

After installing omf I chose the theme agnoster, installed with
`omf install agnoster` you can list out what is available and what you
have already installed by selecting `omf theme` let's change it once
more to the `one` theme, adjust the size of the window first as things
are getting a bit cramped.

![omf one](./omf-install-one.gif)

Have a play around there's loads there, I prefer the one theme because
you can see what version of node you're running on, over on the far
right. Here you can also see the intellisense for fish where it shows
agnoster as a previous selection, if I wanted to select agnoster I
could tab to complete the rest of the command.

## Configure

### Permissions

### Use SSH with GitHub

## Create React App

## Change WSL version

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

<!-- LINKS -->

[the microsoft store]:
  https://www.microsoft.com/en-gb/p/ubuntu/9nblggh4msv6?activetab=pivot:overviewtab
[ubuntu 16.04 lts]:
  https://www.microsoft.com/en-gb/p/ubuntu-1604-lts/9pjn388hp8c9?activetab=pivot:overviewtab
[ubuntu 18.04 lts]:
  https://www.microsoft.com/en-gb/p/ubuntu-1804-lts/9n9tngvndl3q?activetab=pivot:overviewtab
[my guide from the start of the year]:
  https://blog.scottspence.me/wsl-setup/
[official guidance]:
  https://docs.microsoft.com/en-us/windows/wsl/install-win10
[windows keyboard shortcuts]:
  https://support.microsoft.com/en-gb/help/12445/windows-keyboard-shortcuts
[build-essential]: https://packages.ubuntu.com/bionic/build-essential
[node version manager]: https://github.com/creationix/nvm
[wsl github issue detailing it]:
  https://github.com/Microsoft/WSL/issues/776
[pros of using n]:
  https://github.com/Microsoft/WSL/issues/776#issuecomment-266112578
[n-install]: https://github.com/mklement0/n-install
[hyper]: http://hyper.is
[firacode]: https://github.com/tonsky/FiraCode
[git support for vscode]:
  https://github.com/Microsoft/vscode/issues/9502
[wslgit]: https://github.com/andy-5/wslgit
[git-scm.com]: https://git-scm.com/download/win
