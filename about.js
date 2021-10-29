console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submitted');
}

function textBox(evt) {
	evt.preventDefault()

	alert("You smell like you shower :) I don't like water. Meow!")
}

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let img = document.querySelector('img')

img.addEventListener('mouseover', textBox)