const API_KEY = '860b6a179882ba55edb419193d064419';

function onGeoOk(position){
   const lat = position.coords.latitude;
   const lon = position.coords.longitude;
   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

   fetch(url).then(response => response.json()).then(data => {
      const weather = document.querySelector('.location span:first-child');
      const city = document.querySelector('.location span:last-child');
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}˚C`;
   });

}

function onGeoError(){
   alert("Can't find you. No weather for you.");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);