// 2 Ways to work with selecting elements:

// querySelector();
const p = document.querySelector('p');


// querySelectorAll();
const divs = document.querySelectorAll('div'); 
// Grab all elements with a class of "items"
const items = document.querySelectorAll('.items');
// Grab all images that are inside of an "items"
const imgs = document.querySelectorAll('.items img');
const item2 = document.querySelector('.item2');

// You can use querySelector on other elements:
// This only operates as a method inside of the element
const item2Image = item2.querySelector('img');

const heading = document.querySelector('h2');


// shows us the object properties instead of just the element
// console.dir(heading);

// textContent and innerText are basically the same thing 
// console.log(heading.textContent);
// console.log(heading.innerText);

// Set the textContent property on that element
heading.textContent = "This is Erik's HEADING";

// console.log(heading.innerHTML);
// console.log(heading.outerHTML);

const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);

// pizzaList.textContent = `${pizzaList.textContent}🍕;`

// Best way to attach text to the end of something
// pizzaList.insertAdjacentText('beforeend', '🍕')

// Way to attach text to the beginning of something
pizzaList.insertAdjacentText('afterbegin', '🍕')

// Nodes can be anything Ex. <p>, text, etc
// Elements are something that are wrapped in a tag

// Select the image with the class of 'nice'
const pic = document.querySelector('.nice');

// Add() a class of 'open' to that image/variable
pic.classList.add('open');

// remove a class of 'cool' from that image/variable
pic.classList.remove('cool');

// Add() a class of 'round' to that image/variable..style tag in index.html uses border-radius to adjust that pic 

// toggle() add it if it's not there and remove it if it is there

console.log(pic.classList);

function toggleRound() {
    pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);