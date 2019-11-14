  //You Must Change TWO Variables to Scale the House
var houseWidth = 250;
var houseHeight = 150;


function setup() {
  // put setup code here
  createCanvas(800,600);
}

function draw() {
  // put drawing code here
  //Background
  strokeWeight(0);
  background(153,217,234); //The Sky
  fill(255,255,0);
  ellipse(75,75,100); //Sun
  fill(255,255,255);
  //Clouds
  ellipse(250,50,200,50);
  ellipse(200,70,170,50);
  ellipse(300,80,180,60);
  ellipse(700,70,170,50);
  ellipse(650,100,170,50);
  ellipse(750,90,170,50);


  // Building
  //Ground
  strokeWeight(1);
  fill(28, 201, 40);
  rect(0, 550, 800, 100);

  // House
  fill (240,230,180);
  rect(houseWidth/1.4,houseHeight*1.2,houseWidth,houseHeight);

  // Chimney
  fill(240, 138, 22);
  rect(houseWidth*1.52,houseHeight*0.7,houseWidth/10,houseHeight/3);
  fill(255,255,255);
  strokeWeight(0);
  ellipse(houseWidth*1.5,houseHeight*0.5,houseWidth*0.145,houseHeight*0.2);
  ellipse(houseWidth*1.4,houseHeight*0.3,houseWidth*0.13,houseHeight*0.18);
  ellipse(houseWidth*1.3,houseHeight*0.1,houseWidth*0.115,houseHeight*0.16);

  // Roof
  strokeWeight(1)
  fill(185,122,87);
  triangle(houseWidth*0.65,houseHeight*1.2,houseWidth*1.2,houseHeight*0.6,houseWidth*1.78,houseHeight*1.2);

  // Garage
  fill(240,230,180);
  rect(houseWidth*1.715,houseHeight*1.5,houseWidth/2.333,houseHeight*0.7);

  // Garage Roof
  fill(185,122,87);
  triangle(houseWidth*1.715,houseHeight*1.5,houseWidth*1.715,houseHeight*1.3,houseWidth*2.15,houseHeight*1.5);

   // Objects
   //Door
  rect(houseWidth*0.9,houseHeight*1.8,houseWidth*0.2,houseHeight*0.4);

  //Doorknob
  fill (186, 161, 20);
  ellipse(houseWidth*1.06,houseHeight*2,houseWidth*0.05);

  //Window Topleft
  fill(153,217,234);
  rect(houseWidth*0.8,houseHeight*1.35,houseWidth/5,houseHeight/3.5);
  strokeWeight(1.5)
  line(houseWidth*0.8,houseHeight*1.5,houseWidth,houseHeight*1.5);
  line(houseWidth*0.9,houseHeight*1.63,houseWidth*0.9,houseHeight*1.35);

  //Window TopRight
  strokeWeight(1);
  rect(houseWidth*1.43,houseHeight*1.35,houseWidth/5,houseHeight/3.5);
  strokeWeight(1.5)
  line(houseWidth*1.43,houseHeight*1.495,houseWidth*1.63,houseHeight*1.495);
  line(houseWidth*1.535,houseHeight*1.63,houseWidth*1.535,houseHeight*1.35);

  //Window BottomRight
  strokeWeight(1);
  rect(houseWidth*1.43,houseHeight*1.8,houseWidth/5,houseHeight/3.5);
  strokeWeight(1.5);
  line(houseWidth*1.43,houseHeight*1.95,houseWidth*1.63,houseHeight*1.95);
  line(houseWidth*1.535,houseHeight*1.8,houseWidth*1.535,houseHeight*2.08);

  //Garage Door
  fill(214, 213, 208);
  rect(houseWidth*1.75,houseHeight*1.6,houseWidth/2.8,houseHeight*0.6);
  line(houseWidth*1.75,houseHeight*1.75,houseWidth*2.105,houseHeight*1.75);
  line(houseWidth*1.75,houseHeight*1.9,houseWidth*2.105,houseHeight*1.9);
  line(houseWidth*1.75,houseHeight*2.05,houseWidth*2.105,houseHeight*2.05);



  noLoop();
}
