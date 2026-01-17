console.log("# Conditional Constructions in JavaScript - Exercises \n## Task 1: Simple If Statement Write a program that checks if a number is positive and logs Positive or Not positive.");
let number = 5;

if (number >= 0) {
    console.log(number,"Positive");
} else {
    console.log(number,"Negative");
}
console.log("## Task 2: If-Else Statement Create a function that determines if a person is an adult (age >= 18) and returns the appropriate message.");
let age = 14;
console.log("Age:", age);
if (age >= 18) {
    console.log("Adult");
    } else {
        console.log("Not adult");
    }


console.log("## Task 3: Nested If Statements Write code that checks a grade and logs: Excellent (A), Good (B), Average (C), or Needs Improvement (D/F).")
let grade = 'C';
console.log("Grade:", grade);
if (grade === 'A'){
    console.log("Excellent");
}else if (grade === 'B'){
    console.log("Good");
}else if (grade === 'C'){
    console.log("Average");
}else {
    console.log("Needs Improvement");
}


console.log("## Task 4: Switch Statement Implement a function that takes a day number (1-7) and returns the day name using a switch statement.");
let day=6;
console.log("Day number:", day);
switch(day){
    case 1:
        console.log("Monday");
    case 2:
        console.log("Tuesday");
    case 3:
        console.log("Wednesday");
    case 4:
        console.log("Thursday");
    case 5:
        console.log("Friday");
    case 6:
        console.log("Saturday");
    case 7:
        console.log("Sunday");
}

console.log("## Task 5: Ternary Operator Use a ternary operator to assign even or odd to a variable based on a number's remainder.");
console.log("Number:", number);
let type = (number % 2 === 0) ? "even" : "odd";
console.log("The number is", type);


console.log("## Task 6: Logical AND Operator Write a condition that checks if both age > 18 AND hasLicense is true before allowing driving.");
age = 19;
let hasLicense = true;
console.log("Age:", age);
console.log("Has license:", hasLicense);
if (age > 18 && hasLicense) {
    console.log("Allowed to drive");
} else {
    console.log("Not allowed to drive");
}

console.log("## Task 7: Logical OR Operator Create a function that grants access if the user is either an admin OR the owner of the resource.");
let isAdmin = false;
let isOwner = true;
console.log("Is Admin:", isAdmin);
console.log("Is Owner:", isOwner);
if (isAdmin || isOwner) {
    console.log("Access granted");
} else {
    console.log("Access denied");
}

console.log("## Task 8: Multiple Conditions Check if a password is valid: length >= 8, contains uppercase, contains a number, and contains a special character.");
length = 10;
let hasUppercase = false;
let hasNumber = true;
let hasSpecialChar = true;
console.log("Password length:", length);
console.log("Has Uppercase:", hasUppercase);
console.log("Has Number:", hasNumber);
console.log("Has Special Character:", hasSpecialChar);
if (length >= 8 && hasUppercase && hasNumber && hasSpecialChar) {
    console.log("Password is valid");
} else {
    console.log("Password is invalid");
}

console.log("## Task 9: Switch with Fall-through Implement a function that groups months by season using a switch statement with intentional fall-through cases.");
let month = 8;
console.log("Month number:", month);
switch(month) {
    case 1:
    case 2:
    case 3:
        console.log("Winter");
        break;
    case 4:
    case 5:
    case 6:
        console.log("Spring");
        break;
    case 7:
    case 8:
    case 9:
        console.log("Summer");
        break;
    case 10:
    case 11:
    case 12:
        console.log("Autumn");
        break;
}

console.log("## Task 10: Complex Conditional Logic Write a discount calculator that applies different percentages based on purchase amount AND customer type (regular/premium/vip).*/");
let purchaseAmount = 10;
let customerType = 'premium';
console.log("Purchase Amount:", purchaseAmount);
console.log("Customer Type:", customerType);
let discount = 0;
if (customerType === 'regular') {
    if (purchaseAmount >= 5) {
        discount = 5;
    }else {
        discount = 0;
    }
} else if (customerType === 'premium') {
    if (purchaseAmount >= 5) {
        discount = 10;
    } else {
        discount = 5;
    }
} else if (customerType === 'vip') {
    if (purchaseAmount >= 5) {
        discount = 15;
    } else {
        discount = 10;
    }
}
console.log("Discount applied:", discount + "%");