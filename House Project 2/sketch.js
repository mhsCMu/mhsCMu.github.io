function setup() {
  // put setup code here
  createCanvas(800,900);
  background(153,217,234);
}

function draw() {
  // put drawing code here
  /*To view each function, first put double slashes in front of the other
  functions so that they are grayed out and wouldn't cause the functions to
  overlay each other*/
  //This calls on drawHouse to draw a house
  //drawHouse(200,150,100,100);
  //This calls on the drawBlock function
  //drawBlock(100,150,100,100);
  //This calls on the drawNeighborhood function
  drawNeighborhood(100,50,100,100);
}

function drawHouse(housex, housey, housew, househ){
  //The Building
  fill(240,230,180);
  rect(housex,housey,housew,househ);
  //The roof
  fill(185,122,87);
  triangle(housex, housey, (housex+housex+housew)/2, housey-househ/2, housex+housew, housey);
}

function drawBlock(blockx, blocky){
  /*This function will draw 4 houses in a row using blockx and blocky, which is defined
  in the draw function, in this case, blockx and blocky is 100 and 50*/
  drawHouse(blockx,blocky,100,100);
  drawHouse(blockx+150,blocky,100,100);
  drawHouse(blockx+300,blocky,100,100);
  drawHouse(blockx+450,blocky,100,100);
}

function drawNeighborhood(blockx, blocky){
  /*This function will draw a neighborhood from six blocks from the top to
  the bottom, again, using blockx and blocky*/
  drawBlock(blockx,blocky,100,100);
  drawBlock(blockx,blocky+150,100,100);
  drawBlock(blockx,blocky+300,100,100);
  drawBlock(blockx,blocky+450,100,100);
  drawBlock(blockx,blocky+600,100,100);
  drawBlock(blockx,blocky+750,100,100);
}
