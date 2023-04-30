let weather = {
    apiKey: "4788f330de4dbefd828aee6b38fb78a2",
    fetchWeather: function(city, state, country) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
         + city + "," 
         + state + ","
         + country +
         ",us&units=imperial&appid=" + this.apiKey).then((Response) => Response.json()).then((data) => this.displayWeather(data));
    },

    fetchWeather: function(city, country) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
         + city + "," + country +
         ",us&units=imperial&appid=" + this.apiKey).then((Response) => Response.json()).then((data) => this.displayWeather(data));
    },

    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.body.style.backgroundImage = "url('https://source.unsplash.com/random/?" + name + " ' )";
        console.log(data);
        document.querySelector(".city").innerHTML = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon +".png"
        document.querySelector(".temp").innerHTML = temp + " °F";
        document.querySelector(".description").innerHTML = description;
        document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerHTML = "Wind speed: " + speed + " mph";
        document.querySelector(".weather").classList.remove("loading");

    },

    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value)
    }
}

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
})

document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if (event.key == "Enter"){
        weather.search();
    }
})