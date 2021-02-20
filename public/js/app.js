const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const $location = document.querySelector('#location');
const $description = document.querySelector('#description');
const $temp = document.querySelector('#temp');
const $isDay = document.querySelector('#is_day');
const $pressure = document.querySelector('#pressure');
const $humidity = document.querySelector('#humidity');
const $windDirection = document.querySelector('#wind_dir');
const $visibility = document.querySelector('#visibility');
const $lat = document.querySelector('#lat');
const $lon = document.querySelector('#lon');

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchLocation = search.value;
  $location.innerText = 'loading...';
  $description.innerText = '';

  fetch(`/weather?address=${searchLocation}`).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        $location.innerText = data.error;
      } else {
        const {location, current} = data;
        $location.innerText = `Location: ${location.name} ${location.region}, ${location.country}`;
        $description.innerText = `Description: ${current.weather_descriptions}`;
        $temp.innerText = `Temp: ${current.temperature} °C`;
        $isDay.innerText = `${current.is_day === 'yes' ? 'Day' : 'Night'}`;
        $pressure.innerText = `Pressure: ${current.pressure} MB - millibar`;
        $humidity.innerText = `Humidity: ${current.humidity}%`;
        $windDirection.innerText = `Wind: ${current.wind_dir} ${current.wind_speed}km/hr`;
        $visibility.innerText = `Visibility: ${current.visibility} KM`;
        $lat.innerText = `Latitudes: ${location.lat}`;
        $lon.innerText = `Longitudes: ${location.lon}`;
      }
    });
  });
});
