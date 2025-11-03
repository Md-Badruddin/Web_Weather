
const quotes = [
  "The best way to predict the future is to invent it.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Everything you can imagine is real.",
  "What you seek is seeking you.",
  "Do or do not. There is no try."
];
function getQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('quote').innerText = quote;
}
