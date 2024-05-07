---
title: Creating your own HTML Element
date: 17/01/2021
tags: [HTML, JavaScript, Web]
---

Have you ever thought about creating your own HTMl element ? If you have ever used a frontend framework like React or Vue or even Angular, you might have been amazed by the fact that you could create literally any component and have reused it throughout your app. What will typically happen with your elements is that they get compiled down into some javascript which takes care of the DOM.
But what about actually creating an HTML element ? That is what we are going to learn in this post.

At the end of this tutorialy you will be able to create your own basic HTML element.
To get started, create a new folder to contain the code from this tutorial.
Open that folder and create three files named _index.html, style.css and main.js_.

We are going to start with the usual HTML boilerplate like below :

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Custom Element</title>
  </head>
  <body>
    <script src="main.js"></script>
  </body>
</html>
```

Now that we have our basic html code, let us get a name for our element. I will name it _hello-world_, a pretty simple name ;). Now add your element into your HTML code, between the body tags above the script tag. You can add any text between your element tags. Your final HTML should look as such.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Custom Element</title>
  </head>
  <body>
    <hello-world id="hello" ishidden> Hello World </hello-world>
    <script src="main.js"></script>
  </body>
</html>
```

We are done with the HTMl code. Time to write some javascript.
Create a class named `HelloWorld` which extends _HTMLElement_.

```js
// Creating my own custom html element

class HelloWorld extends HTMLElement {}
```

Now we need to _define_ our element. This is to make the browser aware that we are creating a new element that we are going to reuse.
After the class, add the following line of code.

```js
customElements.define("hello-world", HelloWorld);
```

What is this ?
The browser exposes a function called `customElements.define` which permits to define a new element that can be reused. It takes two arguments; the first being the element name (which should be the exact same as the one used in the HTML code) and a second argument which is the class of the element.

We create a class in order to have a custom element with our own properties and attributes. This permits us to as well add our own event listeners, functions and behaviours.

Now you have created your own custom html element.
It is good practice to add a `constructor` to your element class. You will also have to add a `super()` function in order to make sure you are inheriting all HTMlElement methods, attributes and properties.

Adding so, you will have a class looking as such.

```js
// Creating my own custom html element

class HelloWorld extends HTMLElement {
  constructor() {
    super();
  }
}
```

You can also define custom methods like below.

```js
// Creating my own custom html element

class HelloWorld extends HTMLElement {
  constructor() {
    super();
  }

  getId() {
    return this.id;
  }
}
```

Above, we created a method on the element named `getId()` which will return the id of the element.

You can select your custom element from javascript just like you will do with any other element using _document.querySelector()_ _document.querySelectorAll()_ _document.getElementById()_ etc. You can try adding an id attribute and selecting the element using a method of your choice and calling the `getId()` method on it.

Okay, we have created our own element using just html and javascript. Buy how can i access lifecycle hooks just like in React or Vue.
Using you defined class, you can as well have access to lifecycle methods, allowing you to execute some peice of code when for example, the component is connected to the DOM.
Below is an example.

```js
connectedCallback() {
        if (this.hasAttribute("ishidden")) {
            this.style.backgroundColor = "grey"
            this.style.pointerEvents = "none"
        }
    }
```

This method _connectedCallback_ will be executed when the element will be connected to the DOM, in other words, _mounted_. In the example, we are checking if the element has the `ishidden` attribute and we then change the background color and pointer event.
Your final javascript should look as below now.

```js
// Creating my own custom html element

class HelloWorld extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    if (this.hasAttribute("ishidden")) {
      this.style.backgroundColor = "grey";
      this.style.pointerEvents = "none";
    }
  }

  getId() {
    return this.id;
  }
}

customElements.define("hello-world", HelloWorld);
```

Now we have a basic element working.

> It is good to note that `connectedCallback()` is not the only hook. We also have the `disconnectedCallback()` and `attributeChangedCallback()`

What about styling ?
You can directly access the element using its name in CSS. In my CSS file, i added some basic styling to make it look a little good.

```css
hello-world {
  background-color: red;
  padding: 1em;
  border-radius: 5px;
  position: relative;
  top: 4em;
}
```

You have reached the end of this post. I hope you enjoyed it. If you did, make sure to give me a follow on twitter. I usually tweet about tech and experimentations i do as well as tips/advices.
