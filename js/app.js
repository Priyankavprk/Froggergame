// Enemies our player must avoid
var score = 0;
var level = 0;
var times = 0;
var flag = false;
var tot = 0;
var char = 'images/char-boy.png';
var c = ['images/Star.png','images/Heart.png','images/Gem Blue.png','images/Gem Green.png'];
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = 100;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if(this.x > 500)
        this.x = -100;
    this.x += dt * (this.speed + (level * 50));
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Star = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/Star.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Star.prototype.update = function() {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if(times> 2){
        var allStar = [
        new Star(200,100),
        new Star(50,200)];
    }
};

// Draw the enemy on the screen, required method for game
Star.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Star.prototype.change = function(){
       this.x = 100*(Math.floor(Math.random()*4)+1);
       this.y = 100*(Math.floor(Math.random()*4)+1);
       this.sprite = c[level];  
}
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
var player = function(){
    this.x = 200;
    this.y = 300;
    this.sprite = 'images/char-boy.png';
} 

player.prototype.reset = function(){
    this.x = 200;
    this.y = 300;
    this.sprite = char;
}

player.prototype.lost = function(){
    player.reset();
    //alert("U Lost")
    flag = true
  
        //      ctx.font = "36pt Impact";
        // ctx.fillText("u lost",250,500);
}

player.prototype.handleInput = function(direction){
if(direction == 'left'){
    if(this.x <= 0)
        this.x += 50;
    this.x -= 50;
}
if(direction == 'up'){
    if(this.y <= 0){
        flag = false
        this.y += 50;
        score = score + 10;
        times = times + 1;
        if(times > 2){
          tot = tot + score;
         level = level + 1;
         score = 0;
         times = 0;
        }
        player.reset();
    }
    this.y -= 50;
}
if(direction == 'right'){
    if(this.x >= 400)
        this.x -= 50;
    this.x += 50;
}
if(direction == 'down'){
    if(this.y >= 400)
        this.y -= 50;
    this.y += 50;
}
if(direction == 'd'){
  this.x = 200;
    this.y = 300;
    this.sprite = 'images/char-boy.png';
       char = 'images/char-boy.png';
}
if(direction == 'c'){
  this.x = 200;
    this.y = 300;
    this.sprite = 'images/char-pink-girl.png';
       char = 'images/char-pink-girl.png';
}
}

player.prototype.update = function(dt){

}

player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [
new Enemy(100,200),
new Enemy(200,50),
new Enemy(100,70),
new Enemy(0,150)
];
// Place the player object in a variable called player
var allStar = [
new Star(200,100),
new Star(50,200)
];
var player = new player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        67: 'c',
        68: 'd'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
