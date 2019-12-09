//This is player One
var x1 = 100;
var y1 = 100;
//This is player Two
var x2 = 400;
var y2 = 400;

function setup() {
  // put setup code here
  createCanvas(800,600);
}

function draw() {
  // put drawing code here
  background(108, 160, 245);
  //Player One
  fill(0,0,255);
  ellipse(x1,y1,50,50);
  //Player Two
  fill(255,0,0);
  rect(x2,y2,50,50);
  //Calls on function playerOne which makes the ellipse move
  playerOne();
  //Calls on function playerTwo which will make the square move
  playerTwo();

  /*if (x1 > x2 - 40 && y1 > y2 - 4){
    x1=x1-10;
    x2=x2+10;
    y1=y1-10;
    y2=y2-10;
  */
  print("X1:",x1);
  print("X2:",x2);
  print("Y1:",y1);
  print("Y2:",y2);

}


function playerOne(){

    if(keyIsDown(68)){
      x1 = x1+5;
    }
    if(keyIsDown(65)){
      x1 = x1-5;
    }
    if(keyIsDown(83)){
      y1 = y1+5;
    }
    if(keyIsDown(87)){
      y1 = y1-5;
    }
}

function playerTwo(){
  if(keyIsDown(76)){
    x2 = x2+5;
  }
  if(keyIsDown(74)){
    x2 = x2-5;
  }
  if(keyIsDown(75)){
    y2 = y2+5;
  }
  if(keyIsDown(73)){
    y2 = y2-5;
  }
}
