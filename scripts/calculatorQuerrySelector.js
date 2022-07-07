import CalculatorManager from './calculatorManager';

export default class CalculatorQuerrySelector extends CalculatorManager {
  getValues() {
    const inputs = this._getInputs();
    const firstNumber = +inputs[0].value;
    const secondNumber = +inputs[1].value;

    return { firstNumber, secondNumber };
  }
  clearInput() {
    const inputs = this._getInputs();
    inputs.forEach((input) => {
      input.value = '';
    });
  }
  _getInputs() {
    return document.querySelectorAll('form input');
  }
}
