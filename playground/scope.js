// Global Variables - When you create a variable that is outside of a function, not inside of module, not in inside of an if statment.

// EXAMPLES OF GLOBAL VARIABLES
const first = "Erik";
let last = "Dodd";
var age1 = 100;


// Var variables are attached to window object and globally scoped
// window.age returns 100

const age2 = 100;
// Function scope = Variables created inside the function are only availabe to the function.
function go() {
    const hair = 'black';
    const myAge = 200;
    console.log(hair); // returns black
    console.log(age2);
    console.log(myAge);
}

go();

// Scope Look-up = if a variable isnt found inside of a function, it will go up one level and look to see if that variable is there

// console.log(age2); // returns 100
// console.log(hair); // returns Uncaught ReferenceError: 

// You can name variables the same name if they are not in the same scope. Ex. Age2.....still not a good idea though

// Block Scope - Used for functions, for loops, or conditional loagic. Stops variables from leaking out

// Var, let and const variables are scoped differently
// Use const for default, let if you need to re-assign, or var if you need global scope

function isCool(name) {
    let cool;
    if (name == 'Erik') {
        cool = true;
    }
    console.log(cool); // returns true
    return cool;
}



// console.log(cool);  returns Uncaught ReferenceError: cool is not defined because you used const...change it to var and it works


// Blocks or {} are like gates that keep variables in 

const dog = 'Gucci';

function logDog(dog) {
    console.log(dog);
}

function newGo() {
    const dog = 'Drake';
    logDog('Frank');
}

newGo(); // returns Gucci

// Javascript is a lexically scoped language...this means scope look happens where the functions are defined, not where there are run 

// Best Practices: 
// Try not to create global variables

// You can do functions inside of other functions
function sayHello(name) {
    function yell() {
        console.log(name.toUpperCase());
    }
    yell();
}

// Just like variables, functions are scoped to there parent