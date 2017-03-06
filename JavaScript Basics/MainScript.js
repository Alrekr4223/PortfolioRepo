
var requestAnimationFrame;
var canvas;
var context, player;
var gravity, friction;
var keys;

(initialize());

function initialize(){
	requestAnimationFrame = window.requestAnimationFrame 
	|| window.mozRequestAnimationFrame 
	|| window.webkitRequestAnimation 
	|| window.msRequestAnimationFrame;
	window.requestAnimationFrame = requestAnimationFrame;

	canvas = document.getElementById('mainCanvas');
	context = canvas.getContext('2d');

	canvas.width = 800;
	canvas.height = 600;

	gravity = .5;
	friction = 0.8;

	player = initPlayer(0);

	keys = [];
}

window.addEventListener('load', function(){
	update();
});

document.body.addEventListener('keydown', function(event){
	keys[event.keyCode] = true;
});
document.body.addEventListener('keyup', function(event){
	keys[event.keyCode] = false;
});

function update(){

	if(keys[38] == true){ //key 38 is the up arrow
		if (!player.jumping){
			player.jumping = true;
			player.yVelocity = -player.maxSpeed;
		}
	}
	if (keys[39] == true){ //key 39 is the right arrow
		if (player.xVelocity < player.maxSpeed){
			player.xVelocity ++;
		}
	}
	if(keys[37] == true){ //key 37 is the left arrow
		if (player.xVelocity > -player.maxSpeed){
			player.xVelocity --;
		}
	}

	player.update();

	context.clearRect(0,0, canvas.width, canvas.height);

	player.render();



	requestAnimationFrame(update);
}