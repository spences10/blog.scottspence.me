---
title: Git and GitHub
layout: post
---

I know why Linus called it that!

If you're reading this there's a good chance you know at least the basics of Git but if like me and you are the only person making changes to your repos then there's a good chance that you just use `git push origin master` to move your changes from your local machine to GitHub, this is not best practice.

What if it's not your repository you want to make changes to? You'll need to create a pull request, where you make a copy (fork) of the repo, make the changes to your copy (fork) then request that the owner of the original repo pulls your changes into their repo.

As an example I'm going to document my change to the [awesome-twitter-bots](https://github.com/spences10/awesome-twitter-bots) repo 

## Step 1

I will need to fork the repository on GitHub so I can make my changes.

![image of fork repo]()

Then clone my forked repository to where I'm all going to make the changes:

```
$ git clone https://github.com/spences10/awesome-twitter-bots
```

Connect the fork to the Original Repository:

```
$ git remote add upstream https://github.com/amandeepmittal/awesome-twitter-bots
```

## Step 2:

Use `git status` to check what branch you are currently on.

Make a (my) branch:

I'm adding the [Twitter bot](https://spences10.github.io/2017/01/04/twitter-mctwitbot.html) I made so I'm going to give my branch the same name as my repo

```
$ git branch spences10-twitter-bot
```

Now change to that branch with:

```
$ git checkout spences10-twitter-bot 
```

It should say you have switched to the branch but you can check with `git status` 

Add your files ***note*** if you are adding a folder (like I am) just using `git add . ` will add the folder as a file (which I learned from bitter experience), what you will need to do is:

```
$ git add spences10-twitter-bot/\\*
```

This will add the folder and all its contents, I would post my terminal output of shame here but it would take up the whole screen. So now I have added the folder I need to commit to my local repo with:

```
$ git commit -m 'initial commit'
```

I get the terminal output confirming my files are added, then I `git push` to my branch I checked out earlier:

```
$ git push origin spences10-twitter-bot
```

A quick check of the repo on GitHub confirms that the files are there I'm now ready to add a contributor [@amandeepmittal](https://github.com/amandeepmittal) via the [/settings/collaboration](https://github.com/spences10/awesome-twitter-bots/settings/collaboration) section of my repo. I can then copy the invite link and send to Aman, I'm sure he'll be thrilled to see it!

## Step 3

Visit Aman's repo and GitHub will have detected that I have pushed a branch to a fork, from here I can click on the 'Compare & pull request' button. 

In the 'Open a pull request' page I'll need to select the my fork and then my branch, so `spences10\awesome-twitter-bots` and my branch which is `spences10-twitter-bot` click the 'Create pull request' button.

The rest is up to the repository owner (Aman) now

### Resource

A great resource for me was [Git-It](http://jlord.us/git-it/index.html) 

### 2fa

Using two factor authentication? 

`git remote set-url origin https://yourgithubuser:your-token@github.com/yourgithubuser/yourrepo.git`

