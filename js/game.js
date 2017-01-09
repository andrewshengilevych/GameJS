var canvas = document.getElementById('canvasMain');
var ctx = canvas.getContext('2d');

function init(){
	canvas.width = document.body.clientWidth;
	canvas.height = document.body.clientHeight;
	createHouse(200, 200);
	setInterval(move, 10);
	var x = 200;
	var direction = 'right';
	function move(){
		if(x == 500){
			direction = 'left'
		} else if(x == 10){
			direction = 'right'
		}
		if(direction == 'right' && x < 500){
			x += 1;
		} else if (x > 10 && direction == 'left'){
			x -= 1;
		}
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		createHouse(x, 200);

	}
}
init();



function createHouse(startX, startY){	
	function square(sideX, sideY, x, y, color){
		ctx.strokeStyle = color;
		ctx.strokeRect(x, y, sideX, sideY);
		ctx.stroke();
	}
	var house = {
		side : 300,
		x : startX,
		y : startY
	}	
	var door = {
		sideX: 80,
		sideY: 150,
		x: house.x + house.side - 130,
		y: house.y + house.side - 150
	}
	function triangle(){		
		ctx.strokeStyle = 'black';
		var x = [house.x, house.x + (house.side/2), house.x + house.side];
		var y = [house.y, house.y - (house.side/2), house.y];
		ctx.moveTo(x[0], y[0]);
		ctx.beginPath();
		for (var i = 0; i <= x.length; i++) {
			ctx.lineTo(x[i], y[i])			
		}
		ctx.stroke();

	}
	square(house.side, house.side, house.x, house.y, 'black');
	square(door.sideX, door.sideY, door.x, door.y, 'black');
	triangle();
}

// function createImage(){
// 	canvas.width = document.body.clientWidth;
// 	canvas.height = document.body.clientHeight;
// 	var image = new Image();
// 	image.onload = function(){
// 		setInterval(move, 10);
// 	}
// 	image.src = 'https://static1.squarespace.com/static/5477dda6e4b05a09c654e1b3/t/556e3cbee4b009df1b2be18d/1433287870661/hearthstone.png?format=300w';
// 	var x = 10;
// 	var direction = 'right';
// 	function move(){
// 		if(x == 500){
// 			direction = 'left'
// 		} else if(x == 10){
// 			direction = 'right'
// 		}
// 		if(direction == 'right' && x < 500){
// 			x += 1;
// 		} else if (x > 10 && direction == 'left'){
// 			x -= 1;
// 		}
// 		ctx.clearRect(0, 0, canvas.width, canvas.height);
// 		ctx.drawImage(image, x, 10, 230, 233);

// 	}
// }
// createImage();