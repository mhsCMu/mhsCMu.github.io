//Creare an array to store the variables for the meteor
var meteor = [];

//Create an array of values of the color for a collision, in this case, it's brown
var collisionColor = [150,75,0,255];

//Create a variable for the point that will be used to check for collision
var checkColor;

//Variable that will determine whether a collision has taken place
var kaboom;

//Create the levels for the game
var level = 0;

//Make a timer to start the game
var counter = 0;
var seconds = 3;

//Make the player immune to damage in the first three seconds
var invCounter = 0;
var invty = 3;

//Set the player location
var playerX;
var playerY;
var playerWidth = 70;
var playerHeight = 50;
var playerHit;

//Create the Scoreboard that stores the player distance
var scoreboardWidth = 45;

//This variable will store the distance travelled by the player
var distance = 0;

//These are the win conditions for each level
var winCond;
var winCond2;
var winCond3;

//These variables stores the sound effects and sprite of my game
let bgm;
let cheering;
let gameOver;
let sprite;
let title;

function preload() {
  bgm = loadSound('Game BGM.mp3')
  cheering = loadSound('Win Sound Effect.mp3')
  gameOver = loadSound('Death Sound Effect.mp3')
  sprite = loadImage('game sprite good.png')
  title = loadImage('Game Title.png')
}

function setup() {
  // put setup code here
  createCanvas(800,600);
  bgm.loop();

  for (var i = 0; i < 35; i++) {
    var x = random(width);
    var y = random(0, 50);
    var d = random(40, 50);
    var c = color(collisionColor);
    var s = random(3,4);
  	meteor[i] = new DrawMeteor(x, y, d, c, s);
  }

  playerX = width/2;
  playerY = height/1.2;
}

function draw() {
  // put drawing code here

  //When the player presses Space, it prompts the player to Level 1
  if (keyIsDown(32)){
    level = 1;
  }

  //Press 2 for level 2
  if (keyIsDown(50)){
    level = 2;
  }

  //Press 3 for level 3
  if (keyIsDown(51)){
    level = 3;
  }

  //When the player presses T, it will prompt the player to the Instructons level
  if (keyIsDown(73))(
    level = -1
  )

  //When Return is pressed, it will prompt the player to the main screen
  if (keyIsDown(13))(
    level = 0
  )

  //This is the starting screen of the game
  if (level == 0){
    imageMode(CORNER);
    image(title,0,0,820,500);
    distance = 0;
    counter = 0;
    seconds = 3;
    invty = 3;
    invCounter = 0;

    background(0, 70);
    fill(255);
    textSize(30);
    text("Press Space To Start", 250, 500);
    textSize(30);
    text("Press I for Instructions", 250, 550);
  }

  //Tutorial of the game
  else if (level == -1){

    background(0, 70);
    fill(255);
    textSize(60);
    text("Instructions", 250, 100);
    textSize(35);
    text("Use your cursor to avoid the Asteriods", 100, 300);
    textSize(35);
    text("You will die if you touch an Asteriod", 110, 350);
    textSize(35);
    text("You are invincible for first three seconds", 90, 400);
    textSize(35);
    text("Reach 1000 to beat Level 1", 160, 450);
    textSize(30);
    text("Press Return to return", 250, 550);
  }

  //First Level
  else if (level == 1){
    checkColor = get(mouseX, mouseY);
    kaboom = colorCollide(collisionColor,checkColor);
    background(0);
    winCond = 1000;
    counter = counter + 1;
    drawPlayer();
    movePlayer();

    if (counter%60 == 0){
      seconds = seconds - 1;
    }

    fill(255);
    textSize(40);
    text(seconds, 380, 300);

    if (seconds == 0){
      counter = 0;
      background(0);
      fill(130, 130, 130);
      rect(720,10,scoreboardWidth,25);
      invTimer();
      invincibility();
      drawPlayer();
      winLevel();
      death();
      playerDistance();

      for (var i = 0; i < meteor.length; i++) {
      	meteor[i].move();
        meteor[i].display();
      }

      if (meteor.length > 35) {
      	meteor.shift();
      }
    }
  }

  //Second Level
  else if (level == 2){

    checkColor = get(mouseX, mouseY);
    kaboom = colorCollide(collisionColor,checkColor);
    background(0);
    counter = counter + 1;
    drawPlayer();
    movePlayer();

    if (counter%60 == 0){
      seconds = seconds - 1;
    }

    fill(255);
    textSize(40);
    text(seconds, 380, 300);

    if (seconds == 0){
      counter = 0;
      background(0);
      fill(130, 130, 130);
      rect(720,10,scoreboardWidth,25);
      invTimer();
      invincibility();
      drawPlayer();
      winLevel();
      death();
      playerDistance();


      for (var i = 0; i < meteor.length; i++) {
      	meteor[i].move();
        meteor[i].display();
      }

      if (meteor.length > 35) {
      	meteor.shift();
      }
    }
  }

  //Third Level
  else if (level == 3){

    checkColor = get(mouseX, mouseY);
    kaboom = colorCollide(collisionColor,checkColor);
    background(0);
    counter = counter + 1;
    drawPlayer();
    movePlayer();

    if (counter%60 == 0){
      seconds = seconds - 1;
    }

    fill(255);
    textSize(40);
    text(seconds, 380, 300);

    if (seconds == 0){
      counter = 0;
      background(0);
      fill(130, 130, 130);
      rect(720,10,scoreboardWidth,25);
      invTimer();
      invincibility();
      drawPlayer();
      winLevel();
      death();
      playerDistance();


      for (var i = 0; i < meteor.length; i++) {
      	meteor[i].move();
        meteor[i].display();
      }

      if (meteor.length > 50) {
      	meteor.shift();
      }
    }
  }

  //Lose Screen
  else if (level == -2){
    background(255, 0, 0, 70);
    fill(0);
    textSize(60);
    text("GAME OVER!", 210, 100);
    textSize(40);
    text("YOUR SHIP BLEW UP", 200, 400);
    textSize(30);
    text("Press Return to Restart Game", 200, 550);
  }

  //Win Screen
  else if (level == -3){
    background(0, 255, 0, 70);
    fill(0);
    textSize(60);
    text("YOU WON!", 260, 100);
    textSize(40);
    text("VERY EPIC", 300, 400);
    textSize(30);
    text("Press Return to Restart Game", 200, 550);
  }

  //When the player completes level 1, this level will display
  else if (level == -4){
    background(0, 255, 0, 70);
    fill(0);
    counter = 0;
    seconds = 3;
    invty = 3;
    invCounter = 0;
    winCond = -100;
    winCond2 = 2000;
    distance = 0
    textSize(60);
    text("Level Completed", 175, 100);
    textSize(40);
    text("Good Job!", 300, 400);
    textSize(30);
    text("Press 2 to Continue to Level 2", 200, 500);
    textSize(30);
    text("Reach 2000 to complete the level", 190, 550);
  }

  /*When the player completes level 2, this level will display. And when the
  player complets level three, it will prompt them to the Win Screen*/
  else if (level == -5){
    background(0, 255, 0, 70);
    fill(0);
    counter = 0;
    seconds = 3;
    invty = 3;
    invCounter = 0;
    winCond = -100;
    winCond2 = -200;
    winCond3 = 3000;
    distance = 0
    textSize(60);
    text("Level Completed", 175, 100);
    textSize(40);
    text("Good Job!", 300, 400);
    textSize(30);
    text("Press 3 to Continue to Level 3", 200, 500);
    textSize(30);
    text("Reach 3000 to complete the level", 190, 550);
  }

  print(scoreboardWidth);
  //print(level);
/*
  if (kaboom == true){
    print("KABOOM")
  }
*/
}

