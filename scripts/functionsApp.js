import { validInputs } from './valids';

function addValidateListener(inputs) {
  inputs.forEach((input) => {
    input.addEventListener('input', validInputs);
  });
}

function fillingSelect(select, operation) {
  for (const key in operation) {
    const optionElem = document.createElement('option');
    optionElem.innerText = key;
    optionElem.value = key;
    select.appendChild(optionElem);
  }
}

function stopSubmit() {
  document.addEventListener('submit', (event) => {
    event.preventDefault();
  });
}

export default { addValidateListener, fillingSelect, stopSubmit };
