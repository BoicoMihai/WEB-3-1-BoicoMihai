const apiKey = "70ff21e4d61ede13895323f18465977e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".Humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".Wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "APIIMGS/clouds.png";
    } 
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "APIIMGS/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "APIIMGS/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "APIIMGS/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "APIIMGS/mist.png";
    } else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "APIIMGS/snow.png";
    } 
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

checkWeather();