---
title: Twitter McTwitBot
layout: post
---

I must say this was great to do and a nice little introduction to [node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/).

I got to doing this from finding it on [GitHub](https://github.com) I think I was looking for the Twitter icon in bootstrap whilst working on my [Random Quote Generator](http://codepen.io/spences10/full/dOaYbP/) I stumbled across the [twitter-bot-bootstrap](https://github.com/mobeets/twitter-bot-bootstrap) (as you do) so after stalling with my progress on the FreeCodeCamp(:fire:) zipline for a Wikipedia viewer I decided to give the Twitter bot a try and managed to create it and add it to [Heroku](https://heroku.com) :tada:

This app didn't work as well as expected though :frowning:, so I then decided to take a look at [@amanhimself](https://twitter.com/amanhimself)'s Twitter bot he had created for the [#100DaysOfCode](https://medium.freecodecamp.com/start-2017-with-the-100daysofcode-improved-and-updated-18ce604b237b) challenge, which I just happen to be taking part in.

So with his great documentation [here](https://hackernoon.com/create-a-simple-twitter-bot-with-node-js-5b14eb006c08) and [here](https://community.risingstack.com/how-to-make-a-twitter-bot-with-node-js/) I managed to cobble together my own Twitter-bot which I use on my [@ScottDevTweets](https://twitter.com/ScottDevTweets) Twitter account 

> If you'r wondering about the post name [check here](https://en.wikipedia.org/wiki/RRS_Sir_David_Attenborough#Boaty_McBoatface_Naming_Controversy).

## Technologies used

Preamble out of the way, now I can walk through what was used.

### Cloud 9

I love this development environment, I soon became a fan of [c9](https://c9.io/?redirect=0) when trying to install Ruby on my windows machine and then again after installing Node.js on my computer for the first time.

### Node.js

I already had this installed on my c9 environment so I just had to ```npm install --save twit``` then I was up and  running

### Heroku

I didn't really get what Heroku was until I started this project but once I'd read the guides it was quite straightforward and the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) was already installed on c9 i checked with ```heroku --version``` before attempting to install it.

### GitHub 

You can deploy straight from your c9 environment to Heroku and there are loads of other integration tools you can use which I haven't had time to look into yet. It's good practice to have your code on a repository somewhere and GitHub is widely used.

### Twitter 

You will need to set up a Twitter application from the [Twitter dev portal](https://apps.twitter.com/app/new)

---

All of the information above is in addition to the guides given by [Aman](https://github.com/amandeepmittal) the stuff I'm going to go through now my experience with deploying to Heroku, you may want to host the app somewhere different.

## My Approach

Use ```node bot.js``` to test locally, in [@amanhimself](https://twitter.com/amanhimself)'s example it will tweet and favourite straight away then go on a timer.

[image of output]

Deploy to Heroku ```git push heroku master```

> I know this isn't standard practice and I am in the process of understanding how to branch and use Pull Requests so bear with me :smile:

The first gotcha for me was the Heroku ```Procfile``` I couldn't understand why it kept timing out, this was because it was trying to run the default ```web``` process instead of the ```worker``` process which is whats needed for the bot.

After getting the bare bones set up on part 1 I then got to playing around with the timings and the query strings used by the bot, this is where things started to go a bit [off-piste](https://en.oxforddictionaries.com/definition/us/off-piste) 

Images of bash output 





