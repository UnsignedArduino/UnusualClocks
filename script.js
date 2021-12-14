let width;
let height;

const allClockClasses = [TextClock];
let clocks = [];

function setup() {
  // Make it fit nicely on screen without scrolling
  width = windowWidth - 20;
  height = windowHeight - 25;
  createCanvas(width, height);
  // Make clocks
  for (let ClockClass of allClockClasses) {
    clocks.push(new ClockClass());
  }
}

function draw() {
  background(240);
  // Update all clocks
  for (let clock of clocks) {
    clock.update();
  }
  // Draw all the clocks
  for (let clock of clocks) {
    clock.draw(10, 10, 200, 40);
  }
}
