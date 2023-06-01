// Module 1 - Strings, Numbers, Objects,



// ********STRINGS***********

// Three different ways to do a string:

// Double Quotes
const first = "Erik";
// Single Quotes
const middle = 'Matthew';
// Back Ticks
const last = `Dodd`;

// Use \ as an escape to not mess up the use of quotes
const sentence = 'Andre 3000\'s the coolest';

const multiLine = `Hey

What's up,

Hello??
`;

// Concatenation = When you combine two or more strings into one.
const concatenation = "Hello My Name is " + first + middle + last;

// Interpolation = When you put a variable inside of a String
const interpolation = `Greetings Earthling. My name is ${first} ${middle} ${last}`;

const html = `
<div> 
    <h1>${first}</h1>
    <p>${interpolation}</p>
</div>
`;
 document.body.innerHTML = html;



 // ********NUMBERS***********

 const age = 100;
 const name = "2Chainz"

//  typeof = used to identify which type the data is.. string, number, boolean, object, etc/

// Helper Methods = Things like Math.round(), Math.floor(), Math.ceil(), and Math.random()

const round = Math.round(10.5);

const floor = Math.floor(10.5);

const ceil = Math.ceil(10.5);

const random = Math.random();

const smarties = 20;
const kids = 3;
const eachKidGets = Math.floor(smarties / kids);
console.log(`Each kids gets ${eachKidGets}`);
const dadGets = smarties % kids
console.log(`Dad gets ${dadGets}`);



// ********OBJECTS***********

// Everything in Javascript is an Object (OOP)

// Objecst are Used for Collections of Data. Related data

const person = {
    first: 'Erik',
    last: 'Dodd',
    age: 100
};

// Order doesn't matter in an object. If you want order to matter, use an Array


// ********NULL & UNDEFINED ***********

// There are two ways to express the 'nothing' in JS: undefined & null

let dog; // This will produce 'undefined' when console.log(). Variable has been created but not defined
dog = "Gucci Mane"; // Now it has been defined

let somethingUndefined; // Has no value set to it
const somethingNull = null; // Has a value of 'null' set to it

const cher = {
    first: Cher,
};

// cher.last == undefined >>> she doesn't have a last name

const teller = {
    first: "Raymond",
    last: "Teller",
};

// Teller changed his legal name from Raymond Teller to just Teller.

teller.first = "Teller";
teller.last = null;



// ********BOOLEAN ***********

// It's True or False. Used for logic like If Statements

// This is a 'Flag Variable'... it's either set to True or False
let isDrawing = false;

// Can Calculate Boolean
const age2 = 18;
const ofAge = age2 > 18;
console.log(age2);
const age3 = 34;
age2 === age3; // returns True

// === checks that the values and the type are the same
10 === 10 // returns True
10 === '10' // returns False

// == only checks if the values are the same 
10 == 10 // returns True


// ********FUNCTIONS - BUILT-IN ***********

// Argument = The data you pass to a function to run

// Returns largest numbers
let getBiggerNumber = Math.max(10, 100); // returns 100

// Returns the number without a decimal
let getFloor = Math.floor(2.444) // returns 2

// Takes in string and returns number
let getInteger = parseFloat('20.24245') // returns 20.24245

// Gives you the current date
let getDate = Date.now()