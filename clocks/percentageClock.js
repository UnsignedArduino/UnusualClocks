class SecondPercentage extends BaseClock {
  constructor() {
    super();
    this.label = "Second %";
  }

  update(dateToUse) {
    // https://stackoverflow.com/questions/11854958/how-to-call-a-parent-method-from-child-class-in-javascript
    BaseClock.prototype.update.call(this, dateToUse);
    const msInSec = 1000;
    // Pull numbers
    let previous = new Date(this.date.getFullYear(),
                            this.date.getMonth(),
                            this.date.getDate(),
                            this.date.getHours(),
                            this.date.getMinutes(),
                            this.date.getSeconds(),
                            0);
    let difference = this.date.getTime() - previous.getTime();
    let percentage = (difference / msInSec) * 100;
    // Format text
    this.text = this.addSpacesAfter(percentage.toFixed(1) + "%", 8);
  }
}

class MinutePercentage extends BaseClock {
  constructor() {
    super();
    this.label = "Minute %";
  }

  update(dateToUse) {
    // https://stackoverflow.com/questions/11854958/how-to-call-a-parent-method-from-child-class-in-javascript
    BaseClock.prototype.update.call(this, dateToUse);
    const msInMin = 1000 * 60;
    // Pull numbers
    let previous = new Date(this.date.getFullYear(),
                            this.date.getMonth(),
                            this.date.getDate(),
                            this.date.getHours(),
                            this.date.getMinutes(),
                            0, 0);
    let difference = this.date.getTime() - previous.getTime();
    let percentage = (difference / msInMin) * 100;
    // Format text
    this.text = this.addSpacesAfter(percentage.toFixed(3) + "%", 8);
  }
}

class HourPercentage extends BaseClock {
  constructor() {
    super();
    this.label = "Hour %";
  }

  update(dateToUse) {
    // https://stackoverflow.com/questions/11854958/how-to-call-a-parent-method-from-child-class-in-javascript
    BaseClock.prototype.update.call(this, dateToUse);
    const msInHr = 1000 * 60 * 60;
    // Pull numbers
    let previous = new Date(this.date.getFullYear(),
                            this.date.getMonth(),
                            this.date.getDate(),
                            this.date.getHours(),
                            0, 0, 0);
    let difference = this.date.getTime() - previous.getTime();
    let percentage = (difference / msInHr) * 100;
    // Format text
    this.text = this.addSpacesAfter(percentage.toFixed(3) + "%", 8);
  }
}

class DayPercentage extends BaseClock {
  constructor() {
    super();
    this.label = "Day %";
  }

  update(dateToUse) {
    // https://stackoverflow.com/questions/11854958/how-to-call-a-parent-method-from-child-class-in-javascript
    BaseClock.prototype.update.call(this, dateToUse);
    const msInDay = 1000 * 60 * 60 * 24;
    // Pull numbers
    let previous = new Date(this.date.getFullYear(),
                            this.date.getMonth(),
                            this.date.getDate(),
                            0, 0, 0, 0);
    let difference = this.date.getTime() - previous.getTime();
    let percentage = (difference / msInDay) * 100;
    // Format text
    this.text = this.addSpacesAfter(percentage.toFixed(4) + "%", 9);
  }
}

class MonthPercentage extends BaseClock {
  constructor() {
    super();
    this.label = "Month %";
  }

  daysInThisMonth() {
    // https://stackoverflow.com/a/38446764
    let now = new Date();
    return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  }

  update(dateToUse) {
    // https://stackoverflow.com/questions/11854958/how-to-call-a-parent-method-from-child-class-in-javascript
    BaseClock.prototype.update.call(this, dateToUse);
    const msInMonth = 1000 * 60 * 60 * 24 * this.daysInThisMonth();
    // Pull numbers
    let previous = new Date(this.date.getFullYear(),
                            this.date.getMonth(),
                            0, 0, 0, 0, 0);
    let difference = this.date.getTime() - previous.getTime();
    let percentage = (difference / msInMonth) * 100;
    // Format text
    this.text = this.addSpacesAfter(percentage.toFixed(6) + "%", 11);
  }
}

class YearPercentage extends BaseClock {
  constructor() {
    super();
    this.label = "Year %";
  }

  daysInMonth(month, year) {
    // https://stackoverflow.com/a/1184359
    // Month is 1-based, so month 1 is January
    return new Date(year, month, 0).getDate();
  }

  daysInYear(year) {
    let days = 0;
    for (let month = 1; month <= 12; month ++) {
      days += this.daysInMonth(month, year);
    }
    return days;
  }

  update(dateToUse) {
    // https://stackoverflow.com/questions/11854958/how-to-call-a-parent-method-from-child-class-in-javascript
    BaseClock.prototype.update.call(this, dateToUse);
    const msInYear = 1000 * 60 * 60 * 24 * this.daysInYear(this.date.getFullYear());
    // Pull numbers
    let previous = new Date(this.date.getFullYear(),
                            0, 0, 0, 0, 0, 0);
    let difference = this.date.getTime() - previous.getTime();
    let percentage = (difference / msInYear) * 100;
    // Format text
    this.text = this.addSpacesAfter(percentage.toFixed(7) + "%", 12);
  }
}
