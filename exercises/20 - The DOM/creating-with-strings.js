const item = document.querySelector('.item');

const width = 500;
const src = `https://picsum.photos/${width}`; 
const description = `CUTEE`;

// Just a string! Only becomes an element when we dump it into the DOM
const myHTML = `
<div class="wrapper">
    <h2>${description}</h2>
    <img src="${src}" alt="${description}"/>
</div>`;
// You can create the html with text and dump it into the item
// item.innerHTML = myHTML; 

// this is actually a string of HTML elements
// console.log(typeof myHTML);

// returns a string of all of the innerHTML
// console.log(item.innerHTML); // getter

// Turn a string into a DOM Element
const myFragment = document.createRange().createContextualFragment(myHTML);

// createRange() essentially a collection of elements or part of HTML we can work with 

console.log(myFragment.querySelector('img'));
console.log(myHTML);

document.body.appendChild(myFragment);

// XSS = Cross Site Scripting 



