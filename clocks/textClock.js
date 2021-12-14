class TextClock extends BaseClock {
  constructor() {
    super();
  }

  draw(x, y, width, height) {
    push();
    rect(x, y, width, height);
    let theText = "";
    theText += (this.date.getHours() + 1).toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false});
    theText += ":";
    theText += (this.date.getMinutes()).toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false});
    theText += ":";
    theText += (this.date.getSeconds()).toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false});
    theText += ".";
    theText += (this.date.getMilliseconds()).toLocaleString("en-US", {minimumIntegerDigits: 3, useGrouping: false});
    textAlign(LEFT, TOP);
    let theSize = width;
    textSize(theSize);
    while (textWidth(theText) > width - 6) {
      theSize --;
      textSize(theSize);
    }
    text(theText, x + 4, y + 4);
    pop();
  }
}
