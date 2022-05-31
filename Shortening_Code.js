/* --> Condition true */

// Longhand
if (booleanVar === true) {};

// Shorthand
if (booleanVar) {};


/* --> Arrow Function */

// Longhand
function greet(name) {
    console.log("Hey " + name);
};

// Shorthand
const greet = name => console.log("Hey " + name);


/* --> Template Literals */
const nameL = "John";
const day = "Friday";

// Longhand
const greedL = "Hi " + nameL + ", have a wonderful " + day + "!";

// Shorthand
const greedS = `Hi ${nameL}, have a wonderful ${day}!`;


/* --> Power of any number */

// Longhand
Math.pow(3,6); // 729

// Shorthand
3**6; // 729


/* --> Assignment Operator */

// Longhand
x = x + y;

// Shorthand
x += y;


/* --> Declaring Variables */

// Longhand
let x;
let z = 'a';

// Shorthand
let y, zs = 'A';


/* --> Ternary Operator */

// Longhand
let isAdultL;

if (age > 17) {isAdultL = true;} else {isAdultL = false;};

// Shorthand
let isAdultS = age > 17 ? true : false;