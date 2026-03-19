DAY 4 – CONCURRENCY, ASYNCHRONOUS EXECUTION AND EVENT LOOP
Date: March 18, 2026

Goal of Today
Understand how programs handle multiple tasks using concurrency, and how JavaScript manages asynchronous execution using the event loop.

---

TOPICS COVERED

Concurrency
Synchronous vs Asynchronous execution
Blocking vs Non-blocking
Event Loop (introduction)

---

CONCURRENCY

Definition

Concurrency is the ability of a system to handle multiple tasks at the same time (not necessarily simultaneously).

Important distinction

Concurrency
Managing multiple tasks by switching between them

Parallelism
Executing multiple tasks at the same time using multiple CPU cores

---

WHY CONCURRENCY IS IMPORTANT

Used in:

Web servers
Databases
Operating systems
Real-time applications

Without concurrency

System handles one task at a time → slow

With concurrency

System handles many tasks efficiently

---

SYNCHRONOUS EXECUTION

Definition

Tasks are executed one after another in a fixed order.

Each task waits for the previous one to complete.

Behavior

Blocking

Example

console.log("A")
console.log("B")
console.log("C")

Execution order

A → B → C

---

ASYNCHRONOUS EXECUTION

Definition

Tasks can be initiated without waiting for previous tasks to complete.

Behavior

Non-blocking

Example

console.log("Start")

setTimeout(() => {
console.log("Async Task")
}, 2000)

console.log("End")

Execution order

Start → End → Async Task

---

BLOCKING

Definition

A blocking operation prevents further execution until it is completed.

Effect

Program waits and cannot proceed

---

NON-BLOCKING

Definition

A non-blocking operation allows execution to continue while the task is still in progress.

Effect

Program continues executing other tasks

---

IMPORTANT DISTINCTION

Synchronous vs Asynchronous
Refers to execution order

Blocking vs Non-blocking
Refers to execution behavior

---

EVENT LOOP

Definition

The event loop is a mechanism that allows JavaScript to handle asynchronous operations using a single thread.

---

CORE COMPONENTS

Call Stack
Where synchronous code is executed

Web APIs / Node APIs
Handles asynchronous operations like timers, file system, and network requests

Callback Queue
Stores completed asynchronous tasks waiting to be executed

---

EVENT LOOP WORKING

Step 1
Synchronous code executes in the call stack

Step 2
Asynchronous tasks are delegated to Web APIs

Step 3
After completion, callbacks move to the callback queue

Step 4
Event loop checks if call stack is empty

Step 5
If empty, callback is moved to call stack

Step 6
Callback executes

---

EXAMPLE FLOW

console.log("Start")

setTimeout(() => {
console.log("Async")
}, 2000)

console.log("End")

Execution

Start → End → Async

---

KEY INSIGHTS FROM TODAY

Concurrency allows handling multiple tasks efficiently

Synchronous execution is blocking and sequential

Asynchronous execution allows non-blocking behavior

JavaScript is single-threaded but uses the event loop for concurrency

Event loop coordinates execution of asynchronous tasks

---

REFINING MY UNDERSTANDING

Concurrency does not always mean parallel execution

Asynchronous execution does not mean parallel execution

Blocking is about stopping execution, not about order

Event loop does not execute tasks; it manages when tasks are executed

JavaScript delegates asynchronous operations to external APIs

---

SELF-TEST QUESTIONS

What is the difference between concurrency and parallelism?

What is the difference between synchronous and asynchronous execution?

What is blocking vs non-blocking?

What is the role of the event loop?

Where do asynchronous callbacks wait before execution?

---

NEXT TOPICS (DAY 5)

JavaScript execution context
Call stack in depth
Memory management in JavaScript
Closures (introduction)
