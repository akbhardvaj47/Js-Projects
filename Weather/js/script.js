const apiKey = "7d5e74e7b112e34001dc87b79a2fc7c3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const input = document.querySelector('.input');
const searchBtn = document.querySelector('.searchbtn');
const weatherImg = document.querySelector('.weatherimg');

async function findWeather(city) {
  const result = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (result.status == 404) {
    document.querySelector('.error').innerHTML = 'Invalid City Name';
    document.querySelector('.weather-body').style.display = 'none';
  } else {
    var data = await result.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "<sup>o</sup>C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    console.log(data.weather[0].main);

    if (data.weather[0].main == "Clouds") {
      weatherImg.src = "../image/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherImg.src = "../image/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherImg.src = "../image/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherImg.src = "../image/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
        weatherImg.src = "../image/mist.png";
      }
      document.querySelector(".weather-body").style.display = "block";
      document.querySelector(".error").style.display = "none";
    }
  }
  
  searchBtn.addEventListener("click", () => {
    findWeather(input.value);
  });
  
  findWeather(input.value);
  