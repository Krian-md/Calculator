'use strict';

import functionApp from './functionsApp.js';
import CalculatorForm from './CalculatorForm.js';
import CalculatorQuerrySelector from './calculatorQuerrySelector.js';

let operate = '+';

const operation = {
  '+': (num1, num2) => {
    return num1 + num2;
  },
  '-': (num1, num2) => {
    return num1 - num2;
  },
  '*': (num1, num2) => {
    return num1 * num2;
  },
  '/': (num1, num2) => {
    return num1 / num2;
  },
  '**': (num1, num2) => {
    return num1 ** num2;
  },
};

const UI = {
  button: document.querySelector('form button'),
  inputs: document.querySelectorAll('form input'),
  select: document.querySelector('form select'),
};

const app = () => {
  window.addEventListener('load', () => {
    configuration();
    run();
  });
};

function configuration() {
  functionApp.addValidateListener(UI.inputs);
  functionApp.fillingSelect(UI.select, operation);
  selectOperate(UI.select);
  functionApp.stopSubmit();
}

function selectOperate(select) {
  select.addEventListener('change', (e) => {
    operate = e.target.value;
  });
}

function run() {
  UI.button.addEventListener('click', (event) => {
    event.target.classList.toggle('btn-Style');

    // const manager = new CalculatorQuerrySelector(operation);
    const manager = new CalculatorForm(operation);

    manager.calculate(operate);
    operate = '+';
  });
}

app();
