"use strict";

class ASCIIClock extends TextClock {
  constructor() {
    super();
    this.label = "ASCII";
  }

  update(dateToUse) {
    // https://stackoverflow.com/questions/11854958/how-to-call-a-parent-method-from-child-class-in-javascript
    TextClock.prototype.update.call(this, dateToUse);
    let newText = "";
    // Translate text
    for (let c of this.text) {
      newText += c.charCodeAt(0) + " ";
    }
    this.text = newText.trim();
  }
}
