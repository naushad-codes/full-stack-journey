DAY 6 – JAVASCRIPT SCOPE, LEXICAL SCOPE, CLOSURES (DEEP) AND THIS KEYWORD
Date: March 20, 2026

Goal of Today
Understand how JavaScript manages scope, how closures actually work internally, and how the `this` keyword behaves in different situations.

---

TOPICS COVERED

Scope
Types of Scope
Lexical Scope
Closures (deep understanding)
this keyword

---

SCOPE

Definition

Scope defines where variables and functions are accessible in the code.

It determines the visibility and lifetime of variables.

---

TYPES OF SCOPE

Global Scope
Variables declared outside any function
Accessible everywhere

Function Scope
Variables declared inside a function
Accessible only within that function

Block Scope
Variables declared using let and const inside {}
Accessible only within that block

---

EXAMPLES

Global Scope

var a = 10

function test() {
console.log(a)
}

test()

Output → 10

---

Function Scope

function test() {
var a = 20
console.log(a)
}

test()

console.log(a)

Output → Error

---

Block Scope

if (true) {
let x = 5
const y = 10
}

console.log(x)
console.log(y)

Output → Error

---

LEXICAL SCOPE

Definition

Lexical scope means that scope is determined by the position of code during writing time (not runtime).

A function remembers the scope in which it was created.

---

EXAMPLE

function outer() {
let a = 10

function inner() {
console.log(a)
}

inner()
}

outer()

Output → 10

Explanation

inner function accesses variable a from outer because of lexical scope.

---

IMPORTANT RULE

Inner functions can access outer variables
Outer functions cannot access inner variables

---

CLOSURES (DEEP)

Definition

A closure is formed when a function retains access to variables from its lexical scope even after the outer function has finished execution.

---

HOW CLOSURE WORKS INTERNALLY

When a function is returned
Its execution context is removed from call stack

But

Its variables are not destroyed if they are still being referenced

They are stored in memory (closure scope)

---

EXAMPLE

function counter() {
let count = 0

return function() {
count++
console.log(count)
}
}

const increment = counter()

increment()
increment()
increment()

Output

1
2
3

---

WHY THIS WORKS

Even though counter() finished execution
The returned function still has access to count

This is closure

---

REAL WORLD USE CASES OF CLOSURES

Data hiding
Private variables
Function factories
Event handlers
Callbacks

---

THIS KEYWORD

Definition

this refers to the object that is currently executing the function.

Its value depends on how the function is called.

---

GLOBAL CONTEXT

console.log(this)

In browser → window object

---

INSIDE OBJECT METHOD

const obj = {
name: "Naushad",
greet: function() {
console.log(this.name)
}
}

obj.greet()

Output → Naushad

Here this refers to obj

---

NORMAL FUNCTION

function test() {
console.log(this)
}

test()

In strict mode → undefined
Otherwise → global object

---

ARROW FUNCTION

Arrow functions do not have their own this

They inherit this from surrounding scope

---

EXAMPLE

const obj = {
name: "Naushad",
greet: () => {
console.log(this.name)
}
}

obj.greet()

Output → undefined

Because arrow function uses outer this

---

KEY DIFFERENCE

Normal function → this depends on how it is called

Arrow function → this is fixed from where it is created

---

KEY INSIGHTS FROM TODAY

Scope controls accessibility of variables

Lexical scope is based on code structure

Closures retain variables even after function execution

this keyword changes based on context

Arrow functions do not bind their own this

---

REFINING MY UNDERSTANDING

Closures are not magic, they are a result of lexical scope + memory retention

Scope is decided at write time, not runtime

this is not fixed, it depends on call-site

Arrow functions simplify this behavior but can cause confusion

---

SELF-TEST QUESTIONS

What is scope?

Difference between global, function, and block scope?

What is lexical scope?

What is closure and why does it happen?

Difference between normal function and arrow function this?

---

NEXT TOPICS (DAY 7)

Event loop (deep dive)
Microtasks vs macrotasks
Promises
Async/await
