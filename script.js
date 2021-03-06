/*

TODO:

- Add clocks for second, minute, hour, and day of week
- Add clocks for second, minute, hour, and day left of week
- Add clocks for second, minute, hour, day, and week of month
- Add clocks for second, minute, hour, day, and week left of month
- Add clocks for second, minute, hour, day, week, and month of year
- Add clocks for second, minute, hour, day, week, and month left of year

*/

"use strict";

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

// Recalculates size of screen
function calculateSize() {
  width = window.innerWidth - widthPad;
  height = window.innerHeight - heightPad;
}

// Resize everything
function resize() {
  // Recalculate all the scale and stuff
  calculateSize();
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
  while (rightest * scale < width) {
    scale += 0.01;
  }
  while (rightest * scale > width) {
    scale -= 0.01;
  }
  scale = round(scale, 3);
  resizeCanvas(width, bottomest * scale);
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
  makeClock(BinClock, 10, 170, 410, 30);
  makeClock(UTCClock, 10, 210, 410, 80);
  makeClock(UTCSigned32OverflowCountdownClock, 10, 300, 200, 50);
  makeClock(UTCUnsigned32OverflowCountdownClock, 220, 300, 200, 50);
  makeClock(MorseClock, 10, 360, 410, 20);
  makeClock(ASCIIClock, 10, 390, 200, 30);
  makeClock(ScientificClock, 220, 390, 200, 30);
  makeClock(MathClock, 10, 430, 410, 30);
  makeClock(SecondPercentage, 10, 470, 130, 50);
  makeClock(MinutePercentage, 150, 470, 130, 50);
  makeClock(HourPercentage, 290, 470, 130, 50);
  makeClock(DayPercentage, 10, 530, 130, 50);
  makeClock(MonthPercentage, 150, 530, 130, 50);
  makeClock(YearPercentage, 290, 530, 130, 50);
  makeClock(SecondOfDayClock, 10, 590, 130, 50);
  makeClock(MinuteOfDayClock, 150, 590, 130, 50);
  makeClock(HourOfDayClock, 290, 590, 130, 50);
  makeClock(SecondsLeftOfDayClock, 10, 650, 130, 50);
  makeClock(MinutesLeftOfDayClock, 150, 650, 130, 50);
  makeClock(HoursLeftOfDayClock, 290, 650, 130, 50);
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
  let now = new Date();
  for (let clock of clocks) {
    clock.update(now);
    clock.draw(clock.x * scale, clock.y * scale, 
               clock.width * scale, clock.height * scale);
  }
}
