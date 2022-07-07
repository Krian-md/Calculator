export default class CalculatorManager {
  constructor(operation) {
    this.operation = operation;
  }
  applyOperation(firstNumber, secondNumber, operate) {
    const result = document.querySelector('#result');
    result.innerText = this.operation[operate](firstNumber, secondNumber);
  }
  calculate(operate) {
    const { firstNumber, secondNumber } = this.getValues();

    this.applyOperation(firstNumber, secondNumber, operate);

    this.clearInput();
  }
  clearInput() {}
  getValues() {}
}
