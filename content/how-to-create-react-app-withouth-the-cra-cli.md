---
title: How to create a react app without using Create-React-App CLI
---

In this post i am going to show you how to create a react app without Create-React-App CLI.

First of all, you need to creata a folder to contain your project.
```shell
mkdir my-react-app
```
Then you will have to enter that folder and initialize a new node project.
```shell
npm init -y #skip the questions
```
After creating the project, you will need to install _parcel_, _react_ and _react-dom_ dependencies.
```shell
npm install parcel-bundler react react-dom
```
This will install parcel (which is a simpler alternative to webpack) along with react and react-dom.

Now that you have the dependencies installed, create an HTML file which will serve as your template.
Let's call it _index.html_
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>HTML</title>
  
  <!-- HTML -->
  

  <!-- Custom Styles -->
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <div id="root">
    
  </div>
  <script src="main.js"></script>
</body>
</html>
```
Now we need to create our _main.js_ file.
Add the following code in the main.js file.
```javascript
// import dependencies

import React from "react"
import ReactDOM from "react-dom"

// A simple react component
const Hello = () => {
	return (
		<React.Fragment>
		 <h1> Hello World </h1>
		</React.Fragment>
	)
}

ReactDOM.render(<Hello />, document.getElementById("root")) // render element on div with ID of 'root'
```
Now we have a basic react component that shows _Hello World_ to the DOM.
We need to compile it to actually see the result.
You need to run
```shell
parcel index.html #or whatever name you gave to your html file
```
Parcel will take care of the rest, that is : compiling your JSX component to html and bundling it. It will then startup a local server you can visit to view your app. It will automatically reload when any change is made.
This is the end. Now you can create a react app withiut the default CLI. 
You can run the below command to actually build your react app for production
```shell
parcel build index.html
```
Note that you can write your react components in separate files just like you will do with create-react-app project.
