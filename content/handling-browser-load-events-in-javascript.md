---
title: Handling Browser Load Events in JavaScript
date: November 28 2020
---

The browser is a very interesting playground for web developers to play around. Today i am going to talk about how you should correctly use the browser load events to ensure that all the _markup_, _stylesheet_ and _javascript_ you write is loaded correctly and any data to be fetched is done correctly.

Before we go into that. I want to mention that it is very essential for a web developer (mostly frontend developers) to understand how the browser parses the code they have written. For that, i have linked a very good articles which should supossedly make you understand that into detail.

HTML and CSS both have object models. That of HTML is called the DOM (`Document Object Model`) and CSS have CSSOM (_CSS Object Model_). The DOM which is our focus is a tree-like structure represnting the _nodes/elements_. Here, all the html elements are parsed and rendered in order. This holds for stylesheets and javascript code you will add. But sometimes you will want your javascript code to be run while your HTML and CSS are being rendered in order to include your animations, fetched data and manymore.

Let's get to it ;)

When the browser finished to parse the HTML and CSS code. An event is triggered. You might have come accross this event which is _DOMContentLoaded_. You will usually use it as such :

```javascript
window.addEventListener("DOMContentLoaded", doSomethingCool());
```

This event is especially useful when you want to do something after the page structure and its styles have been loaded.

> Note that event though the DOMContentLoaded event may be triggered, other stuff like images, audio or even video might have not yet loaded.

Another event triggered by the browser is the load event. You will use it this way.

```javascript
window.addEventListener("load", doAnotherCoolThing());
```

Unlike _DOMContentLoaded_, this event will be triggered when all markup, stylesheet, javascript and all static assets like images and audio have been loaded.

Now you know the two major load events you can make use of in the browser.
_Now you may ask yourself_ : What if i placed my javascript before the body of my page ? OR it comes before every other thing ?

For this, you can use the _`defer`_ attribute which will make your javascript load after the markup and the stylesheet.

```html
<script src="https://example.com/some-javascript.js" defer></script>
```

In case you ever need it to be loaded in an _async_ manner, you can use the _async_ attribute on your javascript tag.

```html
<script src="https://example.com/some-javascript.js" async></script>
```

This post was meant to be brief and i hope it was XD.

Read this post about [how the browser renders](https://dev.to/jstarmx/how-the-browser-renders-a-web-page-1ahc) a page to understand everything more into details
