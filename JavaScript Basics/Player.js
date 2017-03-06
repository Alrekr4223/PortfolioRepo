
function initPlayer(startXPos){
	var newPlayer = {};
	newPlayer.height = 25;
	newPlayer.width = 25;
	newPlayer.x = startXPos;
	newPlayer.y = canvas.height - newPlayer.height;
	newPlayer.maxSpeed = 10;
	newPlayer.xVelocity = 0;
	newPlayer.yVelocity = 0;
	newPlayer.jumping = false;

	newPlayer.update = function(){
		newPlayer.xVelocity *= friction;
		newPlayer.x += player.xVelocity;

		newPlayer.yVelocity += gravity;			
		newPlayer.y += player.yVelocity;

		if (newPlayer.y >= canvas.height - newPlayer.height){
			newPlayer.y = canvas.height - newPlayer.height;
			newPlayer.jumping = false;
		}

		if (newPlayer.x <= 0){
			newPlayer.x = 0;
		}
		else if (newPlayer.x >= canvas.width - newPlayer.width){
			newPlayer.x = canvas.width - newPlayer.width; 
		}
	}


	newPlayer.render = function(){
		context.fillStyle = 'green';
		context.fillRect(newPlayer.x, newPlayer.y, 
			newPlayer.width, newPlayer.height);
	};

	return newPlayer;
}