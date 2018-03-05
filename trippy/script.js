// global variables
let distance;

function setup() {
  createCanvas(windowWidth, windowHeight);
  distance = 50;
}

function draw() {
  background(0);
  displayDots();
}

function displayDots() {
  for (let x = distance; x < width; x += distance) {
    for (let y = distance; y < height; y += distance) {
      fill(255);
      ellipse(x, y, 5, 5);
      line(x, y, windowWidth / 2, windowHeight / 2);
      stroke(random(0, 255), random(0, 255));
    }
  }
}
