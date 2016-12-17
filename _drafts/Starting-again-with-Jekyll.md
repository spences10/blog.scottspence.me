---
title: Starting again with Jekyll
layout: post
---
<img class="floated" src="/images/jekyll-logo.png">

Since setting up this blog I haven't really bothered with Jekyll any more than just forking Barry Clarke's [repo](https://github.com/barryclark/jekyll-now) of Jekyll Now and adding these posts as and when the feeling takes me, I decided that I wanted my blog to look a bit more like Barry's [blog](http://www.barryclark.co/) with the fancy text flow around the images.

<!--more-->

So I got to checking out Barry's blog and his Jekyll Now templates and tried to make sense of the two so I could make my ow, based off of the ideas I got from Barry's blog.

## Cloud 9

I tried to set up Ruby on my Windows machine and it didn't go well, then I tried to set it up on my Raspberry Pi, that didn't go well either. Then I recalled that I could have any number of different environments with [Cloud9](https://c9.io/?redirect=0) so I set up a Ruby machine on there and installed Jekyll, no problem

### Setup 

It wasn't as simple as 

https://www.jflh.ca/2016-01-18-running-jekyll-on-cloud9

## Confusing

Jekyll uses Liquid templating language which, for someone like me was a bit confusing. With me just getting used to the layout of a 'standard' web page I was then presented with liquid 'tags' something I'm still not completely clear on what some of them do.

_layouts and _includes meta.html

WTF? I had no idea, I'm still not totally clear on the why, I add a default.html then Jekyll complains that there's a missing meta.html file, I create a _includes folder and add an empty meta.html

## CSS
For some reason I thought that a Jekyll page didn't use CSS, well the reason was there was nothing like that in the 'vanilla' Jekyll site when you run the ```jekyll new myblog``` you get very little in the was of bells and whistles
<img class="floated" src="/images/base-jekyll-project.PNG">

Running the following from the terminal on my Ruby development box

```
~ $ gem install jekyll bundler
~ $ jekyll new myblog
~ $ cd myblog
~/myblog $ bundle exec jekyll serve
# => Now browse to http://localhost:4000
```

You get this:
![BaseJekyllSite](/images/base-jekyll-site.PNG)



## Layouts

## Includes

## Jekyllrb.com

## Liquid templates