import CalculatorManager from './calculatorManager';

export default class CalculatorForm extends CalculatorManager {
  getValues() {
    const formData = this._getFormData();
    const firstNumber = +formData.get('firstNumber');
    const secondNumber = +formData.get('secondNumber');

    return { firstNumber, secondNumber };
  }
  clearInput() {
    this._getForm().reset();
  }
  _getFormData() {
    return new FormData(this._getForm());
  }

  _getForm() {
    return document.querySelector('form');
  }
}
