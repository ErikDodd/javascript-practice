console.log("it works!");

// Standard Function

// function doctorize(firstName) {
//     return `Dr. ${firstName}`; 
// }

// Anonymous Function

// function (firstName) {
//     return `Dr. ${firstName}`;
// }

// Function Expression = where you store a function as a value in a variable. These are NOT HOISTED
const doctorize = function(firstName) {
    return `Dr. ${firstName}`;
}

// Example of Hoisting
console.log(doctorize2('Erik'));

// Hoisting = Functions declared with the 'function' keyword get "hoisted"/moved to the top...this is why we can call doctorize2() before it is initialized. Not the same for doctorize()
function doctorize2(firstName) {
    return `Dr. ${firstName}`;
}


// Arrow Functions = An anonymous function
// They don't have their own scope with the 'this' keyword
// concise syntax/shorter function

const inchToCm = (inches) => inches * 2.54;

// Regular function to....

// function add(a,b = 3) {
//     const total = a + b;
//     return total;
// }

// Arrow Function
const add = (a, b = 3) =>  a + b;


// function makeABaby(first, last) {
//     const baby = {
//         name: `${first} ${last}`,
//         age: 0
//     }
//     return baby;
// }

// For implicit return, pop a set of parentheses around the thing you are returning...example a baby
const makeABaby = (first, last) =>  ({ name: `${first} ${last}`, age: 0 });

// IIFE (Immediately Invoked Function Expression) = 
// Start by wrapping it in a parentheses and finish by putting parentheses on the end

(function(age) {
    console.log('Running this Anonymous Function');
    return `You are Cool and age ${age}`;
})(10);

// Methods = A function that lives inside of an object
// One way to create a method is to create a property on your object and set it to a function like below

const erik = {
    name: 'Erik Dodd',
    sayHi: function() {
        console.log('Hey Erik!');
        return 'Hey Erik!';
    }
};