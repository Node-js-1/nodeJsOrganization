const axios = require('axios');

async function getWeather(city) {
  try {
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeather API key
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    const weather = response.data;
    console.log(`Current temperature in ${city}: ${weather.main.temp}K`);
  } catch (error) {
    console.error("Error fetching weather data:", error.message);
  }
}
