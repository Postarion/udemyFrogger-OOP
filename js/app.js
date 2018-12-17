let score = 0;
document.getElementById('playerScore').innerHTML = score;
let ps = 'images/char-boy.png'
const Enemy = function(x,y) {
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    if (this.x < 510){
    	this.x += (150 * dt);
    }
    else{
    	this.x = -90;
    }
    if(this.x > player.x-50 && this.x < player.x+50 && this.y > player.y-35 && this.y < player.y+35){
    	player.x = 200;
    	player.y = 400;
    	score = 0;
    	document.getElementById('playerScore').innerHTML = score;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
let Player = function(){
	this.sprite = ps;
	this.x = 200;
	this.y = 400;
};

Player.prototype.update = function(){
	if(this.y < 10){
		score++;
		document.getElementById('playerScore').innerHTML = score;
		Player.call(this);

	}
};

Player.prototype.render = function(){
	ctx.drawImage(Resources.get(ps), this.x, this.y);
};

Player.prototype.reset = function(){
	this.x = 200;
	this.y = 400;
	this.sprite = ps;
};

Player.prototype.handleInput = function(direction){
	if(direction == 'left' && this.x > 0){
		this.x-=20
	}
	if(direction == 'right' && this.x < 410){
	this.x+=20
	}
	if(direction == 'up' && this.y > 0){
	this.y-=20
	}
	if(direction == 'down' && this.y < 430){
	this.y+=20
	}
};
const enemy1 = new Enemy(-90, 140)
const enemy2 = new Enemy(-190, 70);
const enemy3 = new Enemy(-290, 210);
const enemy4 = new Enemy(-490, 140);
const enemy5 = new Enemy(-390, 70);

const allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5];
const player = new Player();
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keypress', function(e) {
    let allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

// function closeLightBox(e) {
// 	lightBox.style.display = "none";
// 	ps = e;
//   };