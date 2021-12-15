class BaseClock {
  constructor() {
    this.date = new Date();
    this.text = "";
    this.label = "";
  }

  update() {
    this.date = new Date();
    // Inherited classes will call this method and update this.text with the date
  }

  draw(x, y, width, height) {
    push();
    rect(x, y, width, height);
    textSize(height / 4);
    textAlign(LEFT, TOP);
    text(this.label, x + 4, y + 4);
    let theSize = width;
    textFont(clockFont);
    textSize(theSize);
    while (textWidth(this.text) > width - 6) {
      theSize --;
      textSize(theSize);
    }
    textAlign(LEFT, BOTTOM);
    text(this.text, x + 4, y + height - 4);
    pop();
  }
}
