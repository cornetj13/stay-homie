// console.log("hello, stay-homies")


let cityName = prompt("what city are you in")
let weatherURL
let buttonHoroscope = document.getElementById("getScope")
let weatherArray = []


async function getHoroscope() {
    let sign = prompt("what is your sign")
    console.log(sign)
    let URL = `https://aztro.sameerkumar.website/?sign=${sign}&day=today`;
    let response = await fetch(URL, {
        method: 'POST'
    })
    let data = await response.json()

    return data
    
}

async function loadWeatherData() {
    var response = await fetch(weatherURL)
    var weatherData = await response.json()
    return weatherData
}

async function loadLatLon(place) {
    var cordURL = `https://api.openweathermap.org/geo/1.0/direct?q=${place}&limit=1&appid=41473ca700c922a2192404a846e94a4a`;
    var response = await fetch(cordURL);
    var city = await response.json();
    return city
}


async function searchLatLonSearchWeather (place) {
    
    var weatherArray = []
    // if error log it. if not get coords
    
    let city = [];
    let weather = []
    try {
        city = await loadLatLon(place)
    }
    catch (e) {
        console.log("error")
        console.log(e)
    }

    // create latitude and longitude to put into our api
    latitude = city[0].lat
    longitude = city[0].lon

    weatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=41473ca700c922a2192404a846e94a4a&units=imperial`;

    // if error log it. if not get weather

    try {
        weather = await loadWeatherData()
    }
    catch(e) {
        console.log("error")
        console.log(e)
    }

    // create a weather object containing all important parts

    console.log(weather)

    console.log(weather.list[0].dt_txt)


        weatherArray.push(
            {
                city: cityName,
                latitude: latitude,
                longitude: longitude,
                time: `${weather.list[0].dt_txt} GMT`,
                temperature: weather.list[0].main.temp,
                wind: weather.list[0].wind.speed, 
                humidity: weather.list[0].main.humidity,
                condition: weather.list[0].weather[0],
            })
  
            console.log(weatherArray)
            return(weatherArray[0].condition.decriptions)
}


buttonHoroscope.addEventListener("click", async (e) => {
    let horo
    e.preventDefault()
    try {
        horo = await getHoroscope()
    } catch (e) {
        console.log(e)
        console.log(error)
    }
    try {
        weatherCondition = await searchLatLonSearchWeather(cityName)
    } catch {
        console.log(e)
        console.log(error)
    }
    let horoscope = horo.description + weatherCondition

    let horoscopeOnPage = document.getElementById("horoscope")
    horoscopeOnPage.innerText = horoscope;
})

