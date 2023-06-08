// 2 Ways to work with selecting elements:

// querySelector();
const p = document.querySelector('p');
console.log(p);

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



// console.log(divs);
// console.log(items);
// console.log(imgs);
// console.log(item2);
console.log(item2Image);