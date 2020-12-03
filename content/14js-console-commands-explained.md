---
title: 11 JavaScript Console Commands Explained
---

# These are 11 useful JavaScript `console` commands to know about.

## 1. `console.log()`

The first and most common command is the console.log() command. It takes in a message and prints out the result to the console. It can also print JavaScript objects, arrays - all data types in JavaScript. Additionally, it takes care of formatting the output of the result to make it easier to trace.

```javascript
console.log("Hello World"); // Hello World
console.log({
  name: "Sam Simon",
  age: 43,
});
console.log(["Apple", "Banana", "Orange"]);
```

![console.log objects](https://i.ibb.co/NZJHBk3/console-logobj.png)

## 2. `console.error()`

The console.log() command is used by developers for most of the things they do - including logging errors to the console. But do you know there is a special console command for that ? It is the `console.error()` command. It is very similar to the console.log() command except it wraps what you log in a red error box.

```javascript
console.error("Something is wrong");
```

![console.error example](https://i.ibb.co/YfnPcZQ/consoleerror.png)

## 3. `console.info()`

This console command is especial useful to output information to the console. Rather than using console.log(), you will use console.info() to make the information stand out from other console commands.

```javascript
console.info("You are awesome");
```

![console info example](https://i.ibb.co/rsTWxbw/consoleinfo.png)

## 4. `console.table()`

When dealing with arrays, you usually like to represent it in an easy to understand structure. The console.table() commands handles that for you.

```javascript
console.table(["orange", "apple", "grape"]);
```

![console.table() example](https://i.ibb.co/yB5vbL3/consoletable.png)

## 5. `console.assert()`

This console command writes an error message to the console if an evaluates condition is false.

```javascript
console.assert(2 > 3, "It cannot be");
```

![console.assert example](https://i.ibb.co/2sZ49sB/consoleassert.png)

## 6. `console.clear()`

This command clears the console for you.

```javascript
console.clear(); //clears the console
```

## 7. & 8. `console.group()` and `console.groupEnd()`

These two console commands are useful to group stuff together in the console.

The console.group() is used to start a group. The group will continue until it encounters a console.groupEnd().

![console group adn groupEnd exampls](https://i.ibb.co/wLpcTqX/consolegroups.png)

## 9. `console.warn()`

Logging warnings in the console should be easy! Thats why the console.warn command exists

```javascript
console.warn("Some warning");
```

![console warn example](https://i.ibb.co/4sSpPFV/consolewarn.png)

## 10. & 11. `console.time()` and `console.timeEnd()`

There will be times when you will ned to measrue the time taken for an operation to complete. For this situations, you can make use of teh console.time() and console.timeEnd() functions.
You use the console.time() to start a timer and console.timeEnd() to stop the timer.

```javascript
console.time();

for (let i = 0; i < 4; i++) {
  console.log("number " + i);
}

console.timeEnd(); // prints time taken since the timer started
```

![console.times example](https://i.ibb.co/JHrvCHF/consoletime.png)

You have reached the end. If you enjoyed this post, please share.
I encourage you to try ou these console commands to understand them best.
Thanks XD
