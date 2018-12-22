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
purpose of this post.

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

- [Install WSL](#install-wsl)
- [Enable WSL on your machine](#enable-wsl-on-your-machine)
- [Install Node](#install-node)
- [Install a Terminal (Hyper)](#install-a-terminal-hyper)
- [Configure](#configure) <small>all the things</small>

## Install WSL

You can install Ubuntu from [the Microsoft store] which will be the
first half of the install the second will be when ypu open the app.

## Enable WSL on your machine

The [official guidance] covers it very well, but I'm going to add in
the shortcut keys here if you don't want to be clicking around with
the mouse.

Use Windows key+x, this is the same as right clicking the windows icon
on the desktop, this will open the quick link menu. From here you need
to select the Windows PowerShell (<u>A</u>dmin) option, you can do
this by pressing **a** on the keyboard. So Windows key+x then a, will
open the user account control (Admin) prompt, presuming you have admin
rights on your machine you'll need to click yes to continue.

Copy the code here and paste it into the PowerShell window.

```bash
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
```

You will be prompted to restart your machine after this which you
should do.

Check the link for a complete list of [windows keyboard shortcuts].

After restarting you can open the Ubuntu program from the start menu
and the second install (of WSL on your system) should happen. Wait for
this to complete then you will be prompted to create a user and a
password for the account. You will need to remember the password
created for the user as you will be prompted for it to use `sudo`
privileges.

## Install Node

## Install a Terminal (Hyper)

## Configure

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
[my guide from the start of the year]:
  https://blog.scottspence.me/wsl-setup/
[official guidance]:
  https://docs.microsoft.com/en-us/windows/wsl/install-win10
[windows keyboard shortcuts]:
  https://support.microsoft.com/en-gb/help/12445/windows-keyboard-shortcuts
