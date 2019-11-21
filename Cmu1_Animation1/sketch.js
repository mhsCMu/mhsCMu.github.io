  //This variable changes the position of my object
  var X = 50;
  var Y = 50;
  var X2 = 750;
  var Y2 = 550;

  //This variable makes gravity
  var Gravity = 2;

  //This variable is the speed of the object
  var xspeed = 8;
  var yspeed = 8;
  var x2speed = 9;
  var y2speed = 9;

function setup() {
  // put setup code here
  createCanvas(800,600);
}

function draw() {
  // put drawing code here
  background(0, 221, 255);

  //Draw the ellipse
  fill(0,255,0);
  ellipse(X,Y,100,100);
  fill(255,0,0);
  rect(X2,Y2,50,50);

  //Border
  if (Y>550 || Y<50)
  {
    yspeed = -yspeed;
  }
  if (X>750 || X<50)
  {
    xspeed = -xspeed;
  }
  if (Y2>550 || Y2<0)
  {
    y2speed = -y2speed;
  }
  if (X2>750 || X2<0)
  {
    x2speed = -x2speed;
  }

  //Speed
  Y=Y+yspeed;
  X=X+xspeed;
  Y2=Y2+y2speed;
  X2=X2+x2speed;
}
