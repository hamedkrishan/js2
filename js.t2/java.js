// 1
var age = 27;
if (age > 18) {
    document.writeln("You are an adult<br>");
}

// 2
var score = 45;
if (score <= 50) {
    document.writeln("You failed the test<br>");
}

// 3
var name = "john";
if (name === "john") {
    document.writeln("Hello John<br>");
}

// 4
var day = "monday";
if (day !== "saturday" && day !== "sunday") {
    document.writeln("It's a weekday<br>");
}

// 5
var num = 4;
if (num % 2 === 0) {
    document.writeln("The number is even<br>");
}

// 6
var char = "a";
if (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') {
    document.writeln("It's a letter<br>");
}

// 7
var list = [1, 2, 3];
if (Array.isArray(list)) {
    document.writeln("It's an array<br>");
}

// 8
var x = 5;
if (x > 0) {
    document.writeln("x is a positive number<br>");
}

// 9
var y = -5;
if (y < 0) {
    document.writeln("y is a negative number<br>");
}

// 10
var z = 9;
if (z % 3 === 0) {
    document.writeln("z is a multiple of 3<br>");
}

// 11
let GPA = "very good";
switch (GPA.toLowerCase()) {
    case "excellent":
        document.writeln("Excellent<br>");
        break;
    case "very good":
        document.writeln("Very Good<br>");
        break;
    case "good":
        document.writeln("Good<br>");
        break;
    case "failed":
        document.writeln("Failed<br>");
        break;
    default:
        document.writeln("Keep going<br>");
}

// 12
let month = "january";
if (["december", "january", "february"].includes(month.toLowerCase())) {
    document.writeln(`${month} is a winter month<br>`);
}

// 13
var password = "mypassword123";
if (password.length >= 8) {
    document.writeln("Your password is strong<br>");
}

// 14
let enteredEmail = "admin@admin.com";
let enteredPassword = "12345Admin";
const correctEmail = "admin@admin.com";
const correctPassword = "12345Admin";

if (enteredEmail !== correctEmail) {
    document.writeln("Incorrect email<br>");
} else if (enteredPassword !== correctPassword) {
    document.writeln("Incorrect password<br>");
} else {
    document.writeln("Welcome<br>");
}

// 15
function isValidNumber(input) {
    if (!isNaN(input) && !isNaN(parseFloat(input))) {
        return `${input} is a valid number`;
    } else {
        return `${input} is not a number`;
    }
}

document.writeln(isValidNumber(11) + "<br>");
document.writeln(isValidNumber("19") + "<br>");
document.writeln(isValidNumber("xyz") + "<br>");
document.writeln(isValidNumber("17.5") + "<br>");
document.writeln(isValidNumber("21F") + "<br>");
