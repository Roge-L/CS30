// Project Name
// Roger Lam
// Month Day, Year

function setup() {
  // put setup code here
}

function draw() {
  // put drawing code here
}

function factorial(n) {
  if (n === 1) {
    return 1;
  }
  else {
    return n * factorial(n - 1);
  }
}

factorial(5);
