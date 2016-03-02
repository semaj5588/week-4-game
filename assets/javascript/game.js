var randomNum = null;
var red = Math.floor(Math.random() * 12) + 1;
var blue = Math.floor(Math.random() * 12) + 1;
var yellow = Math.floor(Math.random() * 12) + 1;
var green = Math.floor(Math.random() * 12) + 1;
var score = 0;
var wins = 0;
var losses = 0;
var colorScore;

	
var clickGem = function(color){
	console.log(color);

	if(color === 'red'){
		colorScore = red;
		console.log(colorScore);
	} else if(color === 'blue'){
		colorScore = blue;
		console.log(colorScore);
	} else if(color === 'green'){
		colorScore = green;
		console.log(colorScore);
	} else if(color === 'yellow'){
		colorScore = yellow
		console.log(colorScore);
	}		
	score = score + colorScore;
	checkWin();
};
	
var updateCrystalValues = function(){
		randomNum = Math.floor(Math.random() * 120) + 19;
		document.querySelector('#randomNum').innerHTML = randomNum;
		document.querySelector('.score').innerHTML = score;
		red = Math.floor(Math.random() * 12) + 1;
		blue = Math.floor(Math.random() * 12) + 1;
		yellow = Math.floor(Math.random() * 12) + 1;
		green = Math.floor(Math.random() * 12) + 1;
	}

var checkWin = function(){
		document.querySelector('.score').innerHTML = score;
		if (score == randomNum){
			wins++;
			document.querySelector('#wins').innerHTML = wins;
			reset();
		}
		if (score > randomNum) {
			losses++;
			document.querySelector('#losses').innerHTML = losses; 
			reset();
			
		}
	}
	
	// Function will be called when we reset everything
var reset = function(){
		score = 0;
		updateCrystalValues();
	}
	
	updateCrystalValues();



function randomNumber(){
	randomNumber = mathfloor;
}


$(document).ready(function(){
	var color;
	$('.gem').on('click', function(){
		color = $(this).attr('data-color');
		clickGem(color);
	});	
});