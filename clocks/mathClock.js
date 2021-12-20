"use strict";

const operators = new Map([
  ["+", (num1, num2) => { return num1 + num2; }],
  ["-", (num1, num2) => { return num1 - num2; }],
  ["×", (num1, num2) => { return num1 * num2; }],
  ["÷", (num1, num2) => { return num1 / num2; }]
]);
// Ones we can easily generate equations for
const simpleOperatorChars = ["+", "-"];
// All available operators
const operatorChars = ["+", "-", "×", "÷"];
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

  evaluate() {
    return operators.get(this.operator)(this.left, this.right)
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

  equationForNum(answer, useEasyOps=false) {
    // Try up to 10 times to make a random equation
    for (let i = 0; i < 5; i ++) {
      // Choose a random operator
      let op = random(useEasyOps ? simpleOperatorChars : operatorChars);
      // Get the inverse operator to solve for other side
      let inverseOp = operatorInverseChars.get(op);
      let equation = new Equation("", op, Math.round(random(1, answer)));
      equation.left = Math.round(operators.get(inverseOp)(answer, equation.right));
      // Since we round the number we have to check it still equals the answer
      if (equation.evaluate() == answer) {
        return equation.toString();
      }
    }
    // Use "simple" operators so we don't delay too much
    // making an equation
    return this.equationForNum(answer, true);
  }

  update(dateToUse) {
    // https://stackoverflow.com/questions/11854958/how-to-call-a-parent-method-from-child-class-in-javascript
    BaseClock.prototype.update.call(this, dateToUse);
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
    this.text = this.addSpacesAfter(this.text, 50);
  }
}
