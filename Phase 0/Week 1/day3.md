DAY 3 – OPERATING SYSTEM, PROCESSES, THREADS AND CONTEXT SWITCHING
Date: March 17, 2026

Goal of Today
Understand how programs run inside an operating system using processes and threads, and how the CPU handles multiple tasks using context switching.

---

TOPICS COVERED

Operating System (OS)
Processes
Process Memory Layout (Stack and Heap)
Threads
Process vs Thread
Context Switching

---

OPERATING SYSTEM (OS)

Definition

An Operating System is software that acts as an interface between user programs and computer hardware.

Flow

User Program → Operating System → Hardware

The OS abstracts hardware complexity and manages system resources.

---

RESPONSIBILITIES OF OS

Process Management
Runs and schedules programs for execution

Memory Management
Allocates and manages RAM

File System Management
Handles files and directories

Device Management
Controls input/output devices

Security
Ensures isolation and protection between programs

---

PROCESS

Definition

A process is a program in execution.

Important distinction

Program
Static, stored on disk

Process
Dynamic, running instance of a program in memory

---

PROCESS EXECUTION FLOW

When a program is executed

OS loads program into RAM
OS creates a process
OS assigns CPU time
CPU begins execution

---

PROCESS CHARACTERISTICS

Each process has

Its own memory space
Its own execution state
Its own resources

Processes are isolated from each other for safety and stability.

---

PROCESS STATES

New
Ready
Running
Waiting
Terminated

The OS manages transitions between these states.

---

PROCESS MEMORY LAYOUT

Each process has structured memory divided into sections.

Code Segment
Stores program instructions (read-only)

Data Segment
Stores global and static variables

Heap
Used for dynamic memory allocation
Grows upward

Stack
Used for function calls and local variables
Grows downward

---

STACK VS HEAP

Stack

Fast
Small
Automatically managed
Stores function calls and local variables

Heap

Slower
Larger
Dynamically managed
Stores objects and dynamic data

---

THREAD

Definition

A thread is the smallest unit of execution inside a process.

A process can contain multiple threads.

---

THREAD CHARACTERISTICS

Threads inside the same process

Share memory
Share resources
Share code

Threads are lightweight compared to processes.

---

PROCESS VS THREAD

Process

Heavyweight
Separate memory
More secure
Slower to create and switch

Thread

Lightweight
Shared memory
Faster execution
Risk of data conflicts

---

CONTEXT SWITCHING

Definition

Context switching is the process of switching the CPU from one process or thread to another.

---

WHY CONTEXT SWITCHING IS NEEDED

A system has multiple processes but limited CPU cores.

The OS rapidly switches between processes to give the illusion of parallel execution.

---

WHAT IS CONTEXT

Context refers to the state of a process.

Includes

Program Counter
Registers
Stack
Execution state

---

CONTEXT SWITCH PROCESS

Save state of current process
Load state of next process
Resume execution

---

TIME SLICING

CPU gives each process a small time interval.

After that, the OS switches to another process.

This creates multitasking behavior.

---

THREAD VS PROCESS SWITCHING

Thread switching is faster because

Threads share memory
Less data needs to be saved and restored

Process switching is slower due to separate memory spaces.

---

KEY INSIGHTS FROM TODAY

A program becomes a process when it starts executing.

Processes are isolated, while threads share memory.

Stack handles function calls, while heap handles dynamic data.

The OS manages execution using scheduling and context switching.

Context switching allows multiple programs to run on a single CPU.

---

REFINING MY UNDERSTANDING

A process is not just code, but code + execution + resources.

Threads are not independent programs; they are execution units within a process.

Stack is used for short-lived data (function calls), while heap is used for dynamic objects.

Context switching involves saving and restoring CPU state.

---

SELF-TEST QUESTIONS

What is the difference between a program and a process?

What is the difference between a process and a thread?

Why do threads share memory?

What is stored in stack and heap?

What happens during context switching?

---

NEXT TOPICS (DAY 4)

Concurrency concepts
Synchronous vs Asynchronous execution
Blocking vs Non-blocking
Introduction to event loop
