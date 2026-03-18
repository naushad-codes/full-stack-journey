DAY 2 – CPU ARCHITECTURE AND MEMORY HIERARCHY
Date: March 16, 2026

Goal of Today
Understand how a CPU executes instructions and how different types of memory work together to run programs.

---

TOPICS COVERED

CPU architecture
ALU (Arithmetic Logic Unit)
Control Unit
Registers
Program Counter
Instruction Register
Memory hierarchy
Cache memory
Fetch–Decode–Execute cycle

---

CPU (Central Processing Unit)

The CPU is the component responsible for executing program instructions and controlling operations inside the computer.

Main responsibilities

Execute instructions
Perform arithmetic and logical operations
Control movement of data between memory and registers

A CPU does not understand programming languages like JavaScript or Python directly.

It only understands machine-level instructions such as:

ADD
SUB
LOAD
STORE
JUMP

High-level languages are eventually translated into these instructions.

---

MAIN COMPONENTS INSIDE THE CPU

The CPU is composed of three important parts.

ALU
Control Unit
Registers

These components work together to execute instructions.

---

ALU (Arithmetic Logic Unit)

The ALU performs calculations and logical operations.

Arithmetic operations include:

Addition
Subtraction
Multiplication
Division

Logical operations include:

AND
OR
NOT
XOR
Comparisons

Important idea:

The ALU does not store data.
It only performs operations on data provided by registers.

---

CONTROL UNIT

The Control Unit manages the execution of instructions.

Responsibilities include:

Fetching instructions from memory
Decoding instructions
Sending control signals to other CPU components
Managing data movement between registers, ALU, and memory

Example process

Instruction: ADD R1, R2

Control Unit fetches instruction
Control Unit decodes operation
ALU performs the addition
Result stored in register

The Control Unit acts like the coordinator of CPU activity.

---

REGISTERS

Registers are very small and extremely fast memory locations located inside the CPU.

Characteristics

Extremely fast access speed
Very small storage capacity
Used for temporary storage during execution

Registers hold:

Operands (numbers used in calculations)
Memory addresses
Intermediate results
Control information

Registers allow the CPU to operate quickly without constantly accessing RAM.

---

IMPORTANT REGISTERS

Program Counter (PC)

Stores the memory address of the next instruction to execute.

Example

Address    Instruction
100        LOAD A
101        ADD B
102        STORE C

If PC = 101, the CPU executes the instruction located at address 101.

After execution, the PC moves to the next instruction.

---

Instruction Register (IR)

Stores the current instruction being executed.

When the CPU fetches an instruction from memory, it is placed in the Instruction Register so that the Control Unit can decode it.

---

MEMORY HIERARCHY

Computers use multiple layers of memory to balance speed, cost, and capacity.

Hierarchy from fastest to slowest

Registers
Cache
RAM
Storage (SSD or HDD)

Closer memory to the CPU is faster but smaller and more expensive.

Further memory from the CPU is slower but larger and cheaper.

---

CACHE MEMORY

Cache is a small, high-speed memory located close to the CPU.

Purpose

Store frequently accessed data
Reduce RAM access time
Improve program performance

Execution flow

CPU requests data
Check cache first

If data found → Cache hit
If data not found → Cache miss → fetch from RAM

Modern processors contain multiple levels of cache.

L1 Cache – smallest and fastest
L2 Cache – larger but slightly slower
L3 Cache – shared among CPU cores

---

FETCH–DECODE–EXECUTE CYCLE

This is the fundamental cycle used by the CPU to execute instructions.

Step 1 – Fetch

The CPU retrieves the next instruction from memory.

The address of the instruction is stored in the Program Counter.

The instruction is then placed in the Instruction Register.

---

Step 2 – Decode

The Control Unit analyzes the instruction.

It determines:

Which operation to perform
Which registers contain operands
Where the result should be stored

---

Step 3 – Execute

The ALU performs the operation.

Example

ADD R1, R2

The ALU adds the values stored in registers R1 and R2.

The result is stored in a register.

---

PROGRAM EXECUTION FLOW (EXAMPLE)

Program

a = 5
b = 3
c = a + b

Execution flow

Program stored in RAM
Program Counter selects instruction
CPU fetches instruction from RAM
Instruction placed in Instruction Register
Control Unit decodes instruction
Values loaded into registers
ALU performs addition
Result stored in register
Result written back to memory

This process repeats for every instruction in the program.

---

KEY INSIGHTS FROM TODAY

A CPU executes programs using the Fetch–Decode–Execute cycle.

Registers provide extremely fast temporary storage for CPU operations.

The ALU performs calculations while the Control Unit coordinates execution.

Memory hierarchy exists to balance speed, cost, and capacity.

Cache memory improves performance by reducing RAM access time.

---

REFINING MY UNDERSTANDING

Registers store operands, addresses, and temporary results during execution.

The Instruction Register stores the current instruction being executed.

The Program Counter stores the address of the next instruction.

Data must be loaded from RAM into registers before the ALU can operate on it.

---

SELF-TEST QUESTIONS

What are the three main components of the CPU?

What is the difference between registers and RAM?

What does the Program Counter store?

Why does the CPU check cache before RAM?

What are the three stages of the instruction cycle?

---

---
NEXT TOPICS (DAY 3)

Operating System basics
Processes
Threads
Context switching
