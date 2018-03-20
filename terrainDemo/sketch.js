// Title
// Roger Lam
// March 5, 2018

// global variables

// the preload function guarentees that the code inside the function is
// executed before the rest of the program runs -- helpful for things
// like loading images
let heights = [];
let numberOfRectangles;
let flag;
let rectWidth;

// the setup function will only run once (before the draw loop begins)
// this is where you want to set up the environment (size of canvas, etc)
function setup() {
  createCanvas(windowWidth, windowHeight);
  numberOfRectangles = width;
  generateInitialTerrain(numberOfRectangles);
  flag = loadImage("assets/flag.png");
}

//
function draw() {
  background(255);
  plantFlag();
  displayTerrain();
}

function plantFlag() {
  let highestX;
  let tallest = 0;
  rectWidth = width / numberOfRectangles;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] > tallest) {
      tallest = heights[i];
      highestX = i * rectWidth;
    }
  }

  // height line
  let highestY = height - tallest;
  stroke("red");

  image(flag, highestX, highestY - flag.height, 30, 30);
}

function generateInitialTerrain(numberOfRectangles) {
  let time = 0;
  let dt = 0.01;
  for (let i = 0; i < numberOfRectangles; i++) {
    let currentHeight = noise(time) * 500;
    heights.push(currentHeight);
    time += dt;
  }
}

function displayTerrain() {
  rectMode(CORNERS);
  fill(0);
  stroke(0);
  for (let i = 0; i < numberOfRectangles; i++) {
    rect(i * rectWidth, height, (i + 1) * rectWidth, height - heights[i]);
  }
}
