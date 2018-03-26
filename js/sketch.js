//Setup of variables
let r = 0;
let g = 0;
let b = 0;
let speed = 50;
let diameter = 50;
let x1;
let y1;
let x2;
let y2;
var value = false;
var valueColor = false;

//Initialization function
//Canvas size
  function setup() {
  var canvas = createCanvas(594, 841);

//Name the following code to make it link to my index file.
  canvas.parent("myContainer");

//On setup ellipse appears in the middle of the screen.
  x1 = width/2;
  y1 = height/2;
  x2 = width/2;
  y2 = width/2;

//Re maps the value of x1 and y1. New values will be constrained within 0 and half the width and height.
  {let x1 = map(height, 0, width, 0, width/2);
    let y1 = map(width, 0, height, height/2, 0);}

//Original background colour when the webpage is refreshed.
    background(00);
  }

//Press the enter key to change the values of r, g, b based on the valueColor variable.
  function keyPressed() {
    if (keyCode === ENTER && valueColor == false) {
      valueColor = true;
    }
    else if (keyCode === ENTER && valueColor == true) {
      valueColor = false;
    }
  }

//Let computer know if the mouse is being clicked or not using value as boolean.
//Console log used for debugging.
  function mouseClicked(){
    if (value == false){
      value = true;
      console.log("change to true");
    }
    else if (value == true) {
      value = false;
      console.log("change to false")
    }
  }
//Rendering function
  function draw() {
//Fill replaces the background colour over a period of time.
//The first number denotes the colour of the background image which continuously recurs.
//The bigger the second number, the quicker the the images are replaced.
    fill(255, 1);
//Size of canvas that is being replaced.
    rect(0, 0, width, height);

//Add to xy, y1, x2 and y2 a random movement between -5 to 5 for each frame due to the speed variable set at 5.
//This makes the position of the shape move organically within those given parameters.
//The constrain function will make sure that x1 and y1 will always
//stay within the boundaries of the sketch canvas.
    x1 += random(-speed, speed);
    y1 += random(-speed, speed);
    x1 = constrain(x1, 0, width-100);
    y1 = constrain(y1, 0, height);
    x2 = constrain(x2, 0, width-100);
    y2 = constrain(y2, 0, height);

//Mirrors the position of x1 and assigns value to x2.
    x2=500-x1;
    y2=500-y1;


//To make value true, enter key must be pressed.
//If value is true, then the colour of the shape will randomise
//until value is false, which requires for the enter key to be pressed again.
    if (valueColor == true) {
      r = random(255);
      g = random(255);
      b = random(255);
    }

//Set up of second set of variables.
//MouseY2 is the scale.
    var mouseY2;
//Middle2 and middle are used to centralize the shapes on the screen.
    var middle2 = 50;
    var middle = 150;


//If the position of the mouse on the Y axis is smaller than 50, then make the scale 1 (original).
    if (mouseY < 50) {
      mouseY2 = 1;
    }
//If this is not the case, then make the scale divided by 800 to create a smaller size.
//The scale depends on the position of mouseY.
    else  {
      mouseY2 = mouseY/800;
    }
    scale(mouseY2);

//If value is false, which is not mouse not clicked, then create ellipses.
//This is automatically why the webpage opens on ellipses not rectangles.
//Because the mouse has not yet been clicked to change to rectangles.
//Translate used to handle difference of origin points for rect.
    if (value == false) {

      fill (r, g, b);
      ellipse(x1+middle2, y1+middle, diameter, diameter);
      ellipse(x2+middle2, y1+middle, diameter, diameter);
      ellipse(x1+middle2, y2+middle, diameter, diameter);
      ellipse(x2+middle2, y2+middle, diameter, diameter);

//Duplicate original set of circles, move 90 degrees and place.
      push()
      rotate(radians(90));
      translate(0, -500);

      ellipse(x1+middle, y1-middle2, diameter, diameter);
      ellipse(x2+middle, y1-middle2, diameter, diameter);
      ellipse(x1+middle, y2-middle2, diameter, diameter);
      ellipse(x2+middle, y2-middle2, diameter, diameter);
      pop()
    }
//If value is true, which is not mouse clicked, then create rectangles.
//Translate used to handle difference of origin points for rect.
    else if (value == true) {
      fill(r, g, b);
      translate(-25, -25);
      rect(x1+middle2, y1+middle, diameter, diameter);
      rect(x2+middle2, y1+middle, diameter, diameter);
      rect(x1+middle2, y2+middle, diameter, diameter);
      rect(x2+middle2, y2+middle, diameter, diameter);

//Duplicate original set of rectangles, move 90 degrees and place.
      push();
      rotate(radians(90));
      translate(0, -550);

      rect(x1+middle, y1-middle2, diameter, diameter);
      rect(x2+middle, y1-middle2, diameter, diameter);
      rect(x1+middle, y2-middle2, diameter, diameter);
      rect(x2+middle, y2-middle2, diameter, diameter);
      pop();
    }
  }
