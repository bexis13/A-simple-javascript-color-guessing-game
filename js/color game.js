var colors = generateRandomColors(numSquares);
var numSquares = 6;
var squares = document.querySelectorAll(".square");
var pickedColor= pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
reset();


easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares); 
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i =0; i<squares.length; i++) {
		if(colors[i]){
			squares[i].style.background = colors[i];
		}
		else {squares[i].style.display ="none";

	} 
}
  });

 hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares); 
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i =0; i<squares.length; i++) {
		
			squares[i].style.background = colors[i];
		squares[i].style.display ="block";
}
})

resetbutton.addEventListener("click", function(){
	colors = generateRandomColors(numSquares);
	pickedColor= pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	this.textContent = " New Colors"
for (var i = 0; i <squares.length; i++) {
	squares[i].style.background = colors[i];
};
 h1.style.background = "steelblue";
	
})


for (var i = 0; i<squares.length; i++) {
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.background;
		if (clickedColor===pickedColor){
			messageDisplay.textContent = "correct!";
			changeColors(clickedColor);
			h1.style.background = pickedColor;
			resetbutton.textContent =" play again?"
		}
			else{this.style.background= "#232323";
		messageDisplay.textContent = "try again"

	}

	})
};

function changeColors (color){
	for (var i = 0; i<squares.length; i++) {
		squares[i].style.background = color;
	}
};

 function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];

}
function generateRandomColors(num){
	var arr = [];
	for (var i = 0; i< num; i++) {
		arr.push(randomColor())
	};

	return arr;
	}

	function randomColor (){
		var R = Math.floor(Math.random() * 256);
		var G = Math.floor(Math.random() * 256);
		var B = Math.floor(Math.random() * 256);
		
		return "rgb("+ R +", "+ G +", "+ B +")";

	}

	function reset() {
	colors = generateRandomColors(numSquares);
	pickedColor= pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	this.textContent = " New Colors"
for (var i = 0; i <squares.length; i++) {
	squares[i].style.background = colors[i];
};
 h1.style.background = "steelblue";
	
}
