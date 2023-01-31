/* i want a search bar that would input the name of a place.
when the submit button is pressed, it would log the name of the place underneath as a button as well as pull up the data.
the data should include todays date, the weather conditions, temperature, wind speed, humidity of that city.

THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city */




const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=cityName&appid=61bf20980c70be5141903b4046209f11`;

 const API_KEY = "61bf20980c70be5141903b4046209f11";

async function getWeatherData(searchForm) {
    try {
      
      const response = await fetch(API_URL.replace(cityName, searchForm));
      const data = await response.json();


      const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const weather = data.weather[0].main;



    console.log(`Temperature: ${temperature}`);
    console.log(`Humidity: ${humidity}`);
    console.log(`Wind Speed: ${windSpeed}`);
    console.log(`Weather: ${weather}`);
  } catch (error) {
    console.error(error);
  }
}


var firstCity = document.getElementById("cityName");


var searchBtn = document.getElementById("searchButton");
var pastSrch = document.getElementById("pastSearch");
var searchForm = document.getElementById("searchCity").value;
var btn = document.createElement("button");
var weather = document.getElementById("nowWeather");

var weatherCity2 = document.getElementById("weatherCity2")

searchBtn.addEventListener("click", function(event) {
  event.preventDefault();

  addButton(event);
  addCity(event);
  getWeatherData(searchForm);

  
});

    
function addButton() {
    btn.innerHTML = document.getElementById("searchCity").value;
    btn.classList.add("btn", "btn-primary", "btn-lg");
     pastSrch.appendChild(btn);
    

};
function addCity(){
    var searchForm = document.getElementById("searchCity").value;
    weather.innerHTML += searchForm + "<br>";
   
   
    

};

