console.log("Exercise 1")
let name = "Catalin";
var age = "24";
const employed = true;

console.log(name, age, employed);

console.log("Exercise 2")
let a = 9;
let b = 5;
function compareNumbers(a, b) {
    if (a > b) return console.log("a is greater");
    if (a < b) return console.log("b is greater");
    if (a == b) return console.log("equal");
}
console.log(a, b);
compareNumbers(a, b);

console.log("Exercise 3")
let n = -9;

let result = (n > 0) ? "positiv" :
    (n < 0) ? "negativ" : "zero";

console.log(result);

console.log("Exercise 4")
age = 21;
console.log(age);
if (age < 18) {
    console.log("Can vote");
}
else {
    console.log("Can't vote");
}

console.log("Exercise 5");
function gradeResult(score) {
    if (score >= 90 && score <= 100) {
        console.log("Excelent");
    } else if (score >= 70 && score < 89) {
        console.log("Bine");
    } else if (score >= 50 && score < 69) {
        console.log("Satisfacator");
    } else if (score < 50 && score == 0) {
        console.log("Insuficient");
    } else {
        console.log("Nota invalida");
    }
}
let score = 87;
console.log(score);
gradeResult(score);

console.log("Exercise 6");
let grade = 4;
console.log(grade);
switch (grade) {
    case 1: console.log("Very poor"); break;
    case 2: console.log("Poor"); break;
    case 3: console.log("Sufficient"); break;
    case 4: console.log("Good"); break;
    case 5: console.log("Very good"); break;
}

console.log("Exercise 7");
let admin = false;
let moderator = true;
if (admin || moderator) {
    console.log(true);
} else {
    console.log(False);
}

console.log("Exercise 8");
let Password = "q1w2e3r4";
if (Password.length >= 8 && Password.includes[0 - 9]) {
    console.log(true);
} else {
    console.log(false);
}

console.log("Execise 9");
function area(l, L) {
    return l * L;
}
let l = 7;
let L = 4;
console.log(L, l, area(l, L));

console.log("Exercise 10");
const square = x => x * x;
console.log(square(17));

console.log("Exercise 11");
function Hello(admin, name = "User") {
    return ("Hello, " + name + "!")
}
console.log(Hello("Catalin"));

console.log("Exercise 12");
function applyCallback(callback, number) {
    return callback(number);
}
const call = (n) => n * 2;

const rezultat = applyCallback(call, 10);

console.log(rezultat);

console.log("Exercise 13")
function Factor(num) {
    let factor = 7;
    return Multiply(num, factor);
}

function Multiply(num, factor) {
    return num * factor;
}

console.log(Factor(8));

console.log("Exercise 14");
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

console.log("Exercise 15");
let i = 1;
while (i <= 50) {
    if ((i % 2) == 0) {
        console.log(i);
    }
    i++;
}

console.log("Exercise 16");
function countVowels(text) {
    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let char of text) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}
console.log("Catalin");
console.log(countVowels("Catalin"));

console.log("Exercise 17");
let text = "javascript";
let reversedText = "";
for (let i = text.length - 1; i >= 0; i--) {
    reversedText += text[i];
}
console.log(text);
console.log(reversedText);


console.log("Exercise 18a")
for (let i = 1; i <= 20; i++) {
    if (i == 10) {
        continue;
    } else if (i == 15) {
        console.log(i);;
        break;
    } console.log(i);
}

console.log("Exercise 18c")
for (let i = 1; i <= 20; i++) {
    if (i === 10) continue
    console.log(i);
    if (i === 15) break
}

console.log("Exercise 18b")
loopLabel: for (let i = 1; i <= 20; i++) {
    switch (i) {
        case 10: continue;
        case 15: break loopLabel;
        default: console.log(i);
    }
}
