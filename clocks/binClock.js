"use strict";

class BinClock extends BaseClock {
  constructor() {
    super();
    this.label = "Binary";
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
    let hoursStr = hours.toString(2);
    this.text += this.addZerosBefore(hoursStr, 8);
    this.text += ":";
    let minutesStr = minutes.toString(2);
    this.text += this.addZerosBefore(minutesStr, 8);
    this.text += ":";
    let secondsStr = seconds.toString(2);
    this.text += this.addZerosBefore(secondsStr, 8);
    this.text += ".";
    let millisStr = millis.toString(2);
    // this.text += millisStr.length < 3 ? "0" : "";
    this.text += this.addZerosBefore(millisStr, 16);
    this.text = this.text.toLocaleUpperCase("en-US");
  }
}
