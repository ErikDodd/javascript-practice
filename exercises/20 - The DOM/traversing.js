const erik = document.querySelector('.Erik');
// .children returns an HTMLCollection 
// console.log(erik.children);  

// .childNodes returns a NodeList that contains the "I am Erik", the <em> and the "sushi" text
// All the things in the NodeList are actually nodes, but if you wrap them in tags, they also become elements
// console.log(erik.childNodes);   

// Properties of working with Nodes and Elements

console.log(erik.children); 
console.log(erik.firstElementChild);    
console.log(erik.lastElementChild);    
console.log(erik.previousElementSibling);  
console.log(erik.nextElementSibling);    
console.log(erik.parentElement);  

const p = document.createElement('p');
p.textContent = "This text will be deleted";
document.body.appendChild(p);

// removes the paragraph from the page
p.remove();

// but you can still console.log it and have access to it
console.log(p);