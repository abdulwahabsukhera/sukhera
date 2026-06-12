
const apiKey = "5725b51c36954f83c9b71ff69d984a22";

async function getWeather() {

    const city = document.getElementById("cityInput").value;

    if(city === ""){
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{

        const response = await fetch(url);
        const data = await response.json();

        if(data.cod == "404"){
            alert("City not found");
            return;
        }

        document.getElementById("cityName").innerText = data.name;

        document.getElementById("temperature").innerText =
            `Temperature: ${data.main.temp} °C`;

        document.getElementById("description").innerText =
            data.weather[0].description;

        document.getElementById("humidity").innerText =
            `Humidity: ${data.main.humidity}%`;

        document.getElementById("wind").innerText =
            `Wind Speed: ${data.wind.speed} km/h`;

        const icon = data.weather[0].icon;

        document.getElementById("weatherIcon").src =
            `https://openweathermap.org/img/wn/${icon}@2x.png`;

    }
    catch(error){
        alert("Something went wrong");
    }
}
