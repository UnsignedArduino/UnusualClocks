class SecondOfDayClock extends BaseClock {
  constructor() {
    super();
    this.label = "Second of day";
  }

  update(dateToUse) {
    // https://stackoverflow.com/questions/11854958/how-to-call-a-parent-method-from-child-class-in-javascript
    BaseClock.prototype.update.call(this, dateToUse);
    // Pull numbers
    let previous = new Date(this.date.getFullYear(),
                            this.date.getMonth(),
                            this.date.getDate(),
                            0, 0, 0, 0);
    let difference = (this.date.getTime() - previous.getTime()) / 1000;
    // Format text
    this.text = this.addSpacesAfter(difference.toFixed(3), 9);
  }
}

class MinuteOfDayClock extends BaseClock {
  constructor() {
    super();
    this.label = "Minute of day";
  }

  update(dateToUse) {
    // https://stackoverflow.com/questions/11854958/how-to-call-a-parent-method-from-child-class-in-javascript
    BaseClock.prototype.update.call(this, dateToUse);
    // Pull numbers
    let previous = new Date(this.date.getFullYear(),
                            this.date.getMonth(),
                            this.date.getDate(),
                            0, 0, 0, 0);
    let difference = (this.date.getTime() - previous.getTime()) / 1000 / 60;
    // Format text
    this.text = this.addSpacesAfter(difference.toFixed(3), 9);
  }
}

class HourOfDayClock extends BaseClock {
  constructor() {
    super();
    this.label = "Hour of day";
  }

  update(dateToUse) {
    // https://stackoverflow.com/questions/11854958/how-to-call-a-parent-method-from-child-class-in-javascript
    BaseClock.prototype.update.call(this, dateToUse);
    // Pull numbers
    let previous = new Date(this.date.getFullYear(),
                            this.date.getMonth(),
                            this.date.getDate(),
                            0, 0, 0, 0);
    let difference = (this.date.getTime() - previous.getTime()) / 1000 / 60 / 60;
    // Format text
    this.text = this.addSpacesAfter(difference.toFixed(5), 9);
  }
}

class SecondsLeftOfDayClock extends BaseClock {
  constructor() {
    super();
    this.label = "Seconds left of day";
  }

  update(dateToUse) {
    // https://stackoverflow.com/questions/11854958/how-to-call-a-parent-method-from-child-class-in-javascript
    BaseClock.prototype.update.call(this, dateToUse);
    // Pull numbers
    let previous = new Date(this.date.getFullYear(),
                            this.date.getMonth(),
                            this.date.getDate(),
                            0, 0, 0, 0);
    let difference = 86400 - ((this.date.getTime() - previous.getTime()) / 1000);
    // Format text
    this.text = this.addSpacesAfter(difference.toFixed(3), 9);
  }
}

class MinutesLeftOfDayClock extends BaseClock {
  constructor() {
    super();
    this.label = "Minutes left of day";
  }

  update(dateToUse) {
    // https://stackoverflow.com/questions/11854958/how-to-call-a-parent-method-from-child-class-in-javascript
    BaseClock.prototype.update.call(this, dateToUse);
    // Pull numbers
    let previous = new Date(this.date.getFullYear(),
                            this.date.getMonth(),
                            this.date.getDate(),
                            0, 0, 0, 0);
    let difference = 1440 - ((this.date.getTime() - previous.getTime()) / 1000 / 60);
    // Format text
    this.text = this.addSpacesAfter(difference.toFixed(3), 9);
  }
}

class HoursLeftOfDayClock extends BaseClock {
  constructor() {
    super();
    this.label = "Hours left of day";
  }

  update(dateToUse) {
    // https://stackoverflow.com/questions/11854958/how-to-call-a-parent-method-from-child-class-in-javascript
    BaseClock.prototype.update.call(this, dateToUse);
    // Pull numbers
    let previous = new Date(this.date.getFullYear(),
                            this.date.getMonth(),
                            this.date.getDate(),
                            0, 0, 0, 0);
    let difference = 24 - ((this.date.getTime() - previous.getTime()) / 1000 / 60 / 60);
    // Format text
    this.text = this.addSpacesAfter(difference.toFixed(5), 9);
  }
}