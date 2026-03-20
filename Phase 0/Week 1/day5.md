DAY 5 – JAVASCRIPT EXECUTION CONTEXT AND CALL STACK
Date: March 19, 2026

Goal of Today
Understand how JavaScript executes code internally using execution contexts, call stack, memory phases, hoisting, and introduction to closures.

---

TOPICS COVERED

Execution Context
Call Stack
Memory Creation Phase
Execution Phase
Hoisting
Closures (introduction)

---

EXECUTION CONTEXT

Definition

An execution context is the environment in which JavaScript code is executed.

It manages variables, functions, scope, and execution flow.

---

TYPES OF EXECUTION CONTEXT

Global Execution Context (GEC)
Created when the program starts
Only one global execution context exists

Function Execution Context (FEC)
Created whenever a function is called
Each function call creates a new execution context

---

WHAT AN EXECUTION CONTEXT CONTAINS

Global Object (window in browser)
this keyword
Variables and function declarations

---

CALL STACK

Definition

Call stack is a data structure that keeps track of execution contexts.

It follows LIFO (Last In First Out).

---

CALL STACK WORKING

When program starts
Global execution context is pushed to stack

When a function is called
New execution context is pushed

When function execution completes
Context is removed (popped)

---

EXAMPLE FLOW

function first() {
console.log("First")
}

function second() {
first()
console.log("Second")
}

second()

Execution order

Global → second → first → first ends → second ends

---

STACK OVERFLOW

Occurs when too many function calls are added without stopping.

Example

function infinite() {
infinite()
}

Result

Maximum call stack size exceeded

---

MEMORY CREATION PHASE

JavaScript runs code in two phases.

Phase 1 – Memory Creation Phase

In this phase

Variables are allocated memory
Functions are stored completely

Example

var a = 10
function test() {}

During memory phase

a → undefined
test → full function stored

---

EXECUTION PHASE

Phase 2 – Execution Phase

Code is executed line by line

Variables get actual values
Functions are executed when called

---

HOISTING

Definition

Hoisting is JavaScript behavior where variable and function declarations are moved to the top of their scope during memory creation phase.

---

EXAMPLE OF HOISTING

console.log(a)
var a = 10

Actual behavior

var a
console.log(a)
a = 10

Output

undefined

---

IMPORTANT NOTES ON HOISTING

var variables are hoisted and initialized with undefined

Function declarations are fully hoisted

let and const are hoisted but not initialized (temporal dead zone)

---

CLOSURES (INTRODUCTION)

Definition

A closure is a function that remembers variables from its outer scope even after the outer function has finished execution.

---

EXAMPLE

function outer() {
let count = 0

function inner() {
count++
console.log(count)
}

return inner
}

const fn = outer()
fn()
fn()

Output

1
2

Explanation

inner function remembers the variable count even after outer function has finished.

---

KEY INSIGHTS FROM TODAY

JavaScript executes code using execution contexts

Call stack manages execution order

Memory creation phase allocates memory before execution

Hoisting allows variables and functions to be accessed before declaration

Closures allow functions to retain access to outer scope variables

---

REFINING MY UNDERSTANDING

Execution context is created for every function call

Call stack follows LIFO order

Functions are fully hoisted while variables are initialized as undefined

Hoisting happens during memory creation phase, not execution phase

Closures are created due to lexical scope, not because of special syntax

---

SELF-TEST QUESTIONS

What is an execution context?

What is the difference between global and function execution context?

How does the call stack work?

What is hoisting?

Why do we get undefined instead of error in var hoisting?

What is a closure?

---

NEXT TOPICS (DAY 6)

JavaScript scope
Lexical scope
Closures (deep)
this keyword
