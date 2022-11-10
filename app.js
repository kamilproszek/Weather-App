let apiKey = "a04d0b88e9d32a0dd9ca3a95b7c3c4e9";

let data;
var bacground;

var city = document.getElementById("city");
var temp = document.getElementById("temp");
var humidity = document.getElementById("humidity");
var wind = document.getElementById("wind");
var description = document.getElementById("description");
var weather_icon = document.querySelector(".weather_icon");
var main_card = document.getElementById("main-card");

let getWeatherData = (city) => {
  console.log("it works!s");
  let weatherPromise = fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&mode=json&units=metric&appid=" +
      apiKey
  );
  return weatherPromise.then((response) => {
    return response.json();
  });
};

let getCity = () => {
  return document.getElementById("search-bar").value;
};

let changeBacground = () => {
  main_card.style.background = "url('backgrounds/background.jpg')";
};

let deleteMainPage = () => {
  document.getElementById("enter-city").style.display = "none";
};

let showValue = () => {
  deleteMainPage();
  changeBacground();
  getWeatherData(getCity()).then((data) => {
    //podglad w konsoli
    console.log(data);
    city.innerText = data.name + ", " + data.sys.country;
    temp.innerText = data.main.temp + " °C";
    humidity.innerText = "Humidity: " + data.main.humidity + " %";
    wind.innerText = "Wind speed: " + data.wind.speed + " km/h";
    description.innerText = data.weather[0].description;
    weather_icon.src =
      "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
  });
};
