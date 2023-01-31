/* i want a search bar that would input the name of a place.
when the submit button is pressed, it would log the name of the place underneath as a button as well as pull up the data.
the data should include todays date, the weather conditions, temperature, wind speed, humidity of that city.

THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city */



// const API_KEY = "61bf20980c70be5141903b4046209f11";

// const API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather`;
// const CITY = "";
// const COUNTRY_CODE = "";


// fetch(`${API_ENDPOINT}?q=${CITY},${COUNTRY_CODE}&appid=${API_KEY}`)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     // extract the data you need and update your app's state or display the data to the user
//   })
//   .catch(error => {
//     console.error(error);
//   });




var searchBtn = document.getElementById("searchButton");
var pastSrch = document.getElementById("pastSearch");

searchBtn.addEventListener("click", function(event) {
  event.preventDefault();
  var searchForm = document.getElementById("searchcity").value;
  var btn = document.createElement("button");
  btn.innerHTML = searchForm;
  btn.classList.add("btn", "btn-primary");
  pastSrch.appendChild(btn);
});
// var createButton = function() {
//     var buttonColumnEl = $("<div>");
//     buttonColumnEl.addclass("d-grid gap-2");
    


//}
