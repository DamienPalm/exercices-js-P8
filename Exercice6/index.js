function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculateResult() {
  const display = document.getElementById("display");
  try {
    let result = eval(display.value);

    if (result === Infinity || result === -Infinity) {
      display.value = "Division by zero is not allowed";
    } else {
      display.value = result;
    }
  } catch (error) {
    display.value = "Erreur";
  }
}
