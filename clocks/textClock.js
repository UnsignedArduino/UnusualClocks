class TextClock extends BaseClock {
  constructor() {
    super();
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
    this.text += hours.toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false});
    this.text += ":";
    this.text += minutes.toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false});
    this.text += ":";
    this.text += seconds.toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false});
    this.text += ".";
    this.text += millis.toLocaleString("en-US", {minimumIntegerDigits: 3, useGrouping: false});
  }
}
