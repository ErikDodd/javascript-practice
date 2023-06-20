const buttons = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');


function handleClick() {
    console.log('BUTTON WAS CLICKED!');
};

const hullo = () => console.log('HULLLLO');

// a callback function is just a regular function. But it is passed in as argument to a method called at a later point in time

// addEventListener() takes in the following args (usually 2 args, sometimes 3): type of event ('click', etc), and a callback function
buttons.addEventListener('click', function() {
    console.log('BUTTON WAS CLICKED! This is an anonymous function!');
});
coolButton.addEventListener('click', hullo);

// binding: Taking a function and listening for a specific click against an element.

// this is an example of unbinding:
buttons.removeEventListener('click', handleClick);

function buyItem() {
    console.log('BUYING THE ITEM!');

};

function handleBuyButtonClick(buyButton) {
    console.log('Binding the buy button');
    buyButton.addEventListener('click', buyItem);
}

// Listen on multiple items:
const buyButtons = document.querySelectorAll('button.buy');
// console.log(buyButtons);
// console.dir(buttons);

// buyButtons.forEach(handleBuyButtonClick);

buyButtons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log('You clicked it!');
    });
});