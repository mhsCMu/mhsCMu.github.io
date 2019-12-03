//Create a variable for the size of the ellipse
var size = 50;

function setup() {
  // put setup code here
  createCanvas(1000,800);
}

function draw() {
  // put drawing code here
  //background(255,255,255,10);
  //To see other objects, simply delete the double slash
  //Continuesly check to see if the mouse button is pressed
  if(mouseIsPressed) {
    //Draw an ellipse at the current mouse location
    //Use two new variables --> mouseX and mouseY
    //ellipse(mouseX, mouseY,size);
    //Complex Shape
    triangle(mouseX-20, mouseY-10, mouseX-10, mouseY+5, mouseX, mouseY-10, size)
    triangle(mouseX, mouseY, mouseX-10, mouseY-15, mouseX-20, mouseY, size);
    //Random Lines
    //line(random(0,1000),random(0,800),mouseX,mouseY);
  }

}

//Have the program react to a mouse button being pressed
function mousePressed(){
  //Change the color when the mouse button is pressed
  strokeWeight(random(1,1));
  fill(random(0,255), random(0,255), random(0,255));
}

//Change the size of the ellipse when the mouse is pressed
function mouseReleased(){
  size = random(5,100);
}

