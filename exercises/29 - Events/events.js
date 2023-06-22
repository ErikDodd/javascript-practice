const buttons = document.querySelector(".butts");
const coolButton = document.querySelector(".cool");

function handleClick() {
  console.log("BUTTON WAS CLICKED!");
}

const hullo = () => console.log("HULLLLO");

// a callback function is just a regular function. But it is passed in as argument to a method called at a later point in time

// addEventListener() takes in the following args (usually 2 args, sometimes 3): type of event ('click', etc), and a callback function
buttons.addEventListener("click", function () {
  console.log("BUTTON WAS CLICKED! This is an anonymous function!");
});
coolButton.addEventListener("click", hullo);

// binding: Taking a function and listening for a specific click against an element.

// this is an example of unbinding:
buttons.removeEventListener("click", handleClick);

function buyItem() {
  console.log("BUYING THE ITEM!");
}

function handleBuyButtonClick(event) {
  const button = event.target;
  // console.log(button.textContent);
  // console.log(parseFloat(event.target.dataset.price));
  // Most cases use event.currentTarget instead of event.target
  console.log(event.currentTarget);
  console.log(event.target === event.currentTarget);
  // Stop this event from bubbling up
  // event.stopPropagation();
}

// Listen on multiple items:
const buyButtons = document.querySelectorAll("button.buy");
// console.dir(buttons);

// buyButtons.forEach(handleBuyButtonClick);

buyButtons.forEach((button) => {
  button.addEventListener("click", handleBuyButtonClick);
});

// 3rd argument for addEventListener, is the options object
window.addEventListener(
  "click",
  function (event) {
    console.log("YOU CLICKED THE WINDOW!");
    console.log(event.target);
    console.log(event.type);
    console.log(event.bubbles);
    // event.stopPropagation();
  },
  { capture: true }
);

const photoElement = document.querySelector('.photo');

// mousemove, mouseenter, mousedown are other events to listen for 
photoElement.addEventListener('mousemove', function(event) {
    // Pro tip: use event.currentTarget instead of this for eventListener stuff
  console.count(event.currentTarget);
  // REMINDER: 'this' keyword is always equal to whatever is to the left of the dot.. ex photoElement.addEventListener, this === photoElement
  console.log(this);
});