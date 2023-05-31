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
