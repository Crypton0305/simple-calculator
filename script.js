var res = document.getElementById("result");
var toast = document.getElementById("toast");

function calculate(value) {
  var calculatedValue = eval(value || null);
  if (isNaN(calculatedValue)) {
    res.value = "Can't divide 0 by 0";
    setTimeout(() => {
      res.value = "";
    }, 1300);
  } else {
    res.value = calculatedValue;
  }
}

function liveScreen(enteredValue) {
  res.value = res.value ? res.value + enteredValue : enteredValue;
}

document.addEventListener("keydown", keyboardInputHandler);

function keyboardInputHandler(e) {
  e.preventDefault();
  
  const keys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/", ".", "Enter", "Backspace"];
  
  if (keys.includes(e.key)) {
    if (e.key === "Enter") {
      calculate(res.value);
    } else if (e.key === "Backspace") {
      res.value = res.value.slice(0, -1);
    } else {
      res.value += e.key;  // This acts like the "default" case
    }
  }
  
  }

