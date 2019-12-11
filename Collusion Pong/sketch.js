var ballX = 400;
var ballY = 300;
var ballSize = 25;

var xSpeed = 5;
var ySpeed = 5;

var player1X = 10;
var player1Y = 250;
var player2X = 770;
var player2Y = 250;

var paddleWidth = 15;
var paddleHeight = 70;

var player1Hit = false
var player2Hit = false

var player1Score = 0;
var player2Score = 0;

var menu = 0;

function setup() {
  // put setup code here
  createCanvas(800,600)
}

function draw() {
  // put drawing code here

  if (keyIsDown(32)){
    menu = 1;
  }

  if (menu == 0){
    background(0,10);
    fill(255);
    textSize(60);
    text("Epic Pong Game", 170, 200);
    textSize(40);
    text("By Chenkai Mu", 250, 280);
    textSize(30);
    text("Press Space To Start", 250, 500);
    fill(random(0,255), random(0,255), random(0,255));
    ellipse(400,350,50);
  }

  else if (menu == 1){
    background(0);
    fill(255);
    rect(400,0,5,600);

    moveBall();
    bounce();
    drawPlayers();
    drawBall();
    hitPaddle();
    movePaddle();
    score();
    difficulty();
  }
}

//Move the Ball
function moveBall(){
  ballX = ballX + xSpeed;
  ballY = ballY + ySpeed;
}

//See if the ball should bounce
function bounce(){
  if (ballY > 588 || ballY < 12){
    ySpeed = -ySpeed;
  }
}

//Draw the ball
function drawBall(){
  fill(255,255,255);
  ellipse(ballX, ballY, ballSize);
}

//Draw playerOne
function drawPlayers(){
  fill(255);
  rect(player1X, player1Y, paddleWidth, paddleHeight);
  rect(player2X, player2Y, paddleWidth, paddleHeight);
}

//Check to see if the ball hit either the paddles
function hitPaddle(){
  player1Hit = collideRectCircle(player1X, player1Y, paddleWidth, paddleHeight, ballX, ballY, ballSize);
  player2Hit = collideRectCircle(player2X, player2Y, paddleWidth, paddleHeight, ballX, ballY, ballSize);

  if (player1Hit == true){
    xSpeed = -xSpeed;
    ballX = ballX + 2;
    ballY = ballY + 2;
  }

  if (player2Hit == true){
    xSpeed = -xSpeed;
    ballX = ballX - 2;
    ballY = ballY - 2;
  }

  print("Collusion:", player1Hit);
  print("Collusion2:", player2Hit);
}

function movePaddle(){

  if (keyIsDown(38)){
    player2Y = player2Y - 7;
  }

  if (keyIsDown(40)){
    player2Y = player2Y + 7;
  }

  if(keyIsDown(87)){
    player1Y = player1Y - 7;
  }

  if (keyIsDown(83)){
    player1Y = player1Y + 7;
  }
}

function score(){
  textSize(50);
  text(player1Score, 320, 100);

  textSize(50);
  text(player2Score, 450, 100);

  if (ballX > 788){
    ySpeed = -ySpeed;
    xSpeed = -xSpeed;
    ballX = 600;
    ballY = random(20,580);
    player1Score = player1Score + 1;
  }

  else if (ballX < 12){
    ySpeed = -ySpeed;
    xSpeed = -xSpeed;
    ballX = 400;
    ballY = random(20,580);
    player2Score = player2Score + 1;
  }
}

function difficulty(){
  if (player1Score == 10 || player2Score == 10){
    xSpeed = xSpeed * 1.0005;
    ySpeed = ySpeed * 1.0005;
  }
  if (player1Score == 20 || player2Score == 20){
    xSpeed = xSpeed * 1.0005;
    ySpeed = ySpeed * 1.0005;
  }
  if (player1Score == 30 || player2Score == 30){
    xSpeed = xSpeed * 1.0005;
    ySpeed = ySpeed * 1.0005;
  }
  if (player1Score == 40 || player2Score == 40){
    xSpeed = xSpeed * 1.0005;
    ySpeed = ySpeed * 1.0005;
  }
  if (player1Score == 50 || player2Score == 50){
    xSpeed = xSpeed * 1.0005;
    ySpeed = ySpeed * 1.0005;
  }
}
