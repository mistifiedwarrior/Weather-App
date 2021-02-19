const weatherForm = document.querySelector('#weather-form');
const search = document.querySelector('input');
const $loader = document.querySelector('.loader');
const $error = document.querySelector('#error');
const $details = document.querySelector('.details');
const $location = document.querySelector('#location');
const $temp = document.querySelector('#temp');
const $description = document.querySelector('#description');
const $pressure = document.querySelector('#pressure');
const $visibility = document.querySelector('#visibility');
const $humidity = document.querySelector('#humidity');
const $windSpeed = document.querySelector('#wind-speed');
const $windDirection = document.querySelector('#wind-direction');
const $longitude = document.querySelector('#longitude');
const $latitude = document.querySelector('#latitude');

const showError = (error) => {
  $error.style.display = 'block';
  $details.style.display = 'none';
  return ($error.innerText = error);
};

const showLoader = () => {
  $loader.style.display = 'block';
  $error.style.display = 'none';
  $details.style.display = 'none';
};
const showDetails = (current, location) => {
  $error.style.display = 'none';
  $details.style.display = 'block';
  $location.innerText = `${location.name} ${location.region}, ${location.country}`;
  $temp.innerText = `${current.temperature}°C`;
  $description.innerText = `${current.weather_descriptions.join(', ')}`;
  $pressure.innerText = `${current.pressure}MB`;
  $visibility.innerText = `${current.visibility}km`;
  $humidity.innerText = `${current.humidity}%`;
  $windSpeed.innerText = `${current.wind_speed}km/h`;
  $windDirection.innerText = `${current.wind_dir} wind`;
  $longitude.innerText = `${location.lon}`;
  $latitude.innerText = `${location.lat}`;
};


const main = () => {
  weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showLoader();

    fetch(`/weather?address=${search.value}`)
      .then((res) => res.json())
      .then(({error, current, location}) => {
        $loader.style.display = 'none';
        if (error) return showError(error);
        showDetails(current, location);
      });
  });
}

window.onload = main;