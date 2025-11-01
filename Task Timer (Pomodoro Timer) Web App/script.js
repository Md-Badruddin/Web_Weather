
let totalSeconds = 25 * 60;
let secondsLeft = totalSeconds;
let timerInterval = null;

function updateDisplay() {
  const mins = Math.floor(secondsLeft / 60);
  const secs = secondsLeft % 60;
  document.getElementById("timer").textContent =
    mins.toString().padStart(2, "0") + ":" + secs.toString().padStart(2, "0");
}

document.getElementById("startBtn").onclick = function() {
  if (timerInterval) return;
  document.getElementById("status").textContent = "Focus time! 🍅";
  timerInterval = setInterval(() => {
    if (secondsLeft > 0) {
      secondsLeft--;
      updateDisplay();
    } else {
      clearInterval(timerInterval);
      timerInterval = null;
      document.getElementById("status").textContent = "Session complete! 🎉";
    }
  }, 1000);
};

document.getElementById("resetBtn").onclick = function() {
  clearInterval(timerInterval);
  timerInterval = null;
  secondsLeft = totalSeconds;
  updateDisplay();
  document.getElementById("status").textContent = "";
};

updateDisplay();
