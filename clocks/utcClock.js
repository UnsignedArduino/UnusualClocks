"use strict";

class UTCClock extends BaseClock {
  constructor() {
    super();
    this.label = "UTC";
  }

  update() {
    // https://stackoverflow.com/questions/11854958/how-to-call-a-parent-method-from-child-class-in-javascript
    BaseClock.prototype.update.call(this);
    // Pull numbers
    let utc = (new Date().getTime()) / 1000;
    // Format text
    this.text = utc.toLocaleString("en-US", {minimumIntegerDigits: 3, useGrouping: false});
  }
}
