// Select elements on page - canvas, shake button
const canvas = document.querySelector("#etch-a-sketch");
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector(".shake");
const moveAmount = 10;

// Setup canvas for drawing

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = moveAmount; 

let hue = 0;


// starts drawing

const { width, height} = canvas; // example of object destructing

// create random x & y starting points on the canvas
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

//  write draw function
function draw({ key }) {
    // increment hue
    hue += 1;
    ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
    console.log(key);
    // start path
    ctx.beginPath();
    ctx.moveTo(x,y); 
    // move x, y values depending on what user did
    switch (key) {
      case "ArrowUp":
        y -= moveAmount;
        break;
      case "ArrowRight":
        x += moveAmount;
        break;
      case "ArrowLeft":
        x -= moveAmount;
        break;
      case "ArrowDown":
        y += moveAmount;
        break;
      default:
        break;
    }
    ctx.lineTo(x,y);
    ctx.stroke();
};

// write a handler for the keys
function handleKey(e) {
    if (e.key.includes('Arrow')) {
      e.preventDefault();
      draw({ key: e.key });

    }
    
}; 

// Clear & Shake function
function clearCanvas() {
    canvas.classList.add('shake');
    ctx.clearRect(0, 0, width, height);
    canvas.addEventListener('animationend', function() {
        console.log('Done the SHAKE');
        canvas.classList.remove('shake');
    },
    { once: true }
    );
}

// Listen for arrow keys
window.addEventListener('keydown', handleKey);
shakeButton.addEventListener('click', clearCanvas);