// Make a div
const div = document.createElement('div');


// add a class of wrapper to it
const wrapper = div.classList.add('wrapper');


// put it into the body
document.body.appendChild(div);

// make an unordered list
const unorderedList = document.createElement('ul');

// add three list items with the words "one, two, three" in them
const listItem1 = document.createElement('li');
listItem1.textContent = 'one';
const listItem2 = document.createElement('li');
listItem2.textContent = 'two';
const listItem3 = document.createElement('li');
listItem3.textContent = 'three';


// put that list into the above wrapper
div.appendChild(listItem1);
div.appendChild(listItem2);
div.appendChild(listItem3);

// create an image
const image = document.createElement('img');

// set the source to an image
image.src = "https://picsum.photos/500";
// console.log(image);

// set the width to 250
image.width = 250;

// add a class of cute
image.classList.add('cute');

// add an alt of Cute Puppy
image.alt = "Cute Puppy";

// Append that image to the wrapper
document.body.appendChild(image);

// with HTML string, make a div, with two paragraphs inside of it
const htmlString = `
    <div>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
    </div>
`;

// put this div before the unordered list from above
div.innerHTML = htmlString;
const myFragment = document.createRange().createContextualFragment(htmlString);
document.body.appendChild(myFragment);
// 

// add a class to the second paragraph called warning
image.classList.add('warning');


// remove the first paragraph
const firstParagraph = myFragment.firstElementChild;

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

function generatePlayerCard(name, age, height) {
    const newNewDiv = document.createElement('div');
    newNewDiv.classList.add("playerCard");
    const h2 = document.createElement('h2');
    h2.textContent = "${name} - ${age}";
    const p = document.createElement('p');
    const ageInDogYears = age * 7;
    p.textContent = `They are ${height} and ${age} years old. In Dog years this person would be ${ageInDogYears}. That would be a tall dog!`;

};

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

const anotherNewDiv = document.createElement('div');
anotherNewDiv.classList.add('.cards')

// make 4 player cards using generatePlayerCard

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
