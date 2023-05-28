function getWeather() {
    const apiKey = "863242cfb2b1d357e6093d9a4df19a4b";
    const cityInput = document.getElementById("cityInput").value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityInput}&appid=${apiKey}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        displayWeather(data);
      })
      .catch(error => {
        console.log("Error fetching weather data:", error);
      });
  }
  
  function displayWeather(data) {
    const weatherInfo = document.getElementById("weatherInfo");
    weatherInfo.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Weather: ${data.weather[0].main}</p>
      <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
  }
  