---
path: '/get-graphcms-data-into-gatsby'
date: '2018-11-25'
title: 'Get your GraphCMS data into Gatsby'
tags:
  [
    'information',
    'learning',
    'guide',
    'gatsby',
    'getting started',
    'graphql',
    'graphcms',
  ]
published: false
---

Let's set up Gatsby to pull data from GraphCMS.

This will be a walk-through of setting up some basic data on the
headless CMS, GraphCMS and then querying that data in Gatsby.

## 1. Set up GraphCMS

Set yourself up with a GraphCMS account at
https://app.graphcms.com/signup and select the developer plan.

## 2. Define Data

Create a new project and add in some data to query.

Select the **Create new project** option, call it what you like, in
this example it's going to be a list of projects, so I'm calling it
_Project List_.

In the side bar select the Schema and create a model, in this case
**Project**. In the ptoject model we're going to have a Title and a
Description.

Select the fields from the tray on the right by clicking the
**FIELDS** tab and dragging and dropping them into the **Project**
model we created.

## 3. Configure the GraphCMS public API

In the GraphCMS settings set the **Public API Permissions** to
**READ** scroll down to **Endpoints** and copy the URL for use in
configuring Gatsby.

That's it for the CMS configuration, now to pull that data into our
Gatsby frontend!

## 4. Configure Gatsby

In you Gatsby project install `gatsby-source-graphql` and configure it
in `gatsby-config.js` the configuration should looks something like:

```js
{
  resolve: 'gatsby-source-graphql',
  options: {
    typeName: 'GRAPHCMS',
    fieldName: 'graphCmsData',
    url: 'https://api-euwest.graphcms.com/v1/projectid/master',
  }
},
```

## 5. Query the data in Gatsby GraphiQL

Now that the endpoint is set up we will be able to query the data with
Gatsby's GraphiQL UI, we can shape the query we want to use to display
the data here.

## 6. Display the Data

Use the `graphql` gatsby export to query the data from the GraphCMS
endpoint.

```js
import { graphql, Link } from 'gatsby'
```

At the very bottom define the query:

```js
export const query = graphql`
  {
    graphCmsData {
      ...
    }
  }
`
```

You will then
