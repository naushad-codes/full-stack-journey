DAY 1 – COMPUTER FUNDAMENTALS
Date: March 15, 2026

Goal of Today
Understand the fundamental building blocks of computing: what a computer is, how it represents data using binary, how logic gates work, and how computers store information internally.

---

WHAT IS A COMPUTER?

Resource
https://www.geeksforgeeks.org/computer-organization-architecture/a-simple-understanding-of-computer/

Definition

A computer is an electronic device that receives input, processes data, stores information, and produces output.

Basic Model

Input → Processing → Storage → Output

Example

Typing a letter on a keyboard:

Keyboard (Input)
↓
CPU processes the signal
↓
RAM temporarily stores the data
↓
Monitor displays the character (Output)

Types of Computers

Supercomputers
Used for scientific simulations, weather prediction, and research.

Mainframe Computers
Used by large organizations for processing huge volumes of transactions.

Minicomputers
Medium-sized computers used by businesses and institutions.

Microcomputers (Personal Computers)
Common devices such as laptops, desktops, and smartphones.

Hardware

Hardware refers to the physical components of a computer.

Examples

CPU (processor)
RAM (memory)
Hard drive / SSD
Keyboard
Mouse
Monitor

Software

Software refers to programs that instruct hardware on what tasks to perform.

Examples

Operating systems
Windows
Linux
macOS

Applications
Web browsers
Editors
Games

Main Components of a Computer

Central Processing Unit (CPU)
Executes instructions and performs calculations.

Memory (RAM)
Temporary storage used while programs run.

Storage (SSD / HDD)
Permanent storage for files and programs.

Input Devices
Keyboard, mouse, microphone.

Output Devices
Monitor, speakers, printer.

---

BINARY NUMBER SYSTEM

Resource
https://www.geeksforgeeks.org/maths/binary-number-system/

Computers operate using the binary number system.

Binary only uses two digits:

0 and 1

This is called a Base-2 number system.

Basic Data Units

Bit
Smallest unit of data. Value can be 0 or 1.

Byte
8 bits.

Example

1 byte = 8 bits
A byte can represent numbers from 0 to 255.

Decimal to Binary Conversion

Decimal → Binary

1 → 1
2 → 10
3 → 11
4 → 100
5 → 101
6 → 110
7 → 111
8 → 1000
9 → 1001
10 → 1010

Binary Arithmetic Operations

Addition

0 + 0 = 0
0 + 1 = 1
1 + 0 = 1
1 + 1 = 10

Subtraction

1 − 0 = 1
1 − 1 = 0

Multiplication

1 × 1 = 1
1 × 0 = 0

Division follows the same concept as decimal division.

1’s Complement

1’s complement is obtained by flipping all bits in a binary number.

Example

Original: 1010
1’s complement: 0101

Purpose

Used in older systems to represent negative numbers.

2’s Complement

2’s complement is obtained by:

Step 1: Take the 1’s complement
Step 2: Add 1

Example

Binary number: 1010

1’s complement → 0101
Add 1 → 0110

2’s complement is widely used in modern computers to represent negative numbers.

Why We Need 1’s and 2’s Complement

Computers need a way to represent negative numbers in binary.

2’s complement allows:

Efficient arithmetic operations
Simple hardware implementation
Single representation of zero

Applications of Binary

Computer memory
Digital circuits
Machine instructions
Networking and data transmission

---

WHY COMPUTERS USE BINARY

Resource
https://www.quora.com/Why-do-computers-use-the-binary-system-instead-of-the-decimal-system

Computers use binary because electronic circuits operate with two states.

Electrical signals have two stable states:

OFF → 0
ON → 1

Binary matches these states perfectly.

Advantages of Binary

Reliable electronic implementation
Simple circuit design
Less error-prone compared to decimal systems
Efficient digital signal processing

---

LOGIC GATES

Resource
https://www.techtarget.com/whatis/definition/logic-gate-AND-OR-XOR-NOT-NAND-NOR-and-XNOR

Logic gates are the basic building blocks of digital circuits.

They perform logical operations on binary inputs.

AND Gate

Output is 1 only when both inputs are 1.

A  B  Output
0  0  0
0  1  0
1  0  0
1  1  1

OR Gate

Output is 1 if at least one input is 1.

A  B  Output
0  0  0
0  1  1
1  0  1
1  1  1

NOT Gate

Reverses the input.

Input  Output
0      1
1      0

Other Logic Gates

XOR
NAND
NOR
XNOR

These gates combine together to form digital circuits and eventually build CPUs.

---

HOW COMPUTERS STORE DATA

Resources

https://dev.to/cristiansifuentes/how-computers-store-data-from-memory-to-meaning-4kdk

https://medium.com/@sinandenizekinci/how-computers-store-data-70482c984563

Fundamental Idea

Computers store all types of information as binary numbers.

Text Storage

Characters are stored using encoding systems such as ASCII or Unicode.

Example

Character  ASCII Value  Binary

A          65           01000001
B          66           01000010

Word Example

Hello

H → 72
e → 101
l → 108
l → 108
o → 111

Image Storage

Images are made of pixels.

Each pixel contains color values represented using RGB.

Example

Red pixel → (255, 0, 0)
Green pixel → (0, 255, 0)
Blue pixel → (0, 0, 255)

These numbers are stored in binary.

Audio Storage

Sound waves are sampled and converted into numerical values.

These numbers represent the amplitude of sound waves over time.

Data Storage Units

1 bit = 0 or 1
1 byte = 8 bits

Storage hierarchy

1 KB = 1024 bytes
1 MB = 1024 KB
1 GB = 1024 MB
1 TB = 1024 GB

---

KEY TAKEAWAYS

A computer processes input data to produce output.

Binary is the fundamental language of computers.

Logic gates are the building blocks of digital circuits.

All data (text, images, sound) is stored as binary numbers.

CPU processes instructions while RAM temporarily stores active data.

---

SELF REVISION QUESTIONS

1. What are the main components of a computer?
2. Why do computers use binary instead of decimal?
3. What is the difference between 1’s complement and 2’s complement?
4. What are logic gates and why are they important?
5. How is the word “Hello” stored in a computer?

---

Tomorrow’s Topics (Day 2)

CPU Architecture
Registers
Memory hierarchy
Fetch–Decode–Execute cycle
