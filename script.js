var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetBtn = document.querySelector("#resetBtn");
var numInput = document.querySelector("input");
var p = document.querySelector("#play");

var scoreKeeper1 = document.querySelector("#scoreKeeper1");
var scoreKeeper2 = document.querySelector("#scoreKeeper2");
var score1 = 0;
var score2 = 0;
var gameOver = false;
var winningScore = 0;

p1Button.addEventListener("click", function(){
	if(!gameOver){
		score1++;
		if(score1 === winningScore){
			scoreKeeper1.classList.add("winner");
			gameOver = true;
		}
		scoreKeeper1.textContent = score1;
	}
});

p2Button.addEventListener("click", function(){
	if(!gameOver){
		score2++;
		if(score2 === winningScore){
			scoreKeeper2.classList.add("winner");
			gameOver = true;
		}
	scoreKeeper2.textContent = score2;
	}
});

resetBtn.addEventListener("click", function(){
	reset();
});

function reset(){
	score1 = 0;
	score2 = 0;
	scoreKeeper1.textContent = 0;
	scoreKeeper2.textContent = 0;
	scoreKeeper1.classList.remove("winner");
	scoreKeeper2.classList.remove("winner");
	gameOver = false;
}

numInput.addEventListener("change", function(){
	p.textContent= numInput.value;
	winningScore = Number(numInput.value);
	reset();
});