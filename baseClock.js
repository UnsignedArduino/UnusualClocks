class BaseClock {
  constructor() {
    this.date = new Date();
    // Children will set this as neccessary
    this.text = "";
    this.label = "";
    // Used for determining if we need to recalculate text sizes
    this.textSize = 0;
    this.lastWidth = 0;
  }

  update() {
    this.date = new Date();
    // Inherited classes will call this method and update this.text with the date
  }

  recalculateTextSize(newWidth) {
    let theSize = newWidth;
    textSize(theSize);
    while (textWidth(this.text) > newWidth - 6) {
      theSize --;
      textSize(theSize);
    }
    this.textSize = theSize;
  }

  draw(x, y, width, height) {
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
    text(this.text, x + 4, y + height - 4);
    pop();
  }
}
