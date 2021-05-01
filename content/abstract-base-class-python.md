---
title: Abstract Base Class in Python
tags: [Python, Advanced]
date: 01/05/2021
og: https://og-image-delta-one.vercel.app/Abstract%20Base%20Class%20-%20Python.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fraw.githubusercontent.com%2FJosiasAurel%2FJosiasAurel%2Fmaster%2FScreenshot_2021-05-01-14-35-58-0369650772-removebg-preview.png
---

# Abstract Base Class - Python

An abstract base class is a class defined as a blueprint for other classes.
Abstract base classes are a powerful feature in python since they help you define a blueprint for other classes that may have something in common.

## Brief 
Fruits are a general term for something natural that we can eat. It is usually sweet, colorful and has a shape. Now, that is a general overview of what a fruit is. We might have a specific kind of fruit like a mango. Let's say we have a normal mango and a wild mango. The normal one is usually sweeter than the wild mango. But both are mangoes, and mango is a fruit. 
There cannot exist a fruit which has no color or shape. 

You can think of Fruit as a base class or *metaclass* for the mango class. Under the mango class, we can have two instaces of it, a wild and a normal mango. It should have a color and a shape or it just does not make any sense.

With abstract base classes, it similar to the fruits case. An abstract base class is defined on which other classes will be based on. Those other classes cannot exist if they don't have the attributes and or methods of the abstract base class.

## Why Abstract

An _abstract base class_ is said *"Abstract"* because it is non existent, it is just an ideal way for some other class to exist but it cannot exist on its own.

## The Code
Python provides an easy way of creating an abstract base class through a built-in module called _abc_ (Stands for Abstract Base Class). 

We will be based on the fruits example to create our class.
Throughout this tutorial, i will make use of the abbreviation *ABC* to represent _Abstract Base Class_

Here is a simple ABC.
```python
from abc import ABCMeta, abstractmethod


class Fruit(metaclass=ABCMeta):

    @abstractmethod
    def getshape(self):
        print(self.name)

    @abstractmethod
    def getcolor(self):
        return self.color

    @abstractmethod
    def gettaste(self):
        return self.taste


class Mango(Fruit):
    def __init__(self, taste="Sweet"):
        self.shape = "Oval"
        self.taste = taste
        self.color = "Orange"

    def getshape(self):
        return self.shape

    def getcolor(self):
        return self.color

    def gettaste(self):
        return self.taste


normal_mango = Mango()
wild_mango = Mango("Sour")
print(wild_mango.gettaste())
```
What happens in the code above is that we create a blueprint for a fruit class. We then create a method which all other classes will inherit from. Since we want the *getshape()* method to be inherited by all other classes, we add the *@abstractmethod* decorator on it.

We then create Mango class which is based on Fruit. Our fruit should have a shape, so we add it in the initializer. We then add the *getshape()* method so we can get the shape of the Mango. You can guess the remaining lines, we are just creating an instance of Mango and calling *getshape()* to get the shape.

Let us create another class which will be based on Fruit class.
This time, let us ignore the *gettaste()* method and see what happens.
Add the following code :

```python
class Orange(Fruit):
    def __init__(self):       
        self.color = "Orange"
        self.shape = "Spherical"

    def getshape(self):
        return self.shape

    def getcolor(self):
        return self.color


my_orange = Orange()
```

Now run the code. You notice we get an error telling us we cannot instantiate an orange unless we have implemented the _gettaste()_ method. 

Just like in our fruits example, our orange cannot exist unless we can get its taste. 

Modify the code to look like this
```python
class Orange(Fruit):
    def __init__(self):
        self.taste = "Sweet"
        self.color = "Orange"
        self.shape = "Spherical"

    def getshape(self):
        return self.shape

    def getcolor(self):
        return self.color

    def gettaste(self):
        return self.taste


my_orange = Orange()
```
If we run the above code, we don#t get an error again, that is because we can now get the taste of our fruit.

Your final code should look similar to this 

```python
from abc import ABCMeta, abstractmethod


class Fruit(metaclass=ABCMeta):

    @abstractmethod
    def getshape(self):
        print(self.name)

    @abstractmethod
    def getcolor(self):
        return self.color

    @abstractmethod
    def gettaste(self):
        return self.taste


class Mango(Fruit):
    def __init__(self, taste="Sweet"):
        self.shape = "Oval"
        self.taste = taste
        self.color = "Orange"

    def getshape(self):
        return self.shape

    def getcolor(self):
        return self.color

    def gettaste(self):
        return self.taste


normal_mango = Mango()
wild_mango = Mango("Sour")
print(wild_mango.gettaste())


class Orange(Fruit):
    def __init__(self):
        self.taste = "Sweet"
        self.color = "Orange"
        self.shape = "Spherical"

    def getshape(self):
        return self.shape

    def getcolor(self):
        return self.color

    def gettaste(self):
        return self.taste


my_orange = Orange()

```

We have probably just scratched the surface of ABC on python. I recommend you to go through Python documentation to learn more about them [here]()

I hope you enjoyed reading this post as much as i did writing it.

