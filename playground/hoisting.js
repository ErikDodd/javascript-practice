// Hoisting = Allows you to access functions or variables before they have been initialized
// Two things in JS are hoisted: Function Declarations & Variable Declarations


// EXAMPLE OF HOISTING, this works
sayHi();

function sayHi() {
    console.log('HELLLLO!');
    console.log(add(10,2));
}

function add(a,b) {
    return a + b;
}

var age;
console.log(age); 
age = 34;