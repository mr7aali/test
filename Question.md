1. What is TypeScript, and how is it different from JavaScript?
TypeScript is an open-source language to build large-scale web apps, whereas JavaScript is a server-side programming language that helps to develop interactive web pages. TypeScript is referred to as an Object-oriented programming language; on the other hand, JavaScript is a prototype-based language 

2. Can you explain the difference between "interface" and "type" in TypeScript?
TypeScript usage in the modern software development industry is expanding rapidly with the emergence of the static type-checking concept in JavaScript.

So, the chances are high that you have heard of both Types and Interfaces in TypeScript.

However, it’s possible for novice developers to make mistakes when working with Types and Interfaces as they aren’t familiar with the best practices.

This article will discuss the difference between interfaces and types in TypeScript, along with examples and appropriate use cases to help you get the most out of them.


3. Can you give an example of how to use generics in TypeScript?


 In this section, we will learn about generics in TypeScript.

When writing programs, one of the most important aspects is to build reusable components. This ensures that the program is flexible as well as scalable in the long-term.

Generics offer a way to create reusable components. Generics provide a way to make components work with any data type and not restrict to one data type. So, components can be called or used with a variety of data types.


4. What is the difference between an "unknown" and "any" type in TypeScript?

 To be honest, I had difficulties understanding unknown when I had been learning it. How does it differ from any, since both types accept any value?

Here's the rule that had helped me understand the difference:

You can assign anything to unknown type but you have to do a type check or type assertion to operate on unknown
You can assign anything to any type and you can perform any operation on any
The example above has demonstrated exactly the similarity and difference between unknown and any.


5. Can you give an example of how to use enums in TypeScript?

Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript. Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.


6. What is the "as" keyword used for in TypeScript?

The as keyword can be used in those cases where the type of the object is known though unknown to the compiler to perform a type assertion in typescript using the as keyword to associate the required type to the object or variable.

7. Can you explain how to use "type guards" with "in" and "typeof" operators in TypeScript?

A type guard is a TypeScript technique used to get information about the type of a variable, usually within a conditional block. Type guards are regular functions that return a boolean, taking a type and telling TypeScript if it can be narrowed down to something more specific. Type guards have the unique property of assuring that the value tested is of a set type depending on the returned boolean.