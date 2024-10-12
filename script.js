function getValue(value) {
  let resultField = document.getElementById('result');

  switch (value) {
      case '=':
          resultField.value = eval(resultField.value);
          break;
      case 'clear':
          resultField.value = "";
          break;
      case 'back':
          resultField.value = resultField.value.slice(0, -1);
          break;
      default:
          resultField.value += value;
  }
}

function calculate() {
  getValue('=');
}
