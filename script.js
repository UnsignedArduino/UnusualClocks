/* TODO:
 - base 2 (binary) clock 
 - morse code (prints out . or - like binary clock)
 - math equations clock (+, -, *, /)
 - have them scale to screen size
 - make "box priority" which makes some bigger then others
    - decimal should be 3x
    - hex should be 2x
    - oct should be 1x
    - bin should be 0.5x
    - morse should be 0.5x
*/

const widthPad = 20;
const heightPad = 25;

let width;
let lastWidth;
let height;
let lastHeight;
let scale = 1;

let bottomest = 0;
let rightest = 0;

let clocks = [];

let clockFont;

// Helper function to construct class and add to list 
// of clocks
function makeClock(clockClass, x, y, width, height) {
  let clock = new clockClass();
  // Store the positions on them so we can reference them easily
  clock.x = x;
  clock.y = y;
  clock.width = width;
  clock.height = height;
  clocks.push(clock);
  return clock;
}

function calculateSize() {
  width = windowWidth - widthPad;
  height = windowHeight - heightPad;
}

function resize() {
  // Recalculate all the scale and stuff
  calculateSize();
  resizeCanvas(width, height);
  // Calculate right/bottom most coords
  rightest = 0;
  bottomest = 0;
  for (let clock of clocks) {
    if (clock.x + clock.width > rightest) {
      rightest = clock.x + clock.width;
    }
    if (clock.y + clock.height > bottomest) {
      bottomest = clock.y + clock.height;
    }
  }
  rightest += 10;
  bottomest += 10;
  // Increase or decrease scale if needed
  while (bottomest * scale < height && 
         rightest * scale < width) {
    scale += 0.01;
  }
  while (bottomest * scale > height && 
         rightest * scale > width) {
    scale -= 0.01;
  }
  scale = round(scale, 3);
}

function preload() {
  clockFont = loadFont("assets/UbuntuMono-Regular.ttf");
}

function setup() {
  calculateSize();
  createCanvas(width, height);
  // Make clocks
  makeClock(TextClock, 10, 10, 410, 90);
  makeClock(HexClock, 10, 110, 200, 50);
  makeClock(OctClock, 220, 110, 200, 50);
  makeClock(BinClock, 10, 170, 410, 40);
  resize();
}

function draw() {
  // Do resizing if needed
  calculateSize();
  if (width != lastWidth || height != lastHeight) {
    resize();
  }
  background(240);
  // Update and draw all the clocks
  for (let clock of clocks) {
    clock.update();
    clock.draw(clock.x * scale, clock.y * scale, 
               clock.width * scale, clock.height * scale);
  }
}
