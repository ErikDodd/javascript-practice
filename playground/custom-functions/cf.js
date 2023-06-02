// Function Definition
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
    // Function Body
    console.log('Running this function');
    const total = billAmount + billAmount * taxRate + billAmount * tipRate;
    return total;

}; 
 
const erikTotal = 500;
const erikTaxRate = 0.3;

// Function Call
const myTotal = calculateBill(100, 0.13); 
const myTotal2 = calculateBill(200, 0.13);
console.log(`The first total is ${myTotal}. The second total is ${myTotal2}.`);

// You can pass values as a reference to a variable 
const erikTotalWithTax = calculateBill(erikTotal, erikTaxRate);
console.log(`Erik's total is ${erikTotalWithTax}.`);

function sayHiTo(firstName) {
    return `Hello ${firstName}`

};

const greeting = sayHiTo('Erik');
console.log(greeting);

const myTotal3 = calculateBill(20 + 20 + 30 + 20, .15);
console.log(myTotal3);

function doctorize(name) {
    return `Dr ${name} `; 
};

yell(doctorize('Erik')); // returns "HEY DR. ERIK"

// You can pass a default value as an argument
function yell(name='Frank Ocean') {
    return `HEY ${name.toUpperCase()}`;
};

const doctorErik = yell(doctorize('Erik')); // returns "HEY DR. ERIK"
console.log(doctorErik);

// You can pass an empty string as an argument
function yell(name = '') {
    return `HEY ${name.toUpperCase()}`;
};