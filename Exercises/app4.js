console.log("\n# JavaScript Loops - Exercises");

console.log("## Task 1: Sum of Numbers Write. a program using a for loop to calculate the sum of numbers from 1 to 10.");
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
    console.log("Current sum after adding", i, "is", sum);
}
console.log("## Task 2: Multiplication Table. Create a while loop that prints the multiplication table for number 5 (5*1 through 5*10).");
let num = 5;
let mult = 1;
while (mult <= 10){
    console.log(num + " * " + mult + " = " + (num * mult));
    mult++
}

console.log("## Task 3: Reverse String. Use a for loop to reverse a given string and display the result.");
let str = "Laborator";
let reversedStr = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
}
console.log("Original String:", str);
console.log("Reversed String:", reversedStr);

console.log("## Task 4: Count Vowels. Write a program using a for...of loop to count vowels in a sentence.");
let sentence = "JavaScript is a powerful programming language";
let vowels = "aeiouAEIOU";
let vowelCount = 0;
for (let char of sentence) {
    if (vowels.includes(char)) {
        vowelCount++;
    }
}
console.log("Number of vowels in the sentence:", vowelCount);

console.log("## Task 5: Factorial Calculation. Implement a do...while loop to calculate the factorial of a number.");
let n = 5;
let factorial = 1;
let i = 1;
do {
    factorial *= i;
    i++;
} while (i <= n);
console.log("Factorial of", n, "is", factorial);

console.log("## Task 6: Find Maximum. Use a for loop to find the maximum value in an array of numbers.");
let numbers = [10, 5, 8, 20, 3];
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
console.log("Maximum value in the array:", max);

console.log("## Task 7: Filter Even Numbers. Create a loop to filter and display only even numbers from an array.");
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Even numbers in the array:");
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}

console.log("## Task 8: Nested Loop Pattern. Write nested for loops to create a 5*5 grid pattern using asterisks (*).");
for (let i = 0; i < 5; i++) {
    let row = "";
    for (let j = 0; j < 5; j++) {
        row += " * ";
    }
    console.log(i+1,row);
}

console.log("## Task 9: Break and Continue. Write a program demonstrating break and continue statements in a loop.");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Skipping number 5");
        continue;
    }
}
console.log("## Task 10: Array Transformation. Use a for loop to transform an array by doubling each element and storing results in a new array.");
let originalArray = [1, 2, 3, 4, 5];
let transformedArray = [];
for (let i = 0; i < originalArray.length; i++) {
    transformedArray.push(originalArray[i] * 2);
}
console.log("Original Array:", originalArray);
console.log("Transformed Array:", transformedArray);