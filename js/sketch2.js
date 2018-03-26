//https://api.openaq.org/v1/cities

//Use a text/string object to assign the city we would like to know the pollutant count.

//Setup of variables
let airQuality;
let value = false;
let randomCity = 0;
let circleArray = [];
let arraySize;
let randR = 0;
let randG = 0;
let randB = 0;


//The preload function is executed before initializing the code in setup.
//Loads the data I will be using.
function preload() {
//The URL is formatted according to the documentation provided by the developers in:
//https://api.openaq.org/v1/cities
  let url = "https://api.openaq.org/v1/cities";
//The URL is sent to the loadJSON that returns the data to the city and air count variable.
  airQuality = loadJSON(url);
}

function setup() {
//Return all JSON data in console.
console.log(airQuality);
  console.log(randomCity);
  console.log(airQuality.results.length);
for (i = 0; i < airQuality.results.length; i++){
    console.log("City Name is " + airQuality.results[i].city );
  }

//Define canvas size, background colour, text position and text size.
  var canvas = createCanvas(innerWidth, innerHeight);
  canvas.parent('myContainer2');
  background(255);
  textAlign(CENTER);
  textSize(30);
//Generating random colours for default state.
  randR = random(255);
  randG = random(255);
  randB = random(255);

//The following randomizes the city each time the page is loaded.
//"Round" ensures the number is an integer so that a link can be made
// to the data as the data contains no decimals.
  randomCity = round(random(airQuality.results.length));
//Sets array size of visual data to coincide with the pollutant count.
  arraySize = airQuality.results[randomCity].count/1000;
  for (let i=0; i<arraySize; i++){
//The following line defines the initial starting position, speed of circles on x and y axis and size of circles.
    circleArray[i] = new Circle(width/2, height/2, random(-5, 5), random(-5, 5), random(10, 100));
  }

}
function draw(){
background(255);

//Every time i is less than length of circle array this statement runs.
  for (let i=0; i<circleArray.length; i++){
    circleArray[i].moveFunction();
    circleArray[i].displayCircle();
  }
//Display city and air pollutant count information on the screen.

//This uses random numbers generating in setup to allocate a random colour to the text.
fill (randR, randG, randB);
text("Air Pollutant Count of " + airQuality.results[randomCity].city + " is " + airQuality.results[randomCity].count, width/2, 100 );
}

//When mouse is clicked the parameters such as fill and the data will change to another city at random.
function mouseClicked(){
  if (value == false){
    value = true;
    randomCity = round(random(airQuality.results.length));
    background(255);

    value = false;
    randR = random(255);
    randG = random(255);
    randB = random(255);
    console.log(randomCity);

//Set size of the array as the number of pollutants divided by 1000.
//When mouse is clicked the array set below will recur each time.
    circleArray = [];
    arraySize = airQuality.results[randomCity].count/1000;
    for (let i=0; i<arraySize; i++){
      circleArray[i] = new Circle(width/2, height/2, random(-5, 5), random(-5, 5), random(10, 100));
    }
    fill (randR, randG, randB);
    text("Air Pollutant Count of " + airQuality.results[randomCity].city + " is " + airQuality.results[randomCity].count, width/2, 100 );

  }
}

//Set up order of constructor within the class.
class Circle{
  constructor(x, y, speedX, speedY, size){
//Setup of class' variables.
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.size = size;

//Randomize the colours of the circles between different shades of grey.
//Set "randomGrey" as a variable so that all colours have the same value when randomized.
    let randomGrey = random(200);

    this.rd = randomGrey;
    this.grn = randomGrey;
    this.bl = randomGrey;
    this.a = 150;
  }

//Class function that controls motion and collision.
  moveFunction(){
//Motion system - current position and speed.
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;

//Based on boundaries collision, reverse direction for x and y.
    if (this.x > width || this.x<0){
      this.speedX *= -1;
    }
    if (this.y > (height) || this.y<0){
      this.speedY *= -1;
    }
  }

//Class function that displays the ellipse
  displayCircle(){
    noStroke();
    this.fillcol = color(this.rd, this.grn, this.bl, this.a)
    fill(this.fillcol);
    ellipse(this.x, this.y, this.size, this.size);
  }
}
