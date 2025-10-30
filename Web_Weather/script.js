
const sampleData = {
  "london": {
    name: "London",
    sys: { country: "GB" },
    main: { temp: 17, humidity: 74 },
    weather: [{ main: "Clouds", description: "scattered clouds" }]
  },
  "new york": {
    name: "New York",
    sys: { country: "US" },
    main: { temp: 22, humidity: 60 },
    weather: [{ main: "Clear", description: "clear sky" }]
  },
  "tokyo": {
    name: "Tokyo",
    sys: { country: "JP" },
    main: { temp: 26, humidity: 80 },
    weather: [{ main: "Rain", description: "light rain" }]
  },
  "delhi": {
    name: "Delhi",
    sys: { country: "IN" },
    main: { temp: 30, humidity: 72 },
    weather: [{ main: "Mist", description: "haze" }]
  }
};

document.getElementById("searchBtn").addEventListener("click", showWeather);

function showWeather() {
  const city = document.getElementById("cityInput").value.trim().toLowerCase();
  const resultDiv = document.getElementById("weatherResult");
  if (!city) {
    resultDiv.innerHTML = "<span>Please enter a city name.</span>";
    return;
  }

  if (!(city in sampleData)) {
    resultDiv.innerHTML = "<span>No demo data found for this city.</span>";
    return;
  }

  const data = sampleData[city];
  const html = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
    <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
    <p><strong>Weather:</strong> ${data.weather[0].main} (${data.weather[0].description})</p>
  `;
  resultDiv.innerHTML = html;
}
