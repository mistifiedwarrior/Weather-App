const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const $details = document.querySelector('.details');
const $error = document.querySelector('#error');
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
const $icon = document.querySelector('#img');
const $loader = document.querySelector('#loader');

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchLocation = search.value;
  $details.style.display = 'none';
  $error.style.display = 'none';
  $loader.style.display = 'block';

  fetch(`/weather?address=${searchLocation}`).then((response) => {
    response.json().then((data) => {
      $loader.style.display = 'none';
      if (data.error) {
        $error.innerText = data.error;
        $error.style.display = 'block';
      } else {
        const {location, current} = data;
        $location.innerText = `Location: ${location.name} ${location.region}, ${location.country}`;
        $description.innerText = `Description: ${current.weather_descriptions}`;
        $temp.innerText = `Temp: ${current.temperature} °C`;
        $isDay.innerText = `${current.is_day === 'yes' ? 'Day' : 'Night'}`;
        $icon.src = current.weather_icons[0];
        $pressure.innerText = `Pressure: ${current.pressure} MB - millibar`;
        $humidity.innerText = `Humidity: ${current.humidity}%`;
        $windDirection.innerText = `Wind: ${current.wind_dir} ${current.wind_speed}km/hr`;
        $visibility.innerText = `Visibility: ${current.visibility} KM`;
        $lat.innerText = `Latitudes: ${location.lat}`;
        $lon.innerText = `Longitudes: ${location.lon}`;
        $details.style.display = 'block';
      }
    });
  });
});
