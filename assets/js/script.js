/* i want a search bar that would input the name of a place.
when the submit button is pressed, it would log the name of the place underneath as a button as well as pull up the data.
the data should include todays date, the weather conditions, temperature, wind speed, humidity of that city.

THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city */




const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=cityName&appid=61bf20980c70be5141903b4046209f11`;

 const API_KEY = "61bf20980c70be5141903b4046209f11";

async function getWeatherData(searchForm) {
    try {
      
      const response = await fetch(API_URL.replace("cityName", searchForm.value));
      const data = await response.json();


    const temperature = (data.main.temp - 273.15).toFixed(1) + "°C";
    const humidity = data.main.humidity + "%";
    const windSpeed = data.wind.speed + "meter/sec";
    const weather = data.weather[0].main;



    console.log(`Temperature: ${temperature}`);
    console.log(`Humidity: ${humidity}`);
    console.log(`Wind Speed: ${windSpeed}`);
    console.log(`Weather: ${weather}`);
    presentWeather(temperature, humidity, windSpeed, weather);
  } catch (error) {
    console.error(error);
  }
}

async function getForecastData (){
 
 const API_URL = "https://api.openweathermap.org/data/2.5/forecast?q=cityName&appid=61bf20980c70be5141903b4046209f11"

 try {
      
  const response = await fetch(API_URL.replace("cityName", searchForm.value));
  const data = await response.json();

console.log(data);
 var forecastData = [
  data.list[3],
  data.list[11],
  data.list[19],
  data.list[27],
  data.list[35]
 ]

for(i = 0; i <forecastData.length; i++){
  const temperature = (forecastData[i].main.temp - 273.15).toFixed(1) + "°C";
  const humidity = forecastData[i].main.humidity + "%";
  const windSpeed = forecastData[i].wind.speed + "meter/sec";
  const weather = forecastData[i].weather[0].main;
  const date = forecastData[i].dt_txt;
  generateCard(temperature, humidity, windSpeed, weather, date);
}


} catch (error) {
console.error(error);
}
}
var firstCity = document.getElementById("cityName");


var searchBtn = document.getElementById("searchButton");
var pastSrch = document.getElementById("pastSearch");
var searchForm = document.getElementById("searchCity")

var weather = document.getElementById("nowWeather");

var weatherCity2 = document.getElementById("weatherCity2")

searchBtn.addEventListener("click", function(event) {
  event.preventDefault();

  addButton(event);
 
  getWeatherData(searchForm);
  getForecastData();

  
});

    
function addButton() {
  var btn = document.createElement("button");
    btn.innerHTML = searchForm.value + "<br>";
    btn.classList.add("btn", "btn-primary", "btn-lg");
     pastSrch.appendChild(btn);
    

};
function presentWeather(temperature, humidity, windSpeed, weather){
    var cityH2 = document.getElementById("cityName");
    var templi = document.getElementById("temp");
    var windli = document.getElementById("wind");
    var humidityli = document.getElementById("humidity");
    var weatherli = document.getElementById("weather");
    cityH2.textContent = searchForm.value;
    templi.textContent = temperature;
    windli.textContent = windSpeed;
    humidityli.textContent = humidity;
    weatherli.textContent = weather;

   
   
   
    

};



pastSrch.addEventListener("click", function(event) {
  if (event.target.tagName === "BUTTON") {
    const cityName = event.target.textContent.trim();
    getWeatherData({ value: cityName });
    getForecastData();
  }
});



