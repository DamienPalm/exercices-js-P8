function convertToBinary() {
  const decimalInput = document.getElementById("decimalInput").value;
  const result = document.getElementById("binaryResult");

  if (!decimalInput) {
    return "nothing on converting non number";
  }

  if (isNaN(decimalInput)) {
    return `nothing on converting non number like ${decimalInput}`;
  }

  let decimal = parseInt(decimalInput);
  let binary = "";
  if (decimal === 0) {
    binary = "0";
  } else {
    while (decimal > 0) {
      binary = (decimal % 2) + binary;
      decimal = Math.floor(decimal / 2);
    }
  }
  result.textContent = binary;
}
