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
    console.log(event);
    event.preventDefault();
});