console.log("Hi Shawtyyy");
// Creating HTML in Javascript

// document.createElement() - MAIN Way

const myParagraph = document.createElement('p');

// The above line creates it but it isn't on the page yet. It's just stored in js memory at the moment


myParagraph.textContent = "You used to call me on my cell phone..."
myParagraph.classList.add('special'); 
console.log(myParagraph);

const myImage = document.createElement('img');
// Create a src
myImage.src = '/photo.jpg';
// create an alt 
myImage.alt = "This is a pretty photo"
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

// appendChild() is what we use to add HTML elements to the page

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

document.body.appendChild(myDiv);

const heading = document.createElement('h2');
heading.textContent = 'THIS IS A HEADING';

// insertAdjacentElement() takes in two arguments: where to insert and what to insert 
myDiv.insertAdjacentElement('afterbegin',heading);

const unorderedLst = document.createElement('ul');
const listItems3 = document.createElement('li');
const listItems1 = document.createElement('li');
const listItems2 = document.createElement('li');
const listItems4 = document.createElement('li');
const listItems5 = document.createElement('li');
listItems3.textContent = 'Three';
listItems1.textContent = 'One';
listItems2.textContent = 'Two';
listItems4.textContent = 'Four';
listItems5.textContent = 'Five';

unorderedLst.appendChild(listItems3);
unorderedLst.insertAdjacentElement('afterbegin', listItems2);
unorderedLst.insertAdjacentElement('afterbegin', listItems1);
unorderedLst.insertAdjacentElement('beforeend', listItems4);
unorderedLst.insertAdjacentElement('beforeend', listItems5);
document.body.appendChild(unorderedLst);

// cloneNode() returns a duplicate of the node on which this method was called
// allows you to do the above challenge without having to repeat yourself
// const li1 = li5.cloneNode()