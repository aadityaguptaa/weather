window.addEventListener('load', ()=>{
  let long;
  let lat;
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position =>{
      long = position.coords.longitude;
      lat = position.coords.latitude;
      console.log(lat,long)

      const cross = `http://cors-anywhere.herokuapp.com/`
      const api = `${cross}http://api.weatherstack.com/current?access_key=b01c28f0a9ec5e4e293db476c76ed06c&query=${lat},${long}`;
      fetch(api)
        .then(response =>{
          return response.json();
        })
        .then(data =>{
          document.querySelector('.temperature-degree').innerHTML = data.current.temperature;
          document.querySelector('.temperature-discription').innerHTML = data.current.weather_descriptions;
          document.querySelector('.location-timezone').innerHTML = data.location.region;
          document.querySelector('.location-timezone').innerHTML = data.location.region;
          document.getElementById('image-png').src = data.current.weather_icons;
          console.log(data);
        })


    })
  }
})
