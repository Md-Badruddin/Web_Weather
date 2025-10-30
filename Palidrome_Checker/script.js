
function isPalindrome(str) {
  const cleaned = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  return cleaned === cleaned.split('').reverse().join('');
}

document.getElementById("checkBtn").onclick = function() {
  const input = document.getElementById("inputText").value;
  if (input.trim() === "") {
    document.getElementById("result").textContent = "Please enter some text.";
    return;
  }
  if (isPalindrome(input)) {
    document.getElementById("result").textContent = `"${input}" is a palindrome!`;
  } else {
    document.getElementById("result").textContent = `"${input}" is not a palindrome.`;
  }
};
