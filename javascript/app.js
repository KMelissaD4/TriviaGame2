var seconds = 45;
console.log("DreamWeaver sucks!")
	function secondsPassed() {
		var minutes = Math.round((seconds - 30) / 60);
		var remainingSeconds = seconds % 60;

		if(remainingSeconds < 10) {
		remainingSeconds = '0' + remainingSeconds;
		}

		document.getElementById('countdown').innerHTML = minutes + ':' + remainingSeconds;

		if(seconds == 0) {
		document.getElementById("questionPage").innerHTML='<h1>Time is up! Thanks for playing.</h1>';
		clearInterval(countdownTimer);	
		}

		else{
		seconds --;
		}
	}

var countdownTimer = setInterval(secondsPassed, 1000);

var questionNumber = 0;
function getQuestion(){
	switch(questionNumber){
		case 0:
			document.getElementById("questionPage").innerHTML = "<h3>Q1 - Detective Olivia Kitson has been a member of the SKU squad for how many years?</h3><input type='radio' name='options' value='A'>A) 1 - She's still a kitten.<br><input type='radio' name='options' value='B'>B) 5 - She's 'collared' a lot of pups.<br><input type='radio' name='options' value='C'>C) 9 - She's on her last life.<br><br><button onclick='getAnswer()'>Continue</button>";
			break;
		case 1:
			document.getElementById("questionPage").innerHTML = "<h3>Q2 - Who is Detective Kitson's partner?</h3><input type='radio' name='options' value='A'>A) Elliot Cable-Player<br><input type='radio' name='options' value='B'>B) John Treat-Munch<br><input type='radio' name='options' value='C'>C) Fin Butt-Scootuolo<br><button onclick='getAnswer()'>Continue</button>";
			break;
		case 2:
			document.getElementById("questionPage").innerHTML = "<h3>Q3 - Which of these rights do you not have when arrested by the SKU?</h3><input type='radio' name='options' value='A'>A) The right to remain silent, but deadly.<br><input type='radio' name='options' value='B'>B) The right to a cat-torney.<br><input type='radio' name='options' value='C'>C) The right to 15 minutes of time to stare out the window.<br><button onclick='getAnswer()'>Continue</button>";
			break;
		case 3:
			document.getElementById("questionPage").innerHTML = "<h3>Q4 - Detective Cable-Player is known for which quality?</h3><input type='radio' name='options' value='A'>A) A bad temper, he'll scratch easily.<br><input type='radio' name='options' value='B'>B) He's aloof. He doesn't care that you're home.<br><input type='radio' name='options' value='C'>C) He's groomer, known to clean the perps during questioning.<br><button onclick='getAnswer()'>Continue</button>";
			break;
		case 4:								
			document.getElementById("questionPage").innerHTML = "<h1>You have completed the Trivia Game!<br>Correct Answers: " + wins + "<br>Wrong Answers: " + losses + "<br>Total Questions: 4</h1><button onclick='playAgain()'>Play Again!</button>";
			break;
	}
}

var wins = 0
var losses = 0;
var total = 4;
function getAnswer(){
	switch(questionNumber){
		case 0:
			if(getRadioButtonValue() == "C"){
				wins++;
				console.log("correct " + wins);
				questionNumber++;
				getQuestion();
			}else{
				losses++;
				console.log("wrong " + losses);
				questionNumber++;
				getQuestion();
			}
			break;
		case 1:
			if(getRadioButtonValue() == "A"){
				wins++;
				console.log("correct " + wins);
				questionNumber++;
				getQuestion();
			}else{
				losses++;
				console.log("wrong " + losses);
				questionNumber++;
				getQuestion();
			}
			break;
		case 2:
			if(getRadioButtonValue() == "C"){
				wins++;
				console.log("correct " + wins);
				questionNumber++;
				getQuestion();
			}else{
				losses++;
				console.log("wrong " + losses);
				questionNumber++;
				getQuestion();
			}
			break;
		case 3:
			if(getRadioButtonValue() == "A"){
				wins++;
				console.log("correct " + wins);
				questionNumber++;
				getQuestion();
			}else{
				losses++;
				console.log("wrong " + losses);
				questionNumber++;
				getQuestion();
			}
			break;

	}
}

function getRadioButtonValue(){
	var radio = document.getElementsByName('options');
	for(var i = 0; i < radio.length; i++){
		if(radio[i].checked){
			return radio[i].value;
		}
	}
}

function playAgain(){
	questionNumber = i;
	getQuestion();
}