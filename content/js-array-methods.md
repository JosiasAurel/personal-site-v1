---
title: JavaScript Array Methods
tags: [JavaScript, Web, Tips&Tricks]
date: 15/01/2021
---

In this post you are going to learn some very useful javascript array methods. Coupled with examples, at the end of this post you will be having a good understamding of some javascript array methods.

Before we start, let's understand what we mean by the term _array method_. It is simply a function that is attached to every array and permits to easily carry out some operations like filtering, summing, adding and removing elements from the array and many more.

Let's get into it!

## 1. Join()

The join function allows you to join elements of an array and form a single string, which is by default separated by a comma.
Example :

```js
let myArray = ["Hello", "World!"];
myArray.join(); // "Hello,World"
```

You notice in the output that a string is return containing the elements of the array, joined by a comma. The _.join()_ method also optionally takes a single argument which specifies by _what_ the elements of the array will be joined.

```js
let myArray = ["Hello", "World!"];
myArray.join(" "); // "Hello,World"
```

Here will passed a string containing a space. Therefore, the elements of the array are joined and separated by the space.

> It is worth noting that the separator you pass in the join method should be a string.

Try playing around with this passing different string arguments and see what happens.

## 2. pop() and push()

_pop()_ and _push()_ are methods that allow you to remove the last element and add an element at the end of an array, respectively. Let's get back to the array in our first example `["Hello", "World"]`.
If we execute the _.pop()_ method on this array, the last element (which in this case is "World") will be removed from the array. When the `.pop()` method is executed, it returns the value of the removed element. Let's try that !

```js
let myArray = ["Hello", "World!"];
myArray.pop(); // removes the last elements and returns it, in this case it it "World"
myArray; // the new array now only contains "Hello"
```

Now that we have seen how `.pop()` works, let's try `.push()`.
Contrary to `.pop()` which removes the last element of the array, `.push()` adds an element at the end of the array. It is going to be the element you will pass as argument to `.push()`.

```js
// assuming we are using the array we previously removed an element with .pop()
// it should  contain only a single element ["Hello"]
// We want to add "World" at the end of it.
myArray; // ["Hello"]
// 'pushing' an element at the end of the array
myArray.push("World");
myArray; // ["Hello", "World"]

// Hooray 🎉 we added an element at the end of our array.
```

`.push()` can take any value you wish to add to your array. It could be a number, string, another array, an object... Anything!

## 3. shift() and unshift()

The `.shift()` method is very similar to the `.pop()` method with the only difference that it removes the first element of the array instead of the last element.

```js
let favoriteFruits = ["Kiwi", "Orange", "Pineapple", "Mango"];
favoriteFruits.shift(); // removes and return the first element of the array.
console.log(favoriteFruits); // ["Orange", "Pineapple", "Mango"]
```

The `.unshift()` and `.push()` methods are also similar but `.unshift()` adds an element at the beginning of the array rather than at the end.

```js
let favoriteFruits = ["Orange", "Pineapple", "Mango"];
favoriteFruits.unshift("Apple");
console.log(favoriteFruits); // ["Apple", "Orange", "Pineapple", "Mango"]
```

## 4. forEach()

`.forEach()` in javascript provides an easier way to iterate through the elements of an array and perform an action on each of the elements. It takes a callback function to which each element of the array is passed through so you can perform whatever oepra
Example:

```js
let nums = [1, 2, 3, 4, 5];
let squaredNums = [];
nums.forEach((num) => {
  squaredNums.push(num * num);
});

console.log(squaredNums); // [1, 4, 9, 16, 25]
```

## 5. map()

The `.map()` method provides an easy way of transforming the content of an array.
Rethinking about the content of the previous example, rather than creating a new array, we modify the current array by finding their square root.

```js
let nums = [1, 2, 3, 4, 5];
nums.map((num) => num * num); // [1, 4, 9, 16, 25]
```

In the example above, we take each member of the array and return an array with the square root of each of the numbers in it.

> Note that when using map, the returned array does not affect the original array. It rather returns a new array containing the modified members.

## 6. filter()

Sometimes, you will want to throw away and sometimes preserve the content of an array. Rather than having to go through the pains of using a for loop, javascript arrays have the `.filter()` methid which allow you to filter an array and keep only the content you wish to keep.

```js
let randomNumbers = [4, 12, 2, 21, 7, 5, 98];
randomNumbers.filter((number) => {
  return number < 10;
}); // return [4, 2, 7, 5]
```

In this example, we have an array of numbers of different magnitude. Our goal is to filter the array and get only the number that is less that 10. The `.filter()` method takes a callback function which will take charge of the values to be returned. Usually the function will return a condition to be satisfied to obtained the filtered array. In the example, we pass an arrow function which checks if the element is less than 10 and then return all element less than 10. Therefore, it returns a new array which satifies the condition returned by the callback function.

## 7. reduce()

Let us say we want to add all the numbers in the array `[4, 12, 2, 21, 7, 5, 98]`. Usually you will iterate over the numbers and add them. This will result in alot of code. Fortunately, `.reduce()` abstracts all the code for this kind of usecase.
The `.reduce()` method takes 2 arguments ; an accumulator and a next value to take care of.

```js
let randomNumbers = [4, 12, 2, 21, 7, 5, 98];
randomNumbers.reduce((total, nextNum) => {
  total += nextNum;
  return total;
});
```

If you run the above code, it will return the sum of all the numbers in this array. One thing two note is; referencing the example above, the `.reduce()` method takes a callback function to which 2 values are passed : an _accumulator_ and a _next value_ to be processed. In this case we are taking the accumulated number and add the next one to it until we finish iterating through the array.
