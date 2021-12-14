class BaseClock {
  constructor() {
    this.date = new Date();
    this.text = "";
  }

  update() {
    this.date = new Date();
    // Inherited classes will call this method and update this.text with the date
  }

  draw(x, y, width, height) {
    push();
    rect(x, y, width, height);
    textSize(12);
    textAlign(LEFT, TOP);
    text("Text", x + 4, y + 4);
    let theSize = width;
    textSize(theSize);
    while (textWidth(this.text) > width - 6) {
      theSize --;
      textSize(theSize);
    }
    text(this.text, x + 4, y + 16);
    pop();
  }
}
