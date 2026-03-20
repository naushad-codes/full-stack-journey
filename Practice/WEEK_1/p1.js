//old method of declaring variables
var xy = 5;
var xy = 10;
function hello(){
    var xxy = 12;
    if(true){
        console.log(xxy);
    }
}
console.log(xy);
hello();

//Problems:
// 1.Function scoped (not block scoped)
// 2.Can be re-declared
// 3.Causes bugs in loops & async code

let ab = 10;

// Features:
// 1.Block scoped
// 2.Can be updated
// 3.Cannot be re-declared

const cb =15;

// Features:
// 1.Block scoped
// 2.Cannot be reassigned

const obj = {name:"naushad"};
console.log(obj.name);

obj.name="ali";

//the const protects the reference not the data inside it hence the name inside obj can be changed.

 /*
 🔹 Two types of memory:
1. Stack (Primitive values)
Fast
Stores actual value 
(number,bool,string,null,undefined,symbol,bigint)

2. Heap (Reference values)
Stores objects
Variables store reference (address) 
(arrays,object,functions)

Shallow Copy:
const user = { name: "Naushad" };
const copy = { ...user };  spread operator
copy.name = "Ali";
console.log(user.name); 
Naushad ✅
  */


// =============================
// DAY 1: JS FOUNDATIONS PRACTICE
// =============================

// Q1: Primitive Copy
// Create two variables a and b
// Assign a = 10, copy it into b
// Change b to 50
// Print both values

let a = 10;
let b = a;
b=50;
console.log(a);
console.log(b);


// Expected: a should NOT change


// -----------------------------

// Q2: Object Reference
// Create an object user1 with name = "Naushad"
// Copy it into user2
// Change name using user2
// Print user1.name

const user1 = {name:"naushad"};
const user2 = user1;
user2.name="naushad ali";
console.log(user1);


// Expected: user1 SHOULD change


// -----------------------------

// Q3: Array Mutation
// Create an array arr1 = [1,2,3]
// Copy it into arr2
// Push 4 into arr2
// Print arr1
let arr =[1,2,3];
let arr2 = arr;
arr2.push(4);
console.log(arr);

// Expected: arr1 SHOULD change


// -----------------------------

// Q4: Function Mutation
// Create an object obj = { value: 10 }
// Write a function that modifies value to 20
// Call the function
// Print obj.value

const obj = {value:10};
function modify(o){
  o.value = 20;
}
modify(obj);
console.log(obj.value);

// Expected: value SHOULD change


// -----------------------------

// Q5: Function Reassignment
// Create an object obj = { value: 10 }
// Write a function that reassigns obj = { value: 50 }
// Call function
// Print obj.value
// Expected: value should NOT change


// -----------------------------

// Q6: Shallow Copy Fix
// Create an object user = { name: "Naushad" }
// Create a copy using spread operator
// Change name in copy
// Print original user.name

// Expected: original should NOT change

const user = {name:"naushad"};
const user4 = {...user};
user4.name = "nasuahd ali ";
console.log(user4.name);
// -----------------------------

// Q7: Debug the Bug
// This is a common backend bug

const product = { price: 100 };

function applyDiscount(p) {
  p.price = p.price - 10;
}

applyDiscount(product);

// Print product.price
// Then explain in README: why this happened


// -----------------------------

// Q8: Fix the Bug (IMPORTANT)
// Rewrite applyDiscount so that it does NOT mutate original object

// Expected:
// original price remains 100
// new object has discounted price


// -----------------------------

// Q9: Challenge (Thinking)
// What will be output?

let x = 10;

function test(x) {
  x = 20;
}

test(x);

console.log(x);

// Explain in README


// -----------------------------

// Q10: Deep Thinking (INTERVIEW LEVEL)

const obj = { a: 1 };

function change(o) {
  o.a = 2;
  o = { a: 3 };
  o.a = 4;
}

change(obj);

console.log(obj.a);

// Explain step-by-step in README