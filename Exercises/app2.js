console.log("# JavaScript Operators - Exercises");

console.log("## Task 1 Write a program that calculates the area of a rectangle given width and height using the multiplication operator");
let width = 5;
let height = 3;
console.log("Width: " + width + ", Height: " + height);
let area = width * height;
console.log("Area of rectangle: " + area);

console.log("## Task 2 Create a function that compares two numbers and returns which one is greater using comparison operators");
let n1 = 10;
let n2 = 60;
function compareNumbers(a, b) {
    if (a > b) {
        return a + " is greater than " + b;
    } else if (b > a) {
        return b + " is greater than " + a;
    } else {
        return "Both numbers are equal";
    }
}

console.log("## Task 3 Write a script that checks if a number is both greater than 10 AND less than 100 using logical operators");
n1 = 45;
n2= 99;
console.log("Number 1:", n1);
console.log("Number 2:", n2);
if (n1 > 10 && n1 < 100) {
    console.log(n1 + " is greater than 10 AND less than 100");
}

console.log("## Task 4 Create a function that returns the remainder when dividing two numbers using the modulo operator");
n1 = 13;
n2 = 5;
function getRemainder(a, b) {
    return a % b;
}
console.log(n1, "%", n2,"=", getRemainder(n1, n2) );

console.log("## Task 5 Write a program that concatenates three strings using the addition operator");
let str1 = "Concate, ";
let str2 = "theese ";
let str3 = "strigs";
let result = str1 + str2 + str3;
console.log("Concatenated string:", result);

console.log("## Task 6 Create a function that increments a counter variable and returns the new value using the increment operator");
let counter = 0;
function incrementCounter() {
    return ++counter;
}
console.log("Counter before increment:", counter);
console.log("Counter after increment:", incrementCounter());

console.log("## Task 7 Write a script that checks if a value is NOT equal to a specific number using the NOT operator");
n1 = 25;
let specificNumber = 30;
console.log("Number:", n1);
if (n1 !== specificNumber) {
    console.log(n1 + " is NOT equal to " + specificNumber);
}

console.log("## Task 8 Create a function that uses the ternary operator to return Adult if age >= 18, otherwise Minor");
function checkAge(age) {
    return age >= 18 ? "Adult" : "Minor";
}
console.log("Age 20:", checkAge(20));
console.log("Age 15:", checkAge(15));

console.log("## Task 9 Write a program that swaps the values of two variables using the assignment operator and a temporary variable");
n1 = 10;
n2 = 20;
console.log("Before swap: n1 =", n1, ", n2 =", n2);
let temp = n1;
n1 = n2;
n2 = temp;
console.log("After swap: n1 =", n1, ", n2 =", n2);

console.log("## Task 10 Create a function that uses the nullish coalescing operator (??) to provide a default value if a variable is null or undefined");
function useNullishCoalescing(value, defaultValue) {
    return value ?? defaultValue;
}
console.log("Using nullish coalescing with null:", useNullishCoalescing(null, "default"));
console.log("Using nullish coalescing with undefined:", useNullishCoalescing(undefined, "default"));
console.log("Using nullish coalescing with a value:", useNullishCoalescing("actual", "default"));