class Calculator {
  constructor(previousText, currentText) {
    this.previousText = previousText;
    this.currentText = currentText;
    this.clear();
  }

  clear() {
    this.currentOperation = "";
    this.previousOperation = "";
    this.operation = undefined;
  }

  appendNumber(number) {
    if (number === "." && this.currentOperation.includes(".")) return;
    this.currentOperation =
      this.currentOperation.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperation === "") return;
    if (this.previousOperation !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperation = this.currentOperation;
    this.currentOperation = "";
  }

  compute() {
    let computation;
    let prev = parseFloat(this.previousOperation);
    let current = parseFloat(this.currentOperation);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "/":
        computation = prev / current;
        break;
      default:
        return;
    }
    this.currentOperation = String(computation);
    this.operation = undefined;
    this.previousOperation = "";
  }

  updateDisplay() {
    this.currentText.innerHTML = this.currentOperation;
    this.previousText.innerHTML = this.previousOperation;
  }
}

let numberButtons = document.querySelectorAll("[data-number]");
let operationButtons = document.querySelectorAll("[data-operation]");
let deleteButton = document.querySelector("[data-delete]");
let equalsButton = document.querySelector("[data-equals]");
let clearButton = document.querySelector("[data-all-clear]");
let previousText = document.querySelector("[data-previous]");
let currentText = document.querySelector("[data-current]");
let calculator = new Calculator(previousText, currentText);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalsButton.addEventListener("click", () => {
  calculator.compute();
  calculator.updateDisplay();
});
