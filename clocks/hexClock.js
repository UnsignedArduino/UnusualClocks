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
    let hoursStr = hours.toString(16).toLocaleUpperCase("en-US");
    this.text += (hoursStr.length < 2 ? "0" : "") + hoursStr;
    this.text += ":";
    let minutesStr = minutes.toString(16).toLocaleUpperCase("en-US");
    this.text += (minutesStr.length < 2 ? "0" : "") + minutesStr;
    this.text += ":";
    let secondsStr = seconds.toString(16).toLocaleUpperCase("en-US");
    this.text += (secondsStr.length < 2 ? "0" : "") + secondsStr;
    this.text += ".";
    let millisStr = millis.toString(16).toLocaleUpperCase("en-US");
    this.text += millisStr.length < 3 ? "0" : "";
    this.text += millisStr.length < 2 ? "0" : "";
    this.text += millisStr;
  }
}
