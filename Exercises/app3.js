console.log("# JavaScript Variables and Constants - Exercises.");

console.log("## Task 1: Variable Declaration and Types. Create variables using var, let, and const to store your name, age, and whether youre a student. Log each to the console and observe the differences in scope.");
var name = "Alice";
let Age = 22;
const isStudent = true;
console.log("Name:", name);
console.log("Age:", Age);
console.log("Is Student:", isStudent);

console.log("## Task 2: Constant vs Variable. Define a constant PI = 3.14159 and a variable radius = 5. Calculate the circles area and circumference. Try reassigning the constant to understand the error.");
const PI = 3.14159;
let radius = 5;
let Area = PI*radius*radius;
let circumference = 2*PI*radius;
console.log("Area of circle:", Area);
console.log("Circumference of circle:", circumference);
//PI = 10; app3.js:18 Uncaught TypeError: Assignment to constant variable.

console.log("## Task 3: Type Conversion. Create variables with string numbers (42, 3.14). Convert them to actual numbers using parseInt(), parseFloat(), and Number(). Compare the results.");
let strInt = "42";
let strFloat = "3.14";
let int1 = parseInt(strInt);
let float1 = parseFloat(strFloat);
let int2 = Number(strInt);
let float2 = Number(strFloat);
console.log("Using parseInt:", int1, "Using Number:", int2);
console.log("Using parseFloat:", float1, "Using Number:", float2);

console.log("## Task 4: Variable Naming and Scope. Write a function that declares variables in local and global scope. Demonstrate how let and const differ from var regarding block scope using an if statement.");


console.log("## Task 5: Working with Multiple Declarations. Declare 5 variables at once using destructuring (e.g., const [a, b, c] = [10, 20, 30]). Swap their values and print the results.");
