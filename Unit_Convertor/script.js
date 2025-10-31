
document.getElementById('convertBtn').onclick = function() {
  const value = parseFloat(document.getElementById('valueInput').value);
  const unit = document.getElementById('unitSelect').value;
  let result = "";
  if (isNaN(value)) {
    result = "Please enter a valid number.";
  } else if (unit === "cmToInches") {
    result = `${value} cm = ${(value / 2.54).toFixed(2)} inches`;
  } else if (unit === "inchesToCm") {
    result = `${value} inches = ${(value * 2.54).toFixed(2)} cm`;
  }
  document.getElementById('result').textContent = result;
};
