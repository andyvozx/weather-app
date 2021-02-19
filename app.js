let button = document.querySelector(".button");
let input = document.querySelector(".inputValue");
let temp = document.querySelector(".temp");
let weather = document.querySelector(".weather");
let hi_lo = document.querySelector(".hi_lo");
let city = document.querySelector(".city");

button.addEventListener("click", function (name) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      input.value +
      "&appid=567df1ad4125d8bace8865f0b3164d72&units=imperial"
  )
    .then((response) => response.json())
    .then((data) => {
      let tempValue = data["main"]["temp"];
      let nameValue = data["name"];
      let descValue = data["weather"][0]["description"];
      let temp_max = data["main"]["temp-max"];
      let temp_min = data["main"]["temp-min"];

      city.innerHTML = nameValue;
      weather.innerHTML = descValue;
      temp.innerHTML = "Temp - " + Math.floor(tempValue) + "°F";
      // hi_lo.innerHTML = nameValue;
      input.value = "";
      console.log(data);
      console.log(temp_min);
    })

    .catch((err) => alert("Please retype city name"));
});
