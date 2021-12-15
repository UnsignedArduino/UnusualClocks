"use strict";

class HexClock extends BaseClock {
  constructor() {
    super();
    this.label = "Hexadecimal";
  }

  update() {
    // https://stackoverflow.com/questions/11854958/how-to-call-a-parent-method-from-child-class-in-javascript
    BaseClock.prototype.update.call(this);
    // Pull numbers
    let hours = this.date.getHours() + 1;
    let minutes = this.date.getMinutes();
    let seconds = this.date.getSeconds();
    let millis = this.date.getMilliseconds();
    // Format text
    this.text = "";
    let hoursStr = hours.toString(16);
    this.text += this.addZerosBefore(hoursStr, 2);
    this.text += ":";
    let minutesStr = minutes.toString(16);
    this.text += this.addZerosBefore(minutesStr, 2);
    this.text += ":";
    let secondsStr = seconds.toString(16);
    this.text += this.addZerosBefore(secondsStr, 2);
    this.text += ".";
    let millisStr = millis.toString(16);
    this.text += this.addZerosBefore(millisStr, 3);
    this.text = this.text.toLocaleUpperCase("en-US");
  }
}
