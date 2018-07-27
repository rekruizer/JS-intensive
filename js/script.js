function myFirstApp (name, age) {
	
	alert('Привет, меня зовут ' + name + ' и это моя первая программа');




function showSkills() {
	let skills = ['html','css','js','photoshop','XD']

	for (var i = 0; i < skills.length; i++) {
		document.write('Я владею ' + skills[i] + '<br>');
	}
}

function checkAge() {
	if(age >= 18){
		alert('Добро пожаловать!')
	} else{
		alert('Вход запрещен!')
		window.stop();
	}

	}

function calcPow(num) {
	console.log(num * num)
}

	calcPow();
	checkAge();
	showSkills();

}

myFirstApp('Денис', 21);
