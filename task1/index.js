class Calculator {
  constructor(previousText, currentText) {
    this.previousText = previousText;
    this.currentText = currentText;
    this.clear();
  }

  clear() {
    this.currentOperation = "";
    this.previousOperation = "";
    this.operations = undefined;
  }

  appendNumber(number) {
    if (number === "." && this.currentOperation.includes(".")) return;
    this.currentOperation =
      this.currentOperation.toString() + number.toString();
  }

  updateDisplay() {
    this.currentText.innerHTML = this.currentOperation;
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
