// DVD Bounce - The Office Shoutout
// Dan Schellenberg
// Feb 15, 2018

// global variables
let x, y, radius;
let dx, dy;
let dvd, dvdColor;
let state;

function preload() {
  dvd = loadImage("images/ball.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  radius = 50;
  dx = random(2, 5);
  dy = random(2, 5);
  dvdColor = color(0);
  state = 1;
}

function draw() {
  background(255);
  displayStartScreen();
}

function displayStartScreen() {
  fill("green");
  rect(width / 2 - 250, height / 2 - 150, 500, 300);
  textSize(108);
  fill("white");
  text("Play", width / 2 - 128, height / 2);
  if (state === 2) {
    background("white");
    moveThing();
    displayThing();
  }
}

function mouseClicked() {
  if (state === 1) {
    if (mouseX >= width / 2 - 250 && mouseX <= width / 2 + 250 && mouseY >= height / 2 - 150 && mouseY <= height / 2 + 150) {
      state = 2;
    }
  }
}

function moveThing() {
  x += dx;
  y += dy;

  //check if bounce required
  if (y + dvd.height / 2 >= height || y - dvd.height / 2 <= 0) {
    dy = dy * -1;
    dvdColor = color(random(255), random(255));
  }

  if (x + dvd.width / 2 >= width || x - dvd.width / 2 <= 0) {
    dx = dx * -1;
    dvdColor = color(random(255), random(255));
  }
}

function displayThing() {
  fill(0);
  // ellipse(x, y, radius * 2, radius * 2);
  imageMode(CENTER);
  tint(dvdColor);
  image(dvd, x, y);
}