//Draw the player by calling upon the image
function drawPlayer(){
  fill(255);
  imageMode(CENTER);
  image(sprite, playerX , playerY , playerWidth, playerHeight);
}

//Move the player by moving the cursor
function movePlayer(){
  playerX = mouseX;
  playerY = mouseY + 10;
}

//When invincibility runs out, start adding one to distance every frame
function playerDistance(){
  if(invty < 0){
    distance += 1;
  }

  fill(255);
  textSize(20);
  text(distance, 730, 30);

/*When distance reaches 99, 999, and 9999, the scoreboard will increase in size
so that the text will fit onto the board*/
  if (distance == 99){
    scoreboardWidth= scoreboardWidth + 10;
  }

  if (distance == 999 ){
    scoreboardWidth= scoreboardWidth + 10;
  }

  if (distance == 9999){
    scoreboardWidth= scoreboardWidth + 10;
  }

  //print(distance);
}

/*When the player distance reaches the Win Condition of the level, it will
change to the corresponding win screen*/
function winLevel(){
  if (distance == winCond){
    level = -4;
    distance = 0;
    scoreboardWidth = 45;
    cheering.play();
  }

  else if(distance == winCond2){
    level = -5;
    distance = 0;
    scoreboardWidth = 45;
    cheering.play();
  }

  else if(distance == winCond3){
    level = -3;
    distance = 0;
    scoreboardWidth = 45;
    cheering.play();
  }
}

//This function will set the varibles that will create asteroids
function DrawMeteor( x, y, d, c, s ) {
  this.xPos = x;
  this.yPos = y;
  this.diameter = d;
  this.color = c;
  this.speed = s;
}

//This is where the asteroids are drawn
DrawMeteor.prototype = {
	constructor: DrawMeteor,
  display: function() {
    fill(this.color);
    ellipse(this.xPos,this.yPos, this.diameter, this.diameter);
  },

  //Change the speed of the falling meteors so that after each level it gets faster
  move: function() {
    if(level == 0 || level == 1){
      this.yPos += this.speed
    }

    if(level == 2){
      this.speed = random(4,5);
      this.yPos += this.speed
    }

    if(level == 3){
      this.speed = random(6,7);
      this.yPos += this.speed
    }

    /*When the asteroids reach the bottom of the screen, it will reset their
    position back at the top*/
    if (this.yPos - this.diameter/2 > height) {
    	this.yPos = -this.diameter/2;
      this.xPos = random(width);
    }
  }
}

/*If player cursor hits the color brown, the game ends and the player will be
prompted to the game over screen*/
function death(){
  if (kaboom == true){
    level = -2
    gameOver.play();
  }
}

//Create a timer so that the player is immune for first three seconds
function invTimer(){
  invCounter = invCounter + 1;

  if (invCounter%60 == 0){
    invty = invty - 1;
  }
}

//Makes it so that the player is immune to damage by changing the collisionColor
function invincibility(){
  if(invty > 0){
    collisionColor = [0, 98, 255, 255]
    rect(10,10,25,25);
    fill(255);
    textSize(20);
    text(invty , 17, 30);
  }

  else if (invty < 0){
    collisionColor = [150,75,0,255]
  }
}
