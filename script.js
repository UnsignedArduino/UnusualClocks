let width;
let height;

let clocks = [];

let clockFont;

// Helper function to construct class and add to list 
// of clocks
function makeClock(clockClass, x, y, width, height) {
  let clock = new clockClass()
  clock.x = x;
  clock.y = y;
  clock.width = width;
  clock.height = height;
  clocks.push(clock);
  return clock;
}

function preload() {
  clockFont = loadFont("assets/UbuntuMono-Regular.ttf");
}

function setup() {
  // Make it fit nicely on screen without scrolling
  width = windowWidth - 20;
  height = windowHeight - 25;
  createCanvas(width, height);
  // Make clocks
  makeClock(TextClock, 10, 10, 200, 50);
  makeClock(HexClock, 220, 10, 200, 50);
}

function draw() {
  background(240);
  // Update and draw all the clocks
  for (let clock of clocks) {
    clock.update();
    clock.draw(clock.x, clock.y, clock.width, clock.height);
  }
}
