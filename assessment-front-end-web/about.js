console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();

	alert('form submit');
}


let form = document.querySelector('#contact-form');

form.addEventListener('submit', handleSubmit);


// add event listener to the logo 
// grab the img element
const img = document.querySelector('img')


// send the user a msg when the mouse is over the picture
function complimentUser() {
	alert('You are cool like me!')
}

// add the event and function to the eventlistener
img.addEventListener('mouseover', complimentUser)