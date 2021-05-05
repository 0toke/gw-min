
// selecting html elements
let submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', clickListener);

// attaching click listener
function clickListener(event) {
	event.preventDefault();
	let emailInput = document.querySelector('#email');
	let messageInput = document.querySelector('#message');

    // getting user entered values 
	let emailText = emailInput.value;
	let messageText = messageInput.value;

// javascript validations
    //pop-up message
	if(emailText.includes('@')) {
        //correct 
        alert('please wait your data in being process');
    }else {
        //wrong
        alert('please include @ in your email');
    }

    //collect data user
    console.log('email:', emailText, 'message:', messageText);
}