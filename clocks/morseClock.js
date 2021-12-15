"use strict";

const morseCodes = new Map([
  ["0", "_ _ _ _ _ "],
  ["1", ". _ _ _ _ "],
  ["2", ". . _ _ _ "],
  ["3", ". . . _ _ "],
  ["4", ". . . . _ "],
  ["5", ". . . . . "],
  ["6", "_ . . . . "],
  ["7", "_ _ . . . "],
  ["8", "_ _ _ . . "],
  ["9", "_ _ _ _ . "],
  [":", "_ _ _ . . . "],
  [".", ". _ . _ . _ "]
])

class MorseClock extends TextClock {
  constructor() {
    super();
    this.label = "Morse";
  }

  update() {
    // https://stackoverflow.com/questions/11854958/how-to-call-a-parent-method-from-child-class-in-javascript
    TextClock.prototype.update.call(this);
    let newText = "";
    // Translate text
    for (let c of this.text) {
      newText += morseCodes.get(c);
    }
    this.text = newText;
  }

  draw(x, y, width, height) {
    // Overrided so it prints nicer
    push();
    // Draw box
    rect(x, y, width, height);
    // Draw label
    textSize(height / 4);
    textAlign(LEFT, TOP);
    text(this.label, x + 4, y + 4);
    // Draw clock value
    textFont(clockFont);
    textSize(this.textSize);
    textAlign(LEFT, BOTTOM);
    // Calculate text size if needed
    if (this.lastWidth != width) {
      this.lastWidth = width;
      this.recalculateTextSize(width);
    }
    text(this.text, x + 4, y + height - (height / 4));
    pop();
  }
}
