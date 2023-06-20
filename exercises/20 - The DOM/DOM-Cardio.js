// Make a div
const div = document.createElement('div');


// add a class of wrapper to it
div.classList.add('wrapper');
 

// put it into the body
document.body.appendChild(div);

// make an unordered list
const unorderedList = document.createElement('ul');

// or this works too
const ul = `<ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
</ul>
`;

// add three list items with the words "one, two, three" in them


// const listItem1 = document.createElement('li');
// listItem1.textContent = 'one';
// const listItem2 = document.createElement('li');
// listItem2.textContent = 'two';
// const listItem3 = document.createElement('li');
// listItem3.textContent = 'three';


// put that list into the above wrapper
div.innerHTML = ul;

// div.appendChild(listItem1);
// div.appendChild(listItem2);
// div.appendChild(listItem3);

// create an image
const image = document.createElement('img');

// set the source to an image
image.src = "https://picsum.photos/500";
// console.log(image);

// set the width to 250
image.width = 250;
image.height = 250;

// add a class of cute
image.classList.add('cute');

// add an alt of Cute Puppy 4
image.alt = "Cute Puppy";

// Append that image to the wrapper
div.appendChild(image);

// with HTML string, make a div, with two paragraphs inside of it
const htmlString = `
    <div class="myDiv">
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
    </div>
`;
const ulElement = div.querySelector('ul');

// put this div before the unordered list from above
ulElement.insertAdjacentHTML('beforebegin', htmlString);


// div.innerHTML = htmlString;
// const myFragment = document.createRange().createContextualFragment(htmlString);
// document.body.appendChild(myFragment);

// add a class to the second paragraph called warning

const myDiv = div.querySelector('.myDiv');

myDiv.children[1].classList.add('warning');


// remove the first paragraph

myDiv.firstElementChild.remove();
// const firstParagraph = myFragment.firstElementChild;

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

function generatePlayerCard(name, age, height) {
    const html = `
        <div class="playerCard">
            <h2>"${name} - ${age}"</h2>
            <p>Their Height is ${height} and ${age} years old. In Dog years this person would be ${age * 7}. That would be a tall dog!</p>
            <button class="delete" type="button"> &times; Delete</button>
        </div> 
    `;
    
    return html;

};
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

const cards = document.createElement('div');
cards.classList.add('cards')

// make 4 player cards using generatePlayerCard
let cardsHTML = generatePlayerCard('Erik', 34, 69);
console.log(cardsHTML);
cardsHTML = cardsHTML + generatePlayerCard('Michele', 38, 63);
cardsHTML = cardsHTML + generatePlayerCard('Blaise', 1.5, 27);
cardsHTML = cardsHTML + generatePlayerCard('TuTu', 70, 26);

cards.innerHTML = cardsHTML;
div.insertAdjacentElement('beforebegin', cards);
// Could create 4 separate variables for each card
// could loop over an array of names as another option

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('.delete');

// make out delete function
function deleteCard(event) {
    const buttonThatGotClicked = event.currentTarget;
    buttonThatGotClicked.closest('.playerCard').remove();

};
// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteCard));

console.log(buttons);