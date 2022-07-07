function validInputs(e) {
  const str = e.target.value;
  const symbol = e.data;

  if (symbol >= 0 && symbol <= 9) {
    return;
  } else {
    e.target.value = str.substring(0, str.length - 1);
  }
}

export { validInputs };
