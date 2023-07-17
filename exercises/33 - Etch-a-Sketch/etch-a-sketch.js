// Select elements on page - canvas, shake button
const canvas = document.querySelector("#etch-a-sketch");
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector(".shake");


// Setup canvas for drawing

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10; 

// starts drawing
const { width } = canvas;
const { height } = canvas;
console.log(width, height);

ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(200, 200);
ctx.stroke();

//  write draw function

// write a handler for the keys

// Clear & Shake function

// Listen for arrow keys