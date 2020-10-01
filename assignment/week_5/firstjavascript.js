// JavaScript Console.
console.log("Hello World");
console.log("How are you doing?");
console.log("I " + "Love" + " You");
console.log("'I' " + "Love" + " You");

// This is a single line comment

/* 

Multi-line comment

*/

// DATATYPES
// String
"This is a really long sentence. !@#$%%(()_+";

// Number
100;
10.9;
.70009;

// Boolean
true;
false;


// Variable

var myBox;

// Naming Schemes
// Camel Case: capitalize every word after the first word.
// Example: originalLocation
// Snake Case: every space is replaced by an underscore, no capital letters.
// Example: original_location

myBox = "kitchen utensils";

console.log(myBox);

myBox = myBox + "!!!";

console.log(myBox);

// Mathematical Operators 
// +, -, /, *, % <--get leftover from division

var sum = 2 + 4;
var difference = 2 - 4;
var quotient = 2 / 4;
var product = 2 * 4;
var remainder = 2 % 4;

let math = [sum, difference, quotient, product, remainder];

console.log(math);

for (let i = 0; i < 5; i++) {
    console.log(math[i]);
}

// Logical Operator
// ==, >, <, !=, <=, >=

var isItRaining = true;

// If Statement
//If   this is true     then run this
//if       ()               {}

if (true) {
    console.log("This is true!");
}



var personAge = 11;
console.log("what? Your age is", personAge);


if (personAge >= 21) {
    console.log("congrats you can drink!");   
} else {
    console.log("Sorry, you are too young to drink!");
}

// Function
// Keyword      name of function       code block
// function         myFunction()          {}
function myFirstFunction() {
    console.log("Have a nice day!");
}

myFirstFunction();

var job = "Hello";

for (let i = 0; i < job.length; i++) {
    console.log(job[i]);
}
