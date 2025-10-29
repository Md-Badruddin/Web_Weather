
function generatePassword(length) {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=";
  let password = "";
  for (let i = 0; i < length; i++) {
    const idx = Math.floor(Math.random() * chars.length);
    password += chars[idx];
  }
  return password;
}

document.getElementById("generateBtn").onclick = function() {
  const length = parseInt(document.getElementById("length").value, 10);
  if (isNaN(length) || length < 4 || length > 32) {
    document.getElementById("result").textContent = "Length must be between 4 and 32.";
    return;
  }
  const password = generatePassword(length);
  document.getElementById("result").textContent = password;
};
