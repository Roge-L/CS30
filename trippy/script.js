// global variables
let distance;

function setup() {
  createCanvas(windowWidth, windowHeight);
  distance = 100;
}

function draw() {
  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 8; i++) {
      point(distance*i,distance*j);
    }
  }
}
