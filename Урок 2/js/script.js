let chooseBtn = document.querySelector('#choose'),
	recieveBtn = document.querySelector('#receive'),
	heading = document.querySelectorAll('h2')[0],
	nameInput = document.querySelector('.contactform_name'),
	phoneInput = document.querySelector('.contactform_phone'),
	mailInput = document.querySelector('.contactform_mail'),
	modal = document.querySelector('.modal'),
	close = document.querySelector('.close'),
	text = document.getElementsByName('message')[0];

console.log(heading)

heading.addEventListener('click', function() {
	heading.textContent = 'Привет я наруто!'
})

recieveBtn.addEventListener('click', function() {
	modal.style.display = 'block'
});

close.addEventListener('click', function () {
	modal.style.display = 'none'
});

nameInput.addEventListener('input', function() {
	text.value = 'Меня зовут ' + nameInput.value + '. И я хочу спросить:';
	if (nameInput.value == ''){
		text.value = ''
	}
})