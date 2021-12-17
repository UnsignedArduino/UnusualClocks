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

class UTCSigned32OverflowCountdownClock extends BaseClock {
  constructor() {
    super();
    this.label = "32-bit signed overflow countdown"
  }

  update(dateToUse) {
    // https://stackoverflow.com/questions/11854958/how-to-call-a-parent-method-from-child-class-in-javascript
    BaseClock.prototype.update.call(this, dateToUse);
    // Pull numbers
    let utc = this.date.getTime();
    let utcOverflow = new Date(2147483647000 - utc).getTime() / 1000;
    // Format text
    this.text = utcOverflow.toFixed(3);
  }
}
