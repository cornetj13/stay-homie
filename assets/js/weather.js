/*  VARIABLES  */
/* Element Selectors */
var cityInputEl = document.getElementById('location-input');

/* Global Variable */
var weatherArray = [];

/*  FUNCTIONS  */
/* Complie Weather Data Function - A function for fetching third-party API data about the user's location, use that data to find the weather for their area, and return the relevant data. */
async function getWeather () {
  var cityInput = cityInputEl.value;
  var city = [];
  var weather = [];

  try {
      city = await loadLatLon();
  }
  catch (e) {
      console.log(e);
  }

  // Create latitude and longitude for API
  latitude = city[0].lat;
  longitude = city[0].lon;

  var weatherAPIUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=41473ca700c922a2192404a846e94a4a&units=imperial`;

  try {
      weather = await loadWeatherData(weatherAPIUrl);
  }
  catch(e) {
      console.log(e);
  }

  // TODO: Why is this array even created?
  weatherArray.push(
    {
        city: cityInput,
        latitude: latitude,
        longitude: longitude,
        time: `${weather.list[0].dt_txt} GMT`,
        temperature: weather.list[0].main.temp,
        wind: weather.list[0].wind.speed, 
        humidity: weather.list[0].main.humidity,
        condition: weather.list[0].weather[0],
    }
  );

  return(weatherArray[0].condition);
};

/* Fetch Weather API Function - A function for fetching third-party API data about the user's horoscope and return the json data. */
async function loadWeatherData(weatherAPIUrl) {
  var responseWeather = await fetch(weatherAPIUrl);
  var weatherData = await responseWeather.json();
  return weatherData;
};

/* Fetch Location API Function - A function for fetching third-party API data about the user's latitude and longitude, which is used in fetching weather data. */
async function loadLatLon() {
  let cityInput = cityInputEl.value;
  var cordAPIUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityInput}&limit=1&appid=41473ca700c922a2192404a846e94a4a`;
  var responseCord = await fetch(cordAPIUrl);
  var cityCord = await responseCord.json();
  return cityCord;
};

