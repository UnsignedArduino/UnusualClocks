"use strict";

const operators = new Map([
  ["+", (num1, num2) => { return num1 + num2; }],
  ["-", (num1, num2) => { return num1 - num2; }],
  ["×", (num1, num2) => { return num1 * num2; }],
  ["÷", (num1, num2) => { return num1 / num2; }]
]);
const operatorChars = ["+", "-", /*"×", "÷"*/];
const operatorInverseChars = new Map([
  ["+", "-"],
  ["-", "+"],
  ["×", "÷"],
  ["÷", "×"]
]);

// Represents a equation with a left, right, and operator
class Equation {
  constructor(left, operator, right) {
    this.left = left;
    this.operator = operator;
    this.right = right;
  }

  toString() {
    return "(" + this.left + " " + this.operator + " " + this.right + ")";
  }
}

class MathClock extends BaseClock {
  constructor() {
    super();
    this.label = "Math";
    // Save the last equations
    this.lastHour = 0;
    this.lastMinute = 0;
    this.lastSecond = 0;
    this.lastHourEquation = "";
    this.lastMinuteEquation = "";
    this.lastSecondEquation = "";
  }

  equationForNum(answer) {
    let equation = new Equation("", "", "");
    let op = random(operatorChars);
    let inverseOp = operatorInverseChars.get(op);
    equation = new Equation("", op, Math.round(random(1, answer)));
    equation.left = Math.round(operators.get(inverseOp)(answer, equation.right));
    return equation.toString();
  }

  addSpacesAfter(theString, length) {
    if (length - theString.length <= 0) {
      return theString;
    } else {
      // Add enough spaces after so that it fits length
      return theString + " ".repeat(length - theString.length);
    }
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
    if (this.lastHour != hours) {
      this.lastHour = hours;
      this.lastHourEquation = this.equationForNum(hours);
    }
    this.text += this.lastHourEquation;
    this.text += ":";
    if (this.lastMinute != minutes) {
      this.lastMinute = minutes;
      this.lastMinuteEquation = this.equationForNum(minutes);
    }
    this.text += this.lastMinuteEquation;
    this.text += ":";
    if (this.lastSecond != seconds) {
      this.lastSecond = seconds;
      this.lastSecondEquation = this.equationForNum(seconds);
    }
    this.text += this.lastSecondEquation;
    this.text += ".";
    this.text += this.equationForNum(millis);
    this.text = this.addSpacesAfter(this.text, 45);
  }
}
