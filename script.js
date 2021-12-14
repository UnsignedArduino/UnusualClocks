let width;
let height;

let clocks = [];

let textClock;

// Helper function to construct class and add to list 
// of clocks
function makeClock(clockClass) {
  let clock = new clockClass()
  clocks.push(clock);
  return clock;
}

function setup() {
  // Make it fit nicely on screen without scrolling
  width = windowWidth - 20;
  height = windowHeight - 25;
  createCanvas(width, height);
  // Make clocks
  textClock = makeClock(TextClock);
}

function draw() {
  background(240);
  // Update all clocks
  for (let clock of clocks) {
    clock.update();
  }
  // Draw all the clocks
  textClock.draw(10, 10, 200, 50);
}
