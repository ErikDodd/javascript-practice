// preventDefault - Certain elements have default behavior when clicked on. You can prevent this behavior use preventDefault()
// ex. <a></a> takes you to another page

const wes = document.querySelector('.wes');

wes.addEventListener('click', function(event) {
    // prevents you from going to wes bos website when clicking on the link
    const shouldChangePage = confirm('This website might be malicious! Do you wish to proceed?');
    if(!shouldChangePage) {
        event.preventDefault();
    }
});
 
const signUpForm = document.querySelector('[name="signup"]');

signUpForm.addEventListener('submit', function(event) {
    
    // console.log(event.currentTarget.name.value);
    // console.log(event.currentTarget.email.value);
    // console.log(event.currentTarget.agree.checked);
    const name = event.currentTarget.name.value;
    const email = event.currentTarget.email.value;
    if (name.includes('Jeff')) {
        alert('SORRY MAN, YOU CANNOT ENTER!');
        event.preventDefault();
    } 
}); 

function logEvent(event) {
    console.log(event.type);
    console.log(event.currentTarget.value);
};

signUpForm.name.addEventListener('keyup', logEvent);
signUpForm.name.addEventListener('keydown', logEvent);
signUpForm.name.addEventListener("focus", logEvent);
signUpForm.name.addEventListener("blur", logEvent);

// Other types of events with form input: keyup, keydown,focus, blur,

const photo = document.querySelector('.photo');

function handlePhotoClick(event) {
    if (event.type === 'click' || event.key === 'Enter') {
        console.log("You clicked the photo");
    }
    
    console.log(event.key);
};

photo.addEventListener('click', handlePhotoClick);
photo.addEventListener("keyup", handlePhotoClick);