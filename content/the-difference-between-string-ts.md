---
title: The difference between String and string in Typescript
date: 09/02/2021
tags: [TypeScript, JavaScript, Learning]
---

TypeScript is a good advancement in the javascript ecosystem. 
Today we are going to talk about the difference between the `String` and `string` types in Typescript.

```shell
Type error: Type 'String' is not assignable to type 'string'.
```
Let's take a look at the above error.

To begin, we know that whether we use String or string, we would want to refer to the same thing. But both of those are a little different.

*String* is a class in JavaScript to construct strings. It provides a way of creating strings using that constructor. What we get using *String* is an object.
If you check if it's a string or not, you will get *
`object`.
```javascript
let name = new String('Mike');
console.log(typeof name); // object
```
*string* on the other hand does not exist in JavaScript. Rather it is used in Typescript to tell it it is an actual string.

Therefore, when you are creating a function, type or interface in Typescript, it is recommended to use lowercase `string` to tell Typescript you want to get an actual string. If you use `String`, then you will get an object (which is not what you would want).

Thank you for reading.
