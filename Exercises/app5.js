console.log("# JavaScript Functions - Exercises");

console.log("## Task 1: Function Declaration.Create a function using function declaration that returns the sum of two numbers.");
function Sum(a, b) {
    return a + b;
}
console.log("Sum of 3 and 5 is:", Sum(3, 5));

console.log("## Task 2: Function Expression.Write a function expression that calculates the square of a number.");
const square = function(n) {
    return n * n;
};
console.log("Square of 4 is:", square(4));

console.log("## Task 3: Arrow Function.Create an arrow function that checks if a number is even or odd.");
const isEven = (n) => n % 2 === 0;
console.log("Is 7 even?", isEven(7));

console.log("## Task 4: Anonymous Function.Write an anonymous function assigned to a variable that converts Celsius to Fahrenheit.");
const celsiusToFahrenheit = function(celsius) {
    return (celsius * 9/5) + 32;
};
console.log("30°C in Fahrenheit is:", celsiusToFahrenheit(30),"°F");

console.log("## Task 5: Function Hoisting.Explain the difference between function declaration and function expression regarding hoisting. Create examples of both.");
function hoistedFunction() {
    return "This function is hoisted.";
}
const nonHoistedFunction = function() {
    return "This function is not hoisted.";
}
console.log(hoistedFunction());
console.log(nonHoistedFunction());

console.log("## Task 6: Default Parameters.Create a function declaration with default parameters that greets a user with a customizable message.");
function greet(name = "Guest", message = "Welcome") {
    return `${message}, ${name}!`;
}
console.log(greet());
console.log(greet("Alice", "Hello"));

console.log("## Task 7: Rest Parameters.Write a function using rest parameters (`...args`) that calculates the average of multiple numbers.");
function average(...args) {
    const sum = args.reduce((acc, val) => acc + val, 0);
    return sum / args.length;
}

console.log("## Task 8: Callback Function.Create a function that accepts a callback and uses it to process an array of numbers.");
function processArray(numbers, callback) {
    return numbers.map(callback);
}
const doubled = processArray([1, 2, 3, 4], (n) => n * 2);
console.log("Doubled array:", doubled);

console.log("## Task 9: Higher-Order Function.Write a function that returns another function (closure) for multiplying numbers by a given factor.");
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}
const multiplyByThree = createMultiplier(3);
console.log("Multiply 5 by 3:", multiplyByThree(5));

console.log("## Task 10: IIFE (Immediately Invoked Function Expression).Create an IIFE that logs a message and demonstrates variable scope encapsulation.");
(function() {
    const message = "This is an IIFE!";
    console.log(message);
})();