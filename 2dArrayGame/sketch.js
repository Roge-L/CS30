// Title
// Roger Lam
// March 5, 2018

// global variables

// the setup function will only run once (before the draw loop begins)
// this is where you want to set up the environment (size of canvas, etc)
function setup() {
  createCanvas(windowWidth, windowHeight);
}

//
function draw() {
  background(255);
  print(double23([3, 3]));
}

function double23(nums) {
  return (nums === [2, 2] || nums === [3, 3]);
}
