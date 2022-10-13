let apiKey = "a04d0b88e9d32a0dd9ca3a95b7c3c4e9";

let data;

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

let showValue = () => {
  getWeatherData(getCity()).then((data) => {
    //podglad w konsoli
    console.log(data);

    document.getElementById("city").innerText = data.name;
    document.getElementById("temp").innerText = data.main.temp + " °C";
    document.getElementById("humidity").innerText =
      "Humidity: " + data.main.humidity + " %";
    document.getElementById("wind").innerText =
      "Wind speed: " + data.wind.speed + " km/h";
    document.getElementById("description").innerText =
      data.weather[0].description;
    document.querySelector(".weather_icon").src =
      "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
  });
};
