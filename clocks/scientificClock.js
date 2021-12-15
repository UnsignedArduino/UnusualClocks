"use strict";

class ScientificClock extends BaseClock {
  constructor() {
    super();
    this.label = "Scientific";
  }

  update() {
    // https://stackoverflow.com/questions/11854958/how-to-call-a-parent-method-from-child-class-in-javascript
    BaseClock.prototype.update.call(this);
    // Pull numbers and convert to string
    let hours = Number(this.date.getHours() + 1).toExponential();
    let minutes = Number(this.date.getMinutes()).toExponential();
    let seconds = Number(this.date.getSeconds() + (this.date.getMilliseconds() / 1000)).toExponential(3);
    // Format text
    this.text = "";
    this.text += hours.toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false});
    this.text += ":";
    this.text += minutes.toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false});
    this.text += ":";
    this.text += seconds.toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false});
  }
}
