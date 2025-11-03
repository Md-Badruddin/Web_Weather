
const colorInput = document.getElementById("colorInput");
const hexCode = document.getElementById("hexCode");
const copyBtn = document.getElementById("copyBtn");
const copyStatus = document.getElementById("copyStatus");

// Initialize and display default
hexCode.textContent = colorInput.value;

colorInput.oninput = function() {
  hexCode.textContent = colorInput.value;
  copyStatus.textContent = "";
};

copyBtn.onclick = function() {
  navigator.clipboard.writeText(colorInput.value).then(() => {
    copyStatus.textContent = "Copied!";
    setTimeout(() => (copyStatus.textContent = ""), 1200);
  });
};
