let score = 0;
document.getElementById('playerScore').innerHTML = score;

const Enemy = function(x,y) {

    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
};


Enemy.prototype.update = function(dt) {
    if (this.x < 505) {
        this.x += (125 * dt);
    }
    else {
        this.x = -90;
    }

    if(this.x > player.x-50 && this.x < player.x+50 && this.y < player.y+25 && this.y > player.y-25){
        score = 0;
        document.getElementById('playerScore').innerHTML = score;
        player.reset();
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

const Player = function(){
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 425;
};

Player.prototype.update = function(){
    if (player.y < 20){
        score++;
        document.getElementById('playerScore').innerHTML = score;
        this.reset();
    }
};

Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(direction) {
    if(direction == 'left' && this.x > 0) {
        this.x -= 30;
    }
    if(direction == 'right' && this.x < 400) {
        this.x += 30;
    }
    if(direction == 'up' && this.y > 3) {
        this.y -= 30;
    }
    if(direction == 'down' && this.y < 400) {
        this.y += 30;
    }
};

Player.prototype.reset = function(){
    this.x = 200;
    this.y = 425;
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var enemy1 = new Enemy(-90, 60);
var enemy2 = new Enemy(-190, 140);
var enemy3 = new Enemy(-390, 140);
var enemy4 = new Enemy(-890, 230);

var allEnemies = [enemy1, enemy2, enemy3, enemy4];

var player = new Player;

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keypress', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
document.addEventListener('')
