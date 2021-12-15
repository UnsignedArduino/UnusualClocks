"use strict";

class UTCClock extends BaseClock {
  constructor() {
    super();
    this.label = "UTC";
  }

  update(dateToUse) {
    // https://stackoverflow.com/questions/11854958/how-to-call-a-parent-method-from-child-class-in-javascript
    BaseClock.prototype.update.call(this, dateToUse);
    // Pull numbers
    let utc = (this.date.getTime()) / 1000;
    // Format text
    this.text = utc.toFixed(3);
  }
}
